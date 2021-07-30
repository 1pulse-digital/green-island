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
        " grid-cols-5  h-[150px] w-full bg-white-900 relative py-6 px-4 gap-x-26  "
      }
    >
      <div className={"grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 p-5"}>
        <div className={""}>
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
