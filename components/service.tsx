import React from "react";

export interface ServiceProps {
  title: string;
  children: React.ReactNode;
}

const Service = (props: ServiceProps) => {
  return (
    <div className={"grid lg:grid-cols-2"}>
      <div className={"lg:text-right lg:pr-10"}>
        <h2 className={"text-2xl mt-8 mb-4 text-primary "}>
          {props.title}
        </h2>
      </div>
      <div>
        <p className={"text-gray-700"}>{props.children}</p>
      </div>
    </div>
  );
};

export default Service;
