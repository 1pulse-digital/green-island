import React from "react";

export const UserProfile = () => {
  return (
    <div className={"bg-gray-100 h-[1000px] font-karla text-primary"}>
      <h6 className={"text-4xl pb-8 grid px-24 py-12 text-primary  "}>
        Edit Profile
      </h6>
      <div className={"grid md:grid-cols-3 sm:grid grid-cols-1"}>
        {/* Left column with profile menu */}
        <div
          className={
            "bg-gray-300 h-[250px] w-2/3 ml-24 semibold py-12 font-karla"
          }>
          <div className={"py-2"}>
            <a
              href=" "
              className="py-10 px-10 text-lg text-primary font-semi-bold">
              My Details
            </a>
          </div>
          <div className={"py-2"}>
            <a
              href=" "
              className="px-10 text-lg text-primary font-semi-bold">
              Order History
            </a>
          </div>
          <div className={"py-2"}>
            <a
              href=" "
              className="px-10 text-lg text-primary font-semi-bold">
              Medical Aid Details
            </a>
          </div>
        </div>

        {/* Right column with form */}
        <div
          className={
            " md:grid-cols-3 col-span-2 md:mr-24 sm:mr sm:grid-cols-1  "
          }>
          <div className="grid grid-cols-2 gap-6 py-12 px-10 mr-24 w-full bg-white">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                First Name *
                <input
                  type="text"
                  id="contact-form-name"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Old Password *
                <input
                  type="text"
                  id="contact-form-password"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Last Name *
                <input
                  type="text"
                  id="contact-form-lastnamel"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                New Password *
                <input
                  type="text"
                  id="contact-form-confirmpassword"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Email *
                <input
                  type="text"
                  id="contact-form-email"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Confirm New Password *
                <input
                  type="text"
                  id="contact-form-email"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 mb-2 lg:col-span-1">
              <div className="relative">
                Address *
                <input
                  type="text"
                  id="contact-form-email"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative">
                Tel Number *
                <input
                  type="text"
                  id="contact-form-email"
                  className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <div className="col-span-2 mb-6 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="col-span-1 mb-6 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    id="contact-form-email"
                    className="flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white border border-transparent border-gray-900 shadow-sm appearance-none focus:border-transparent focus:ring-2 focus:ring-gray-600 focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-span-2 py-8 px-10 bg-white">
                <button
                  type="submit"
                  className="py-2 px-14 text-base font-semibold text-center text-white rounded-full border shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none border-secondary bg-secondary hover:bg-primary">
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
