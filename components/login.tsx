import React from "react";
import Button from "./button";

export const Login = () => {
  return (
    <div
      className={
        " grid md:grid-col-1 lg:grid-cols-2 md:h-full lg:h-[700px] w-full bg-gray-100 content-center font-karla p-7 md:px-20 text-primary"
      }>
      <div className={"p-20 bg-white"}>
        <h6 className={"text-4xl grid pb-7 "}>Login or create an account</h6>
        <div className={""}>
          <p className={"text-lg "}>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
            <div className=" relative py-7">
              <Button
                className={
                  "flex flex-row items-center hover:bg-secondary hover:text-white"
                }>
                <svg
                  xmlns="http://localhost:3000/reg"
                  className="h-6 w-6 pr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
                CREATE AN ACCOUNT
              </Button>
            </div>
          </p>
        </div>
      </div>
      {/* New Customers - right column */}

      <div >
        <div>
          <form className="mt-10 sm:mt-10 md:ml-0 lg:ml-10  lg:mt-0 text-primary">
            <div className="bg-white p-20">
              <div className="  ">
                <h6 className={"text-4xl grid pb-7"}>Sign in</h6>
                <p className={"text-lg pb-3"}>
                  If you have an account with us, please log in.
                </p>
              </div>
              <div className="grid  grid-cols-1 gap-4 m-auto">
                <div className="col-span-1 lg:col-span-1">
                  <div className=" relative ">
                    Email Address*
                    <input
                      type="text"
                      id="contact-form-name"
                      className="border border-gray-700 w-full flex-1 appearance-none   py-2 px-4 bg-white text-gray-700 placeholder-gray-400  "
                      placeholder="  "
                    />
                  </div>
                </div>

                <div className="col-span-1 lg:col-span-1">
                  <div className=" relative ">
                    Password*
                    <input
                      type="text"
                      id="contact-form-email"
                      className="  border border-gray-700  appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                      placeholder=""
                    />
                  </div>
                </div>

                <div className=" text-left">
              <Button
                className={
                  "flex flex-row items-center hover:bg-secondary hover:text-white"
                }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
                Log in
              </Button>
                  {/* <button
                    type="submit"
                    className="py-2 px-20 bg-secondary hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start   mt-2">
                    Login
                  </button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
