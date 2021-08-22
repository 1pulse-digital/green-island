import React from "react";
import Image from "next/image";
import idexis from "../images/Idexis.png";
import amipro from "../images/amipro.png";
import coyne from "../images/coyne.png";
import medford from "../images/medford.png";
import prime from "../images/prime.jpg";

export const Suppliers = () => {
  return (

      <div className={"grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 p-10 sm:px-10 sm:pt-20"}>
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
  );
};
