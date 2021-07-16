import React from "react";
import home from "../pages/home";

export const Bottom = () => {
  return (
    <div
      className={
        " bg-gray-600  text-white flex flex-row justify-between  pb-20 pl-32 pr-32 relative  px-4 sm:px-6 lg:px-8   "
      }
    >
      <div className={"pl-20 "}>
        © 2021 Perfect Health Practice • Sitemap • Privacy Policy
      </div>
      <div className={"pr-20 "}>Developed and design by 1Pulse Digital</div>
    </div>
  );
};
