import React from "react";
import Image from "next/image";
import infection from "../images/infection.jpeg";
import digestive from "../images/digestive.jpeg";
import daily from "../images/daily.jpeg";
import mental from "../images/mental.jpeg";
import stress from "../images/stress.jpeg";

export const Categories = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20 ">
      <div className="flex items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none z-10 absolute bg-gray-300 text-gray p-2 rounded-full hover:bg-gray-400 m-20 mt-96  "
        >
          Infection Management
        </button>
      </div>
      <div className="flex flex-col  lg:flex-row mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20 ">
        <div className={"md:w-1/2 sm:w-1/2 lg:w-1/2 "}>
          <Image
            layout=""
            objectFit=""
            src={infection}
            alt="infection management"
          />
        </div>
        <div className="max-w-xl  mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none"></h5>
        </div>
        <div className={"space-y-0 "}>
          <div className="grid  row-gap-5 sm:grid-cols-2 ">
            <div className="max-w-md">
              <p className="text-sm text-gray-700">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none z-10 absolute bg-gray-300 text-gray p-2 rounded-full hover:bg-gray-400 m-20 mt-60  "
                  >
                    Mental Health
                  </button>
                </div>
                <Image layout="" objectFit="" src={digestive} />
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-700">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none z-10 absolute bg-gray-300 text-gray p-2 rounded-full hover:bg-gray-400 m-20 mt-60  "
                  >
                    Daily Self Care
                  </button>
                </div>
                <Image layout="" objectFit="" src={stress} />
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-700">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none z-10 absolute bg-gray-300 text-gray p-2 rounded-full hover:bg-gray-400 m-20 mt-60   "
                  >
                    Digestive Health
                  </button>
                </div>
                <Image layout="" objectFit="" src={daily} />
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-gray-700">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none z-10 absolute bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400 m-20 mt-60  "
                  >
                    Stress Management
                  </button>
                </div>
                <Image layout="" objectFit="" src={mental} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
