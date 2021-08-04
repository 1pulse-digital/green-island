import React from "react";

export const Register = () => {
  return (
    <div
      className={
        " sm:grid  grid-cols-2 md:h-[800px] sm:h-96 w-full bg-gray-100 content-center"
      }
    >
      {/* Left column */}

      <div className={" px-10  grid-cols-2   "}>
        <h6 className={"text-4xl pb-8 grid   "}>Create an Account</h6>
        <div>
          <div className="grid  grid-cols-2 gap-4 m-auto bg-white py-12 px-10 ">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                First Name *
                <input
                  type="text"
                  id="contact-form-name"
                  className="  border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                Password *
                <input
                  type="text"
                  id="contact-form-password"
                  className="  border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                Last Name *
                <input
                  type="text"
                  id="contact-form-lastnamel"
                  className="  border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                Confirm Password *
                <input
                  type="text"
                  id="contact-form-confirmpassword"
                  className="  border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                Email *
                <input
                  type="text"
                  id="contact-form-email"
                  className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className={"bg-white py-4  px-12"}>
            <p className={"border border-gray-700 w-full  py-2 px-4 "}>
              <p className={"text-opacity-100 font-bold"}>
                To create an account, please review our terms and conditions
                before you click on the "register" button below.{" "}
              </p>
              <br></br>By clicking on the "register" button you agree to you
              personal data being used in accordance with the privacy notice and
              cookie notice. We will use your personal data to manage your
              account, fulfill your order, and dispatch goods via our courier
              service. Your phone number is required for delivery contact from
              the courier.
            </p>
          </div>
          <div className="col-span-2  bg-white py-8 px-10">
            <button
              type="submit"
              className="py-2 px-4 border border-gray-700 hover:bg-gray-500 focus:ring-indigo-500 focus:ring-offset-indigo-200  text-black justify-items justify-items-start  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   "
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Right column */}

      <div className={" px-10  mr-10  text-lg py-20   "}>
        <div className={"bg-white py-10 px-10 "}>
          <p className={"font-bold text-2xl "}>
            Benefits of Creating an Account{" "}
          </p>
          <br></br>
          <p className={"font-bold"}>
            News and exclusive offers!<br></br>
          </p>
          Sign up to receive email updates on promotions, launches, gift ideas
          and more. <br></br>
          <br></br>
          <p className={"font-bold"}>
            {" "}
            Order History <br></br>
          </p>
          Receive important information about your order.<br></br>
          <br></br>
          <p className={"font-bold"}>
            Faster Checkout<br></br>
          </p>
          Save your billing and shipping information to make repeat purchases
          easier.
        </div>
      </div>
    </div>
  );
};
