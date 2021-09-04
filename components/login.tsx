import React, { MouseEvent, useState } from "react";
import Button from "./button";
import { useAuthContext } from "../contexts/authContext";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export const Login = () => {
  const { signIn, isLoading } = useAuthContext();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: router.query.username as string || "",
    password: router.query.password as string || "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await signIn(credentials.username, credentials.password);
      toast(`Welcome to The Perfect Health Practice!`, { icon: "🌿⚕️" });
    } catch (e) {
      toast.error(e, { icon: "😞️" });
    }
  };

  return (
    <div
      className={
        " grid md:grid-col-1 lg:grid-cols-2 md:h-full lg:h-[700px] w-full bg-gray-100 content-center font-karla p-7 md:px-20 text-primary"
      }>
      {/* First column - Create account*/}
      <div className={"p-10 md:p-20 bg-white"}>
        <h6 className={"text-4xl grid pb-7 "}>Login or create an account</h6>
        <div className={""}>
          <p className={"text-lg "}>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
            <div className=" py-7">
              <Button
                color={"primary"}
                onClick={() => router.push("/register")}
                className={
                  "flex flex-row items-center hover:bg-secondary hover:text-white"
                }>
                <svg
                  className="h-6 w-6 pr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                CREATE AN ACCOUNT
              </Button>
            </div>
          </p>
        </div>
      </div>

      {/* Second column - Sign in */}
      <div>
        <div>
          <form className="mt-10 sm:mt-10 md:ml-0 lg:ml-10  lg:mt-0 text-primary">
            <div className="bg-white p-20">
              <div className="  ">
                <h6 className={"text-4xl grid pb-7"}>Sign in</h6>
                <p className={"text-lg pb-3"}>
                  If you have an account with us, please log in.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 m-auto">
                <label className="block">
                  <span>Email Address*</span>
                  <input
                    type="email"
                    id="contact-form-name"
                    className="rounded-md py-2 px-4 border-primary shadow-sm w-full mt-1 block placeholder-gray-400 focus:outline-none focus:ring ring-offset-2 focus:border-primary"
                    placeholder="user@mail.com"
                    value={credentials.username}
                    name="username"
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </label>

                <div className="relative">
                  Password*
                  <input
                    type="password"
                    id="password-field"
                    className="rounded focus:ring-2 ring-gray-700 w-full py-2 px-4 bg-white"
                    placeholder=""
                    name="password"
                    onChange={handleChange}
                  />
                </div>

                <div className=" text-left">
                  <Button
                    color={"primary"}
                    className={
                      "flex flex-row items-center"
                    }
                    disabled={isLoading}
                    onClick={handleLogin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                    LOGIN
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
