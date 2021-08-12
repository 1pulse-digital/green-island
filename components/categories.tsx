import React from "react";
import Image from "next/image";
import infection from "../images/infection_management.jpg";
import digestive from "../images/digestive_health.jpg";
import daily from "../images/daily-self-care.jpg";
import mental from "../images/mental_health.jpg";
import stress from "../images/stress.jpeg";

import { Button } from "../components/button";

export const Categories = () => {
  return (
    <div className={"mt-20 md:mt-20 lg:mb-20 lg:mx-20"}>
      <h1
        className={
          "flex flex-col items-center md:text-5xl pb-20 font-medium text-4xl text-primary md:text-left "
        }>
        Popular Categories
      </h1>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2"
        }>
        <div
          className={
            "relative grid lg:col-span-2 lg:row-span-2 content-center "
          }>
          <Image
            layout="fill"
            objectFit="cover"
            src={infection}
            alt="infection management"
          />
          <Button
            color={"primary"}
            className={"absolute justify-self-center self-center	"}>
            Infection Management
          </Button>
        </div>

        <div className={"relative grid"}>
          <Image objectFit="cover" src={mental} alt="infection management" />
          <Button
            color={"primary"}
            className={"absolute justify-self-center self-center	"}>
            Mental Health
          </Button>
        </div>

        <div className={"relative grid"}>
          <Image objectFit="cover" src={digestive} alt="infection management" />
          <Button
            color={"primary"}
            className={"absolute justify-self-center self-center	"}>
            Digestive Health
          </Button>
        </div>

        <div className={"grid relative"}>
          <Image objectFit="cover" src={daily} alt="infection management" />
          <Button
            color={"primary"}
            className={"absolute justify-self-center self-center	"}>
            Daily Self Care
          </Button>
        </div>
        <div className={"grid relative"}>
          <Image objectFit="cover" src={stress} alt="infection management" />
          <Button
            color={"primary"}
            className={"absolute justify-self-center self-center	"}>
            Stress Management
          </Button>
        </div>
      </div>
    </div>
  );
};
