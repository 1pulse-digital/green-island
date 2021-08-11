import React from "react";
import Image from "next/image";
import hero from "../images/perfect-health-banner.jpg";
import mobileHero from "../images/perfect-health-mobile-banner.jpg";

const MobileBanner = () => {
  return (
    <div className={"grid relative px-[50px] h-full lg:px-[100px] content-center"}>
      <div>
        <Image
          layout="fill"
          objectFit="cover"
          src={mobileHero}
          alt="herbs in a bowl"
        />
      </div>
      <div className={"grid "}>
        <h1
          className={
            "text-5xl lg:text-7xl z-10  text-primary font-normal font-karla"
          }>
          Perfect health is
        </h1>
        <h1
          className={
            "text-5xl lg:text-7xl z-10  text-primary font-normal font-karla"
          }>
          within your grasp.
        </h1>
        <p
          className={
            "z-10 text-[20px] mt-8 text-gray-600 font-light font-karla"
          }>
          We empower our patients with the tools to heal <br></br>themselves,
          and the knowledge to own their health.
        </p>
        <div className="relative py-4 w-[650px]">
          <input
            type="search"
            className="bg-white shadow rounded-full border-0 py-2 px-8 w-[320px] font-karla"
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
  );
};

const DesktopBanner = () => {
  return (
    <div className={"grid relative px-[50px] h-full lg:px-[100px] content-center "}>
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
              "text-5xl lg:text-7xl z-10 text-primary font-normal font-karla"
            }>
            Perfect health is
          </h1>
          <h1
            className={
              "text-5xl lg:text-7xl z-10 text-primary font-normal font-karla"
            }>
            within your grasp.
          </h1>
          <p
            className={
              "z-10 text-[20px] mt-8 text-gray-600 font-light font-karla"
            }>
            We empower our patients with the tools to heal themselves,
            <br></br>and the knowledge to own their health.
          </p>
          <div className="relative py-4 w-[650px]">
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
    <div className={"h-[700px] bg-gray-500"}>
     
      {/* <div
        className={
          "grid sm:h-full relative px-[50px] lg:px-[100px] content-center "
        }> */}

        <div className="hidden md:block h-full">
          <DesktopBanner />
        </div>

        <div className={"md:hidden bg-red-500 h-full"}>
          <MobileBanner />
        </div>

      {/* </div> */}

    </div>
  );
};

export default Hero;
