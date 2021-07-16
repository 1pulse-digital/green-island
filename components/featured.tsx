import React from "react";
import home from "../pages/home";
import Image from "next/image";
import pills1 from "../images/pills1.png";
import pills2 from "../images/pills2.png";
import pills3 from "../images/pills3.png";
import pills4 from "../images/pills4.png";

export const Featured = () => {
  return (
    <div
      className={" pt-8 pb-32 bg-gray-100 justify-center items-center pl-48 "}
    >
      <div className={" flex p-10 "}>
        <Image src={pills1} alt="facebook" />
        <Image src={pills2} alt="twitter" />
        <Image src={pills3} alt="twitter" />
        <Image src={pills4} alt="twitter" />
      </div>
    </div>
  );
};
