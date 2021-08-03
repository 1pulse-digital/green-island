import React from "react";

export const Login = () => {
  return (
    <div
      className={
        " sm:grid  grid-cols-2 md:h-[700px] sm:h-96  w-full bg-gray-100 content-center"
      }
    >
      <div className={" px-10  mr-10  text-lg  "}>
        <h6 className={"text-4xl pb-8 grid  "}>Login or create an account</h6>
        <div className={"bg-white py-10 px-10 "}>
          <p className={" "}>New Customer </p>
          <br></br>
          <p className={""}>
            New Customers By creating an account with our store, you will be
            able to move through the checkout process faster, store multiple
            shipping addresses, view and track your orders in your account and
            more.
            <div className=" relative md:w-1/3 sm:1/2 ">
              <a
                href="http://localhost:3000/reg"
                className=" py-2 mt-16 px-4  border border-secondary  bg-white-600 hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray  transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 flex "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
                CREATE AN ACCOUNT
              </a>
            </div>
          </p>
        </div>
      </div>
      {/* Left column */}

      <div className={"    "}>
        <div>
          <form className="  flex-col  px-4   dark:bg-gray-800 sm:px-20 md:px-8 lg:px-10  grid  w-full  space-x-3 ">
            <div className="w-full  px-10 py-10  m-auto  bg-white  mt-16 ">
              <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white  dark:bg-gray-800">
                <h6 className={"text-lg pb-4 font-bold text-left "}>
                  New Customers<br></br>
                </h6>
                <p className={"text-lg lg:pr-48 md:pr-32 flex justify-start"}>
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

                <div className=" text-right">
                  <button
                    type="submit"
                    className="py-2 px-20 rounded-full  bg-secondary hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start   mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
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
