import React from "react";
import Image from "next/image";
import bottle from "../images/bottle.png";

export const About = () => {
  return (
    <div
      className={
        " bg-gray-100 pt-6 px-4 sm:px-6 lg:px-8 grid grid-cols-2 p-0"
      }
    >
      <div className={"h-[700px] grid content-center"}>
      <div className={"h-[500px] relative"}>
        <Image
          src={bottle}
          alt="logo"
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
      </div>

      <div className={"grid content-center px-12"}>
        <h1
          className={
            "font-sans md:font-serif h-full text-5xl  text-gray-500   font-bold  "
          }
        >
          Your body is incredible
        </h1>
        <p>
          It’s capable of extraordinary repair and self-healing. But to access
          that power ​you must remove the obstacles slowing it down and provide
          the tools it needs for the job. That’s precisely what we HELP YOU TO
          do!
        </p>
      </div>
      {/* <div
          className={
            "bg-transparent hover:bg-blue text-blue-dark font-semibold uppercase hover:text-white py-2 px-8 border border-black hover:border-blue rounded    flex-auto w-1/2  justify-center pl-96"
          }
        >
          <button>Shop All</button>
        </div> */}
    </div>
  );
};
