import React from "react";

export interface ServiceProps {
  title: string;
  children: React.ReactNode;
}

const Service = (props: ServiceProps) => {
  return (
    <div className={"grid lg:grid-cols-2 pb-4 lg:pb-8 border-primary border-b-2"}>
      <div className={"lg:text-right lg:pr-10"}>
        <h2 className={"text-2xl text-primary "}>
          {props.title}
        </h2>
      </div>
      <div>
        <p className={"mt-4 lg:mt-0 text-gray-700"}>{props.children}</p>
      </div>
    </div>
  );
};

export default Service;
