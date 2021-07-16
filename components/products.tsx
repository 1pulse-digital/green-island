import React from "react";
import home from "../pages/home";
import Image from "next/image";
import covid from "../images/covid.jpg";
import children from "../images/children.jpg";
import men from "../images/men.jpg";
import women from "../images/women.jpg";

export const Products = () => {
  return (
    <div
      className={
        " pt-32 pb-32 bg-white-900 relative  px-4 sm:px-6 lg:px-8 flex pl text-gray-500 text-4xl  "
      }
    >
      <div className={" flex p-10 "}>
        <Image src={covid} alt="facebook" />
        <Image src={men} alt="twitter" />
        <Image src={women} alt="twitter" />
        <Image src={children} alt="twitter" />
      </div>
    </div>
  );
};
