import React from "react";
import Image from "next/image";
import contacts from "../images/contacts.jpg";

export const Contact = () => {
  return (
    <div className={"grid h-[250px] sm:h-[700px] w-full bg-gray-50"}>
      <div className={"relative sm:px-[100px] grid content-center"}>
        <div className={" top-0 bottom-0 right-0 left-0 "}>
          <Image
            layout="fill"
            objectFit="cover"
            src={contacts}
            alt="Organic medicine tablets placed on a table in the shape of a heart"
            placeholder={"blur"}
          />
          <div className={"grid content-center px-10 "}>
            <h1
              className={
                "text-5xl pb-4 font-bold z-10 md:w-3/4 font-karla text-primary  "
              }>
              Get in touch
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
