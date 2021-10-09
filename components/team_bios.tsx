import React from "react";
import RobinKohler from "../images/drrobinkohler.jpg";
import Image from "next/image";

export interface BioProps {
  name: string;
  education?: string;
  title?: string;
  bio?: string;
  profilePicture: StaticImageData;
  children: React.ReactNode;
}

const Bio = (props: BioProps) => {
  return (
    <div className={"grid lg:grid-cols-2 gap-x-16"}>

      <h1 className={"text-2xl text-primary lg:col-span-2"}>{props.name}</h1>
      <div className={"my-4 flex justify-center "}>
        <div className={"max-w-md"}>
          <Image
            className={"rounded"}
            src={RobinKohler}
            objectFit={"contain"}
            placeholder={"blur"}
            alt={`Headshot of ${props.name}`}
          />
        </div>
      </div>

      <div className={"my-4"}>
        <h2 className={"pb-2 text-gray-400"}>{props.education}</h2>
        <h2 className={"text-gray-500 pb-3"}>{props.title}</h2>
        <p className={"text-gray-500"}>
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Bio;
