import React from "react";
import Image from "next/image";
import bottle from "../images/bottle.png";

export const About = () => {
  return (
    <div className={"grid h-full md:h-[700px] w-full content-center bg-gray-50"}>
      <div className={"grid grid-cols-1 md:grid-cols-2 "}>
        {/* Left column - Bottle icon */}

        <div className={"grid justify-self-center py-10"}>
          <Image src={bottle} alt="homeopath bottle icon" />
        </div>

        {/* Right column text */}

        <div className={" grid content-center font-karla p-10 md:max-w-prose "}>
          <h1
            className={
              "md:text-5xl py-4 font-medium text-4xl text-primary text-center md:text-left"
            }>
            Your body is incredible.
          </h1>
          <p
            className={
              "text-gray-700 text-center md:text-left font-karla text-[18px]"
            }>
            It is capable of healing itself. To access this power ​you must
            remove the obstacles in its way, provide the tools it needs for the
            job.
          </p>
          <p
            className={
              "content-center text-gray-700 font-karla pt-4 text-center md:text-left text-[18px]"
            }>
            That’s what we help you to do!
          </p>
          <div className="pt-5">
            <a href="/about" className={"flex items-center justify-center md:justify-start"}>
              <button
                type="submit"
                className=" font-karla px-6 mr-6 font-normal tracking-wide text-white transition duration-200 shadow-md 
                bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary 
                text-gray p-2 rounded-full hover:bg-secondary  ">
                More about us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
