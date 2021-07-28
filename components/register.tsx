import React from "react";

export const Register = () => {
  return (
    <div
      className={
        " sm:grid  grid-cols-2 h-[800px] w-full bg-gray-100 content-center"
      }
    >
      {/* Left column */}

      <div className={" px-10   "}>
        <div>
          <h6 className={"text-4xl pb-2 grid  "}>Create an Account</h6>

          <form className=" flex  px-4 py-8  dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10  space-x-3 w-3/4  "></form>
          <div className=" inline-flex ">
            <input
              type="text"
              id="contact-form-name "
              className="  border border-gray-300 gap-2 flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
              placeholder="First name"
            />
          </div>
          <div className=" inline-block gap-x-10 ">
            <input
              type="text"
              id="contact-form-email"
              className=" appearance-none  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
              placeholder="Last Name"
            />
          </div>
          <div className="  ">
            <input
              type="text"
              id="contact-form-email"
              className="  border border-gray-300 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
              placeholder="Password"
            />
          </div>

          <div className="  ">
            <input
              type="text"
              id="contact-form-email"
              className="   border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
              placeholder="Confirm Password"
            />
          </div>
          <div className=" ">
            <input
              type="text"
              id="contact-form-email"
              className="   border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 "
              placeholder="Email"
            />
          </div>

          <div className=" text-right">
            <button
              type="submit"
              className="py-2 mt-8 px-4 border border-gray-300  bg-white-600 hover:bg-gray-00 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-start"
            >
              Register
            </button>
          </div>
        </div>
        <div className="w-full    mt-10 bg-red-900   ">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white  dark:bg-gray-800"></div>
          <div className="grid  grid-cols-2 gap-4 max-w-7xl ">
            <div className="col-span-2 lg:col-span-1 ">
              <div className="col-span-2 lg:col-span-1 max-w-7xl"></div>
              <div className="col-span-2 lg:col-span-1"></div>
              <div className="col-span-2 lg:col-span-1"></div>
              <div className="col-span-2 lg:col-span-1"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column */}

      <div className={" px-10  mr-10  text-lg  "}>
        <div className={"bg-white py-10 px-10 "}>
          <p className={" "}>Benefits of Creating an Account </p>
          <br></br>
          <p className={""}>
            Benefits of Creating an Account News and exclusive offers! Sign up
            to receive email updates on promotions, launches, gift ideas and
            more. Order History Receive important information about your order.
            Faster Checkout Save your billing and shipping information to make
            repeat purchases easier.
          </p>
        </div>
      </div>
    </div>
  );
};
