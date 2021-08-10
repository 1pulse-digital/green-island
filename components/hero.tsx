import React from "react";
import Image from "next/image";
import hero from "../images/banner.png";

export const Hero = () => {
  return (
    <div className={"sm:grid grid h-[800px]  w-full bg-gray-50 z-0 "}>
      <div className={"relative px-[100px]  grid content-center "}>
        <div className={" top-0 bottom-0 right-0 left-0   "}>
          <Image
            layout="fill"
            objectFit="cover"
            src={hero}
            alt="this is an image"
          />
          <div className={"grid"}>
            <h1
              className={
                "md:text-7xl z-10  sm: text-3xl   md:px-2 text-primary font-medium"
              }>
              Perfect health is
            </h1>
            <h1
              className={
                "md:text-7xl z-10  sm: text-3xl   md:px-2 text-primary font-medium"
              }>
              within your grasp.
            </h1>
            <p className={"z-10 text-[20px] mt-8 text-gray-700 font-light"}>
              We empower our patients with the tools to heal themselves,{" "}
              <br></br>and the knowledge to own their health.
            </p>
            <div className="relative  my-8 sm:w-1/2 ">
              <input
                type="search"
                className="bg-white shadow rounded-full border-0 p-3 w-1/2"
                placeholder="Search products by: symptoms..."></input>
              <div className="absolute pin-r pin-t mt-3  text-purple-lighter"></div>
            </div>
            <div className=" text-right z-10 justify-self-start">
             
              <button
                type="submit"
                className="py-2 px-8 sm:w-full bg-primary hover:bg-secondary focus:ring-secondary focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  hover:text-white">
                Shop all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
