import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero from "../../images/perfect-health-banner.jpg";
import mobileHero from "../../images/perfect-health-mobile-banner.jpg";


import Link from "next/link";
import Button from "../button";
import { AlgoliaAutocomplete } from "../search/autocomplete";

const MobileBanner = () => {
  return (
    <div className={" grid h-full relative px-[50px] content-center"}>
      <div className={"absolute inset-0"}>
        <Image
          layout="fill"
          objectFit="cover"
          src={mobileHero}
          alt="herbs in a bowl"
        />
      </div>

      <div className={"grid z-10 "}>
        <h1 className={"text-5xl text-primary font-normal font-karla"}>
          Perfect health is within your grasp.
        </h1>

        <p className={"text-xl mt-8 text-gray-600 font-light font-karla"}>
          <span className="bg-white/90 inline">
            We empower our patients with the tools to heal themselves,
            and the knowledge to own their health.
          </span>
        </p>

        {/* Search box */}
        <div className="relative flex py-4 w-1/2 lg:w-1/3 2xl:w-1/4">
          <AlgoliaAutocomplete />
        </div>

        {/* Shop all button */}
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
        <div className={"grid z-10 relative"}>
          <h1 className={"text-5xl lg:text-7xl text-primary font-medium font-karla"}>
            Perfect health is<br />
            within your grasp.
          </h1>

          <p className={"text-2xl mt-8 text-gray-600 font-light font-karla "}>
            <span
              className={"bg-white/90 inline rounded"}>We empower our patients with the tools to heal themselves,</span>
            <br />
            <span className={"bg-white/90 inline rounded"}>and the knowledge to own their health.</span>
          </p>

          {/* Search box */}
          <div className="relative py-4 w-1/2 lg:w-1/3 2xl:w-1/4">
            <AlgoliaAutocomplete />
          </div>

          {/* Shop all button */}
          <div className=" text-right z-10 justify-self-start">
            <Link href={"/shop"}>
              {/*TODO: Use the Button component */}
              <button
                type="submit"
                className="py-2 px-8 sm:w-full bg-primary hover:bg-secondary focus:ring-secondary focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  hover:text-white">
                Shop all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className={"h-[800px]"}>
      <div className="hidden md:block h-full">
        <DesktopBanner />
      </div>

      <div className={"md:hidden h-full"}>
        <MobileBanner />
      </div>
    </div>
  );
};
