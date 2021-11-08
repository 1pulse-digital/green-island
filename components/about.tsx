import React from "react";
import { MedicalAnimation } from "./home/animation";

export const About = () => {
  return (
    <div className={"grid h-full md:h-[700px] w-full content-center bg-gray-50"}>
      <div className={"grid grid-cols-1 md:grid-cols-2 "}>
        {/* Left column - Bottle icon */}

        <div className={"grid justify-self-center sm:py-10 "}>
          {/* <Image src={bottle} alt="homeopath bottle icon" /> */}
          <MedicalAnimation />

        </div>

        {/* Right column text */}

        <div className={" grid content-center font-karla p-5 sm:p-10 md:max-w-prose "}>
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
            It is capable of healing self-healing. To access this power ​you
            must remove the obstacles in its way and provide the tools it needs
            for the job.
          </p>
          <p
            className={
              "content-center text-gray-700 font-karla pt-4 text-center md:text-left text-[18px]"
            }>
            That’s what we help you to do!
          </p>
          <div className="pt-5">
            {/* FIXME */}
            <a href="/about" className={"flex items-center justify-center md:justify-start"}>
              <button
                type="submit"
                className="p-2 px-6 mr-6 font-normal tracking-wide text-white transition duration-200 rounded-full shadow-md focus:outline-none font-karla bg-deep-purple-accent-400 bg-primary text-gray hover:bg-deep-purple-accent-700 hover:bg-secondary focus:shadow-outline">
                More about us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
