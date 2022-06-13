import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { fetchAPI, getStrapiURL } from "../lib/api";
import { parseErrorResponse } from "../utils/strapi";
import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import LogRocket from "logrocket";

interface ContextType {
  user?: User;
  logout: () => void;
  signIn: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<string>;
  fetchMe: (token?: string) => void;
  isLoading: boolean;
  authToken?: string;
  setLoading: (isLoading: boolean) => void;
}

const Context = createContext({} as ContextType);

function AuthContext({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [savedAuthToken, setSavedAuthToken] = useLocalStorage<string | undefined>("token", undefined);
  const [authToken, setAuthToken] = useState<string | undefined>(savedAuthToken);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [autoLogin, setAutoLogin] = useState<boolean>(true);

  // create a function that can be used to (re)fetch the user
  const fetchMe = useCallback((token?: string) => {
    (async () => {
      if (token || authToken) {
        try {
          setLoading(true);
          const response = await fetchAPI("/users/me", token || authToken) as User;
          setUser(response);
          setLoading(false);

          // Set LogRocket identity
          LogRocket.identify(String(response.id), {
            name: (response.first_name + " " + response.last_name).trim() || response.username,
            email: response.email,

            // Custom user variables
            role: response.role.name,
          });
        } catch (e: any) {
          console.error(`Could not fetch user: ${e.message ? e.message : e.toString()}`);
          logout();
          setLoading(false);
        }
      }
    })();
  }, [authToken]);

  // auto login only once
  useEffect(() => {
    if (autoLogin) {
      setAutoLogin(false);
      fetchMe();
    }
  }, [autoLogin, fetchMe]);

  // handle router loading
  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // save the auth token in local storage whenever the state is updated
  useEffect(() => {
    setSavedAuthToken(authToken);
  }, [
    authToken,
    setSavedAuthToken,
  ]);

  const signIn = async (username: string, password: string) => {
    const requestUrl = getStrapiURL("/auth/local");
    let data;
    try {
      setLoading(true);
      const response = await fetch(requestUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: username,
          password,
        }),
      });
      data = await response.json();
    } catch (e: any) {
      setLoading(false);
      console.error(`Could not sign in: ${e.message ? e.message : e.toString()}`, e);
      throw `Something went wrong with the sign in process`;
    }
    setLoading(false);

    if (data.error) {
      console.warn(`Login failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      throw `Login failed: ${combinedMessage}`;
    } else {
      // login success
      const { jwt } = data as { user: User, jwt: string };
      fetchMe(jwt);
      // console.debug(`User signed in: ${user.username}`);
      setAuthToken(jwt);
    }
  };

  const register = async (username: string, password: string): Promise<string> => {
    const requestUrl = getStrapiURL("/auth/local/register");
    setLoading(true);
    let data;
    try {
      const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          username,
          password,
        }),
      });
      data = await response.json();
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.error(`Could not register user: ${e.message ? e.message : e.toString()}`);
      throw `Something went wrong with the registration`;
    }

    if (data.error) {
      console.warn(`Registration failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      throw `Registration failed: ${combinedMessage}`;
    } else {
      // registration success
      const { jwt } = data as { user: User, jwt: string };
      setAuthToken(jwt);
      return jwt;
    }
  };

  const logout = () => {
    setUser(undefined);
    setAuthToken(undefined);
  };

  return (
    <Context.Provider
      value={{
        user,
        logout,
        signIn,
        fetchMe,
        register,
        isLoading,
        setLoading,
        authToken,
      }}>
      {children}
    </Context.Provider>
  );
}

const useAuthContext = () => useContext(Context);
export { useAuthContext };

export default AuthContext;
