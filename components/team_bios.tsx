import React from "react";
import RobinKohler from "../images/drrobinkohler.jpg";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";

export interface BioProps {
  name: string;
  education?: string;
  title?: string;
  bio?: string;
  profilePicture: StaticImageData;
  children: React.ReactNode;
  reverse?: boolean;
}

const Bio = (props: BioProps) => {
  return (
    <div
      className={"grid lg:grid-cols-2 gap-x-10 my-10 items-center "}>
      {/* Show the image on the left when reverse is false or the screen is smaller than lg*/}
      <div
        className={cn(" flex justify-center ", { "lg:hidden": props.reverse })}>
        <div className={"max-w-md xl:max-w-lg"}>
          <Image
            className={"rounded "}
            src={props.profilePicture || RobinKohler}
            objectFit={"contain"}
            placeholder={"blur"}
            alt={`Headshot of ${props.name}`}
          />
        </div>
      </div>

      <div className={" text-gray-500  "}>
        <h2
          className={cn("text-2xl 2xl:text-4xl text-primary pt-4 md:pt-0 xl:mb-2", {
            "lg:text-left": props.reverse,
          })}>
          {props.name}
        </h2>

        <p className={"pb-2 text-gray-400"}>{props.education}</p>
        <p className={"pb-3 font-semibold"}>{props.title}</p>
        <div className={""}>{props.children}</div>
      </div>

      {/* Show the image on the right when reverse is true and the screen size is lg */}
      <div
        className={cn("hidden ", { "lg:flex justify-center": props.reverse })}>
        <div className={"max-w-md xl:max-w-lg"}>
          <Image
            className={"rounded"}
            src={props.profilePicture || RobinKohler}
            objectFit={"contain"}
            placeholder={"blur"}
            alt={`Headshot of ${props.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
