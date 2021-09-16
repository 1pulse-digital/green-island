import React from "react";
import { Disclosure } from "@headlessui/react";
import { divide } from "lodash";

// import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../button";
import Image from "next/image";
import idexis from "../images/Idexis.png";
import amipro from "../images/amipro.png";
import coyne from "../images/coyne.png";
import medford from "../images/medford.png";
import prime from "../images/prime.jpg";

var Carousel = require("react-responsive-carousel").Carousel;

export const Suppliers = () => {
  const customPrevArrow = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button title={label} onClick={onClickHandler}>
      prev
    </button>
  );

  const customNextArrow = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button className="  " title={label} onClick={onClickHandler}>
      next
    </button>
  );
  return (
    <div className={""}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        // renderArrowNext={customNextArrow}
        // renderArrowPrev={customPrevArrow}
      >
        {/* <div className={"  mx-8  my-12"}>
          <Image className="mx-8" src={idexis} alt="idexis" />

          <Image src={amipro} alt="amipro" />

          <Image src={coyne} alt="coyne" />

          <Image src={medford} alt="medford" />

          <Image src={prime} alt="prime" />
        </div>

        <div className={" my-12 "}>
          <Image src={idexis} alt="idexis" />

          <Image src={amipro} alt="amipro" />

          <Image src={coyne} alt="coyne" />

          <Image src={medford} alt="medford" />

          <Image src={prime} alt="prime" />
        </div>
        <div className={" my-12 "}>
          <Image src={idexis} alt="idexis" />

          <Image src={amipro} alt="amipro" />

          <Image src={coyne} alt="coyne" />

          <Image src={medford} alt="medford" />

          <Image src={prime} alt="prime" />
        </div> */}

        <div className="grid grid-cols-5 gap-4  h-24 my-12 px-12">
          <div className=" grid-cols-1 ">
            <Image src={idexis} alt="idexis" />
          </div>
          <div className=" grid-cols-1 ">
            {" "}
            <Image src={amipro} alt="amipro" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={coyne} alt="coyne" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={medford} alt="medford" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={prime} alt="prime" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 bg-red-500 h-24 my-12 px-12">
          <div className=" grid-cols-1 bg-gray-900">
            <Image src={idexis} alt="idexis" />
          </div>
          <div className=" grid-cols-1 bg-green-900">
            {" "}
            <Image src={amipro} alt="amipro" />
          </div>
          <div className=" grid-cols-1 bg-blue-900">
            <Image src={coyne} alt="coyne" />
          </div>
          <div className=" grid-cols-1 bg-yellow-900">
            <Image src={medford} alt="medford" />
          </div>
          <div className=" grid-cols-1 bg-pink-900">
            <Image src={prime} alt="prime" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
