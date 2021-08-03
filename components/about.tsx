import React from "react";
import Image from "next/image";
import bottle from "../images/bottle.png";

export const About = () => {
  return (
    <div className={" h-[750px] sm:grid-cols-2 "}>
      <div className={"grid bg-gray-50"}>
        <div className={"grid sm:grid-cols-1 md:grid-cols-2 h-[700px]  "}>
          {/* Left column */}
          <div className={"  grid content-center justify-center"}>
            <div className={"  top-20 bottom-32 right-0   "}>
              <Image src={bottle} alt="homeropath icon" />
            </div>
          </div>
          <div className={" content-center  px-10  grid"}>
            <h1
              className={
                "md:text-5xl pb-4 font-bold  grid sm: text-3xl text-primary"
              }
            >
              Your body is incredible.
            </h1>
            <p
              className={
                "mr-32 content-center  grid sm:max-w-sm md:max-w-md text-gray-700 "
              }
            >
              It is capable of healing itself. To access this power ​you must
              remove the obstacles in its way, provide the tools it needs for
              the job. That’s what we help you to do!
            </p>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-items-start h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  absolute bg-primary text-gray p-2 rounded-full hover:bg-secondary  mt-32  "
              >
                More about us
              </button>
            </div>
          </div>
        </div>
        {/* Right column */}
      </div>
    </div>
  );
};
