import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { fetchAPI, getStrapiURL } from "../lib/api";

interface ContextType {
  user?: User;
  logout: () => void;
  signIn: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  isLoading: boolean;
  authToken?: string;
}

const Context = createContext({} as ContextType);

const retrieveToken = (): string | undefined => {
  return localStorage.getItem("token") || undefined;
};

const saveToken = (token: string) => {
  return localStorage.setItem("token", token);
};

const clearToken = () => {
  return localStorage.removeItem("token");
};

function AuthContext({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [authToken, setAuthToken] = useState<string>();

  // auto login the user if there is still a valid token
  useEffect(() => {
    // create a function that can be used to fetch the user (me)
    const fetchMe = async (token: string) => {
      try {
        const response = await fetchAPI("/users/me", token);
        setUser(response);
        setAuthToken(token);
      } catch (e) {
        console.error(`Could not fetch user: ${e.message ? e.message : e.toString()}`);
        logout();
      }
    };

    const cachedToken = retrieveToken();
    if (cachedToken) {
      fetchMe(cachedToken).finally(() => {
        setLoading(false);
      });
    }

  }, []);

  const [isLoading, setLoading] = useState<boolean>(false);

  const signIn = async (username: string, password: string) => {
    const requestUrl = getStrapiURL("/auth/local");
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
      const data = await response.json();
      console.debug("User signed in:", data);
      const { user, jwt } = data as { user: User, jwt: string };
      saveToken(jwt);
      setAuthToken(jwt)
      setUser(user);
    } catch (e) {
      console.error(`Could not sign in: ${e.message ? e.message : e.toString()}`, e);
    }

    setLoading(false);
  };

  const register = async (username: string, password: string) => {
    const requestUrl = getStrapiURL("/auth/local/register");
    setLoading(true);
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

      const data = await response.json();
      const { user, jwt } = data as { user: User, jwt: string };
      console.debug(`User registered: ${user.username}`);
      saveToken(jwt);
      setUser(user);

    } catch (e) {
      console.error(`Could not register user: ${e.message ? e.message : e.toString()}`);
    }
    setLoading(false);
  };

  const logout = () => {
    clearToken();
    setUser(undefined);
    setAuthToken(undefined);
  };

  return (
    <Context.Provider
      value={{
        user,
        logout,
        signIn,
        register,
        isLoading,
        authToken,
      }}>
      {children}
    </Context.Provider>
  );
}

const useAuthContext = () => useContext(Context);
export { useAuthContext };

export default AuthContext;
