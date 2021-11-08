import React from "react";

// import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import idexis from "../images/Idexis.jpg";
import amipro from "../images/Amipro.jpg";
import coyne from "../images/Coyne.jpg";
import medford from "../images/Medford.jpg";
import prime from "../images/Prime-Quest.jpg";

import China from "../images/China-Herb.jpg";
import Corpclo from "../images/Corpclo.jpg";
import Fagron from "../images/Fagron.jpg";
import Nordic from "../images/Nordic-Naturals.jpg";
import Solgar from "../images/Solgar.jpg";
import Theta from "../images/Theta-Health.jpg";
import Topmed from "../images/Topmed.jpg";
import Vibrant from "../images/Vibrant-Health.jpg";
import Wings from "../images/Wings.jpg";
import wlast from "../images/wlast.jpg";
import Xymogen from "../images/Xymogen.jpg";

var Carousel = require("react-responsive-carousel").Carousel;

export const Suppliers = () => {
  return (
    <div className={""}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4   lg:h-24 md:52 sm:h-96  h-24 my-12 px-12">
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
        </div>

        <div className="grid lg:grid-cols-4 gap-4   md:grid-cols-2 sm:grid-cols-1    lg:h-24 md:52 sm:h-96 my-12 px-12">
          <div className=" grid-cols-1 ">
            <Image src={China} alt="china-herb" />
          </div>
          <div className=" grid-cols-1 ">
            {" "}
            <Image src={Corpclo} alt="Corpclo" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={Fagron} alt="Fagron" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={Nordic} alt="Nordic" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4   lg:h-24 md:52 sm:h-96 my-12 px-12">
          <div className=" grid-cols-1 ">
            <Image src={Theta} alt="Theta" />
          </div>
          <div className=" grid-cols-1 ">
            {" "}
            <Image src={Topmed} alt="Topmed" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={Vibrant} alt="Vibrant" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={Wings} alt="Wings" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4   lg:h-24 md:52 sm:h-96 h-24 my-12 px-12">
          <div className=" grid-cols-1 ">
            <Image src={wlast} alt="wlast" />
          </div>
          <div className=" grid-cols-1 ">
            {" "}
            <Image src={Xymogen} alt="Xymogen" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={prime} alt="prime" />
          </div>
          <div className=" grid-cols-1 ">
            <Image src={Solgar} alt="Solgar" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
