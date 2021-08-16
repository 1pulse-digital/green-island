import React from "react";
import Image from "next/image";
import idexis from "../images/Idexis.png";
import amipro from "../images/amipro.png";
import coyne from "../images/coyne.png";
import medford from "../images/medford.png";
import prime from "../images/prime.jpg";

export const Suppliers = () => {
  return (
    <div
      className={
        " lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1  py-40 px-20  w-full sm:space-y-10 bg-white-900 relative   "
      }>
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2   sm:grid-cols-1 p-5"
        }>
        <div className={" "}>
          <Image src={idexis} alt="idexis" />
        </div>
        <div>
          <Image src={amipro} alt="amipro" />
        </div>
        <div>
          <Image src={coyne} alt="coyne" />
        </div>
        <div>
          <Image src={medford} alt="medford" />
        </div>
        <div>
          <Image src={prime} alt="prime" />
        </div>
      </div>
    </div>
  );
};
