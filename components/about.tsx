import React from "react";
import home from "../pages/home";
import Image from "next/image";
import bottle from "../images/bottle.png";

export const About = () => {
  return (
    <div
      className={
        "py-11 bg-gray-100 relative pt-6 px-4 sm:px-6 lg:px-8 flex-wrap  pb-14 flex-row"
      }
    >
      <div className={"w-1/2  pt-16 pl-20"}>
        <Image src={bottle} alt="logo" />

        <div className={" w-1/2 h-full flex absolute top-0 left-0"}></div>

        <div
          className={
            " font-sans md:font-serif h-full  absolute top-0 left-0  text-5xl  z-10 text-gray-500  text-center pt-48  font-bold  flex-auto  ml-96 w-1/2 "
          }
        >
          Your body is incredible
        </div>
        <div
          className={
            " font-sans md:font-serif h-full  absolute top-0 left-0    z-10 text-gray-500  text-center pt-72 pl-48  font-bold  flex-auto  ml-96 w-1/2  "
          }
        >
          It’s capable of extraordinary repair and self-healing. But to access
          that power ​you must remove the obstacles slowing it down and provide
          the tools it needs for the job. That’s precisely what we HELP YOU TO
          do!
        </div>
        {/* <div
          className={
            "bg-transparent hover:bg-blue text-blue-dark font-semibold uppercase hover:text-white py-2 px-8 border border-black hover:border-blue rounded    flex-auto w-1/2  justify-center pl-96"
          }
        >
          <button>Shop All</button>
        </div> */}
      </div>
    </div>
  );
};
