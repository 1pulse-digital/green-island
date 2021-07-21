import React from "react";
import home from "../pages/home";
import Image from "next/image";
import hero from "../images/banner.png";

const Hero = () => {
  return (
    <div className={"w-full flex-wrap relative"}>
      <div
        className={
          "font-sans md:font-serif  flex flex-col absolute top-0 left-0 justify-center items-left text-5xl font-bold z-10 text-gray-500 py-72 pl-20 w-1/2   "
        }
      >
        Perfect health is within your grasp.
      </div>
      <div
        className={
          "font-sans  flex flex-col absolute top-0 left-0 justify-center text-2xl text-gray-500 items-left z-10 py-96 pl-20 mr-96 w-1/2  "
        }
      >
        We are devoted to give our patients not only the tools they need to
        heal, but also the ability to understand and manage their own health.
      </div>
      <div>
        <input
          type="search"
          className={
            "w-1/4 p-1 rounded-md bg-white-700 flex flex-col absolute top-96 text-lg left-0 justify-center  text-gray-500 items-left z-10 mt-32 ml-20   pl-20 mr-96  "
          }
          placeholder="Search products by: symptoms"
        ></input>
      </div>
      <div className={" hidden md:flex h-26 flex-auto pt-5"}>
        <button
          type="button"
          className={
            "  flex flex-col absolute  bg-gray-400 hover:bg-blue text-white font-semibold uppercase hover:text-white  border border-gray-400 hover:border-blue rounded  text-lg  justify-center text-white-500 top-48  z-10 mt-96 ml-20 pl-8 pr-8 py-2 mr-96  "
          }
        >
          Shop All
        </button>
      </div>
      <Image src={hero} alt="facebook" />
    </div>
  );
};

export default Hero;
