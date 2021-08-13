import { Button } from "@material-ui/core";
import React from "react";

export const Login = () => {
  const signIn = () => {};
  return (
    <div className="h-full">
      <div className="bg-pink-300 p-4">
        <h6 className={"text-4xl"}>Login or create an account</h6>
      </div>

      <div className={"grid grid-cols-2 h-full w-full bg-gray-100"}>
        {/* Left column */}
        <div className={"bg-indigo-400"}>
          <div className={"bg-white py-10 px-10 "}>
            <p className={"text-lg font-bold"}>New Customer </p>
            <br></br>
            <p className={""}>
              New Customers By creating an account with our store, you will be
              able to move through the checkout process faster, store multiple
              shipping addresses, view and track your orders in your account and
              more.
            </p>
            <button
              onClick={signIn}
              className="py-2 px-20 rounded-full  bg-secondary hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start   mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
              Create an account
            </button>
          </div>
        </div>

        {/* Rigth column */}
        <div className="bg-green-400">
          <form className="flex-col px-4 dark:bg-gray-800 sm:px-20 md:px-8 lg:px-10 grid w-full space-x-3 ">
            <div className="w-full  px-10 py-10  m-auto bg-ye bg-yellow-500/10 mt-16 ">
              <div className="mb-6 text-3xl font-light text-gray-800 dark:text-white dark:bg-gray-800">
                <h6 className={"text-lg pb-4 font-bold text-left "}>
                  New Customers<br></br>
                </h6>
                <p className={"text-lg"}>
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
                  />
                </label>

                <div className="relative">
                  Password*
                  <input
                    type="password"
                    id="password-field"
                    className="rounded focus:ring-2 ring-gray-700 w-full py-2 px-4 bg-white"
                    placeholder=""
                  />
                </div>

                <div className="text-right">
                  <button
                    onClick={signIn}
                    className="py-2 px-20 rounded-full  bg-secondary hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start   mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
