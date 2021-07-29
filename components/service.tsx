import React from "react";

export interface ServiceProps {
  title: string;
  content: string;
}

const Service = (props: ServiceProps) => {
  return (
    <div
      className={
        "grid sm:grid-col-1 lg:grid-cols-2 md:mx-10 lg:mx-20 px-4 py-20 border-b-2"
      }
    >
      <div className={"lg:text-right md:text-left lg:pr-10"}>
        <h2 className={"grid col-span-2 text-2xl pb-10 md:pb-20 text-primary "}>
          {props.title}
        </h2>
      </div>
      <div>
        <p className={"text-gray-700"}>{props.content}</p>
      </div>
    </div>
  );
};

export default Service;
