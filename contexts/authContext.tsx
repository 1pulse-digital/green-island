import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { getStrapiURL } from "../lib/api";

interface ContextType {
  user?: User
  logout: () => void
  signIn: (username: string, password: string) => Promise<void>
  register: (username: string, password: string) => Promise<void>
  loading: boolean
}

const Context = createContext({} as ContextType);

function AuthContext({ children }: { children?: React.ReactNode }) {
  const retrieveToken = (): string | undefined => {
    return localStorage.getItem("token") || undefined;
  };

  const saveToken = (token: string) => {
    return localStorage.setItem("token", token);
  };

  const [user, setUser] = useState<User>();

  const [token, setToken] = useState<string>();
  useEffect(() => {
    const cachedToken = retrieveToken();
    if (cachedToken) {
      setToken(cachedToken);
    }
  }, []);

  const [loading, setLoading] = useState<boolean>(false);

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
      setToken(jwt);
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
      console.debug(`Registering user ${username}`);
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
      console.debug("User registered:", data);
      const { user, jwt } = data as { user: User, jwt: string };
      saveToken(jwt);
      setToken(jwt);
      setUser(user);

    } catch (e) {
      console.error(`Could not register user: ${e.message ? e.message : e.toString()}`);
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <Context.Provider
      value={{
        user,
        logout,
        signIn,
        register,
        loading,
      }}>
      {children}
    </Context.Provider>
  );
}

const useAuthContext = () => useContext(Context);
export { useAuthContext };

export default AuthContext;
