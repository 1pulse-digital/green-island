import React from "react";

export interface BioProps {
  name: string;
  education?: string;
  title?: string;
  bio?: string;
}

const Bio = (props: BioProps) => {
  return (
    <div
      className={
        "md:mx-10 lg:mx-20 lg:py-20 px-4 pt-10 py-10"
      }
    >
      <h1 className={"text-2xl text-primary"}>{props.name}</h1>
      <h2 className={"pb-2 text-gray-400"}>{props.education}</h2>
      <h2 className={"text-gray-500 pb-3"}>{props.title}</h2>
      <p className={"text-gray-500"}>
          {props.bio}
      </p>
    </div>
  );
};

export default Bio;
