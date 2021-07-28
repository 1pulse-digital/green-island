import React from "react";

export const Login = () => {
  return (
    <div className={" sm:grid  grid-cols-2 h-[500px]  w-full bg-gray-100  "}>
      {/* Left column */}

      <div
        className={
          "grid  content-center bg-gray-00   px-10    mr-10  text-lg  bg-gray-100  "
        }
      >
        <h6 className={"text-4xl pb-12  grid"}>Login or create an account</h6>
        <div className={"bg-white py-10 px-10 "}>
          <p className={" grid  "}>New Customers</p>
          <br></br>
          <p className={"text-md lg:pr-48 md:pr-32"}>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>

          <button
            type="submit"
            className="py-2 mt-8 px-4 border border-gray-300  bg-white-600 hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start  "
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className={"bg-gray-100 py-10 px-10 "}>
        <form className=" flex flex-col w-full  px-4 py-8  dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 grid flex w-full  space-x-3 ">
          <div className="w-full max-w-2xl px-10 py-10 m-auto mt-10 bg-white  ">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white  dark:bg-gray-800">
              <h6 className={"text-lg pb-4 font-bold text-left "}>
                New Customers<br></br>
              </h6>
              <p className={"text-lg lg:pr-48 md:pr-32 flex justify-start"}>
                If you have an account with us, please log in.
              </p>
            </div>
            <div className="grid max-w-xl grid-cols-1 gap-4 m-auto">
              <div className="col-span-1 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    className="  appearance-none border border-gray-300 w-full flex-1 appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="col-span-1 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className=" appearance-none border border-gray-300  appearance-none border-b-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className=" text-right">
                <button
                  type="submit"
                  className="py-2 px-4  bg-gray-600 hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start rounded-lg  mt-2"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
