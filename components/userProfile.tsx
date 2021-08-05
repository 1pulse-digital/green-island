import React from "react";
import link from "next/link";

export const UserProfile = () => {
  return (
    <div className={"bg-gray-200 h-[1000px]"}>
      <h6 className={"text-4xl pb-8 grid px-24 py-12   "}>Edit Profile</h6>
      <div className={"grid grid-cols-2"}>
        {/* Left column with profile menu */}
        <div className={"bg-gray-400 h-[400px] w-1/4  ml-24 semibold"}>
          <div className={"py-10 px-10 "}>
            My Details<br></br>
            <br></br>
            My Orders <br></br>
            <br></br>
            Wish List<br></br>
            <br></br>
            Medical Aid Details
          </div>
        </div>
        {/* Right column with form */}

        <div className={" "}>
          <div className="grid  grid-cols-2 gap-6  mr-24 w-11/12  px-10 bg-white py-12  ">
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
                Old Password *
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
                New Password *
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
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                Confirm New Password *
                <input
                  type="text"
                  id="contact-form-email"
                  className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 mb-2">
              <div className=" relative ">
                Address *
                <input
                  type="text"
                  id="contact-form-email"
                  className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                Tel Number *
                <input
                  type="text"
                  id="contact-form-email"
                  className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <div className="col-span-2 lg:col-span-1  mb-6">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="col-span-1 lg:col-span-1 mb-6 ">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className=" border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-span-2  bg-white py-8 px-10">
                <button
                  type="submit"
                  className="py-2 px-14 border border-secondary bg-secondary hover:bg-primary focus:ring-indigo-500 focus:ring-offset-indigo-200  text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  ">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
