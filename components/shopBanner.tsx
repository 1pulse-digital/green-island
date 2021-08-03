import React from "react";
import Image from "next/image";
import shop from "../images/shop-banner.png";

export const ShopBanner = () => {
  return (
    <div
      className={"grid sm:grid-col-1 lg:grid-cols-1 h-[550px]  bg-gray-50   "}
    >
      <div className={"relative px-[100px] grid content-center  "}>
        ]
        <Image
          layout="fill"
          objectFit="cover"
          src={shop}
          alt="this is an image"
        />
        <div className={" grid  sm:px-0 content-center  "}>
          <h1
            className={
              "lg:text-5xl  md:text-4xl text-2xl text-primary z-10 sm:grid-cols-1 md:grid-cols-1 "
            }
          >
            Get 15% off your first purchase.
          </h1>
          <p className={"text-primary z-10 py-8 "}>
            Fill in your details below to receive to receive Your 15% off coupon
            code.
          </p>
          <div className={" "}>
            <form className="absolute   grid-cols-3 sm:grid-cols-1  ">
              <input
                placeholder="Full Name"
                required
                type="text"
                className=" h-12 px-4 bg-white border border-gray-300 rounded-full shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <input
                placeholder="Email Address"
                required
                type="text"
                className=" h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded-full shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />

              <button
                type="submit"
                className="  h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
