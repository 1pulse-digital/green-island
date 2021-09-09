import React from "react";
import Image from "next/image";
import shop from "../images/shop-banner.png";
import Button from "./button";

export const ShopBanner = () => {
  return (
    <div
      className={"grid sm:grid-col-1 lg:grid-cols-1  h-[450px] bg-gray-50   "}>
      <div className={"relative lg:px-[100px] px-10 grid content-center "}>
        <Image
          layout="fill"
          objectFit="cover"
          src={shop}
          alt="this is an image"
        />
        <div className={" grid  sm:px-0 content-center  "}>
          <h1
            className={
              "lg:text-5xl  md:text-4xl text-2xl text-primary z-10 sm:grid-cols-1 md:grid-cols-1  font-karla"
            }>
            Get 15% off your first purchase.
          </h1>
          <p
            className={
              "z-10 text-2xl my-8 text-gray-600 font-light font-karla"
            }>
            <span className="inline bg-white/90">
              Fill in your details below to receive to receive Your 15% off
              coupon code.
            </span>
          </p>
          <div className={"flex "}>
            <form className="absolute">
              <input
                placeholder="Full Name"
                required
                type="text"
                className="px-4 h-12 bg-white rounded-full appearance-none md:mr-2 md:mb-0 focus:outline-none focus:border-deep-purple-accent-400 focus:shadow-outline"
              />
              <input
                placeholder="Email Address"
                required
                type="text"
                className="px-4 mb-3 h-12 rounded-full transition duration-200 appearance-none md:mr-2 md:mb-0 focus:outline-none focus:border-deep-purple-accent-400 focus:shadow-outline"
              />
              <Button color={"primary"}>Submit</Button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};
