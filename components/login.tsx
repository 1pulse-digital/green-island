import React, { MouseEvent, useState } from "react";
import Button from "./button";
import { useAuthContext } from "../contexts/authContext";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { sendEvent } from "../lib/gtag";

export const Login = () => {
  const { signIn, isLoading } = useAuthContext();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: (router.query.username as string) || "",
    password: (router.query.password as string) || "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await signIn(credentials.username, credentials.password);
      sendEvent({ action: "login" });
      toast(`Welcome to The Perfect Health Practice!`, { icon: "🌿⚕️" });
    } catch (e: any) {
      if (
        e?.includes(
          "This user never set a local password, please login with the provider used during account creation."
        )
      ) {
        await router.push(
          `/forgot-password?email=${credentials.username}&t=redirect`
        );
        toast(
          "We have made some security updates, please reset your password before logging in",
          {
            icon: "🔒",
            duration: 10000,
          }
        );
      } else {
        toast.error(e, { icon: "😞️" });
      }
    }
  };

  return (
    <div
      className={
        " grid md:grid-col-1 xl:grid-cols-2 justify-items-center  md:h-full xl:h-[650px] w-full bg-gray-100 content-center font-karla p-5 sm:p-10 md:px-20 text-primary"
      }>
      
      <div className="grid col-span-2">
        <div className={" xl:my-0 col-span-3"}>
          <form className="text-primary">
            <div className="p-10 bg-white rounded-lg md:p-20">
              <div className="">
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
                    className="block w-full px-4 py-2 mt-1 placeholder-gray-400 rounded-md shadow-sm ring-offset-2 focus:ring focus:outline-none border-primary focus:border-primary"
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
                    className="w-full px-4 py-2 bg-white rounded ring-gray-700 focus:ring-2"
                    placeholder=""
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Link href={"/forgot-password"}>
                    <a
                      className={
                        "hover:text-secondary text-red-500 cursor-pointer"
                      }>
                      Forgot password?
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row gap-4 text-left">
                  <Button
                    color={"primary"}
                    className={"flex flex-row items-center"}
                    disabled={isLoading}
                    onClick={handleLogin}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                    LOGIN
                  </Button>
                      
                  <Link href={"/register"}>
                    <a
                      className={
                        "hover:text-secondary text-primary cursor-pointer pt-4 "
                      }>
                      Register an account
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
