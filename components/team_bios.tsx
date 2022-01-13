import React from "react";
import RobinKohler from "../images/drrobinkohler.jpg";
import Image from "next/image";
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
    <div className={"grid lg:grid-cols-2 gap-x-10 xl:gap-x-4"}>
      <h2 className={cn("text-2xl 2xl:text-4xl text-primary lg:col-span-2 xl:text-center xl:mb-8", { "lg:text-right": props.reverse })}>{props.name}</h2>

      {/* Show the image on the left when reverse is false or the screen is smaller than lg*/}
      <div className={cn("my-4 flex justify-center ", { "lg:hidden": props.reverse })}>
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

      <div className={"my-4 text-gray-500 "}>
        <p className={"pb-2 text-gray-400"}>{props.education}</p>
        <p className={"pb-3 font-semibold"}>{props.title}</p>
        <p className={""}>{props.children}</p>
      </div>

      {/* Show the image on the right when reverse is true and the screen size is lg */}
      <div className={cn("my-4 hidden", { "lg:flex justify-center": props.reverse })}>
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
