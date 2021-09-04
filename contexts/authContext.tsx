import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { fetchAPI, getStrapiURL } from "../lib/api";
import { parseErrorResponse } from "../utils/strapi";

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
    } catch (e) {
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
      const { user, jwt } = data as { user: User, jwt: string };
      console.debug(`User signed in: ${user.username}`);
      setAuthToken(jwt);
      saveToken(jwt);
      setUser(user);
    }

  };

  const register = async (username: string, password: string) => {
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
    } catch (e) {
      console.error(`Could not register user: ${e.message ? e.message : e.toString()}`);
      throw `Something went wrong with the registration`;
    }

    if (data.error) {
      console.warn(`Registration failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      throw `Registration failed: ${combinedMessage}`;
    } else {
      // registration success
      const { user, jwt } = data as { user: User, jwt: string };
      console.debug(`User registered: ${user.username}`);
      setAuthToken(jwt)
      saveToken(jwt);
      setUser(user);
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
