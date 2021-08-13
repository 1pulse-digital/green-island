import React from "react";
import Image from "next/image";
import hero from "../images/perfect-health-banner.jpg";
import mobileHero from "../images/perfect-health-mobile-banner.jpg";

import { BeakerIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Button from "./button";

const MobileBanner = () => {
  return (
    <div className={" grid h-full relative px-[50px] content-center"}>
      <div className={"absolute inset-0"}>
        <Image
          // className={"opacity-20"}
          layout="fill"
          objectFit="cover"
          src={mobileHero}
          alt="herbs in a bowl"
        />
      </div>

      <div className={"grid z-10 "}>
        <h1 className={"text-5xl  text-primary font-normal font-karla"}>
          Mobile Perfect health is within your grasp.
        </h1>

        <p className={"text-xl mt-8 text-gray-600 font-light font-karla"}>
          <div className="bg-white/90 inline ">
            We empower our patients with the tools to heal <br></br>themselves,
            and the knowledge to own their health.
          </div>
        </p>
        <div className="relative py-4 ">
          <input
            type="search"
            className="bg-white shadow rounded-full border-0 py-2 px-8  font-karla"
            placeholder="Search products"></input>
        </div>

        <div className=" text-right z-10 justify-self-start">
          <Link href="/shop">
            <a>
              <Button color="primary">Shop all</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const DesktopBanner = () => {
  return (
    <div
      className={
        "grid relative px-[50px] h-full lg:px-[100px] content-center "
      }>
      <div>
        <Image
          layout="fill"
          objectFit="cover"
          src={hero}
          alt="herbs in a bowl"
        />
        <div className={"grid"}>
          <h1
            className={
              "text-5xl lg:text-7xl z-10 text-primary font-medium font-karla"
            }>
            Desktop Perfect health is <br /> within your grasp.
          </h1>
          <p
            className={
              "z-10 text-2xl mt-8 text-gray-600 font-light font-karla"
            }>
            <div className="bg-white/90 inline">
              We empower our patients with the tools to heal themselves,
              <br></br>and the knowledge to own their health.
            </div>
          </p>
          <div className="relative flex py-4 w-4/12">
            <input
              type="search"
              className="bg-white rounded-full py-2 px-8 w-[320px] font-karla"
              placeholder="Search products by: symptoms"></input>
          </div>
          <div className=" text-right z-10 justify-self-start">
            <a href="/shop">
              <button
                type="submit"
                className="py-2 px-8 sm:w-full bg-primary hover:bg-secondary focus:ring-secondary focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  hover:text-white">
                Shop all
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className={"h-[700px] "}>
      <div className="hidden md:block h-full">
        <DesktopBanner />
      </div>

      <div className={"md:hidden h-full"}>
        <MobileBanner />
      </div>
    </div>
  );
};

export default Hero;
