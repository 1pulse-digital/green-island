import React from "react";
import Image from "next/image";
import contacts from "../images/contacts.jpg";
import contact from "../images/contact.jpg";

export const Contact = () => {
  return (
    <div className={"sm:grid-cols-1 grid  h-[700px]  w-full bg-gray-50 z-0  "}>
      <div className={"relative px-[100px] grid content-center"}>
        <div className={" top-0 bottom-0 right-0 left-0 "}>
          <Image
            layout="fill"
            objectFit="cover"
            src={contacts}
            alt="this is an image"
          />
          <div className={"grid ml-0 content-center  px-4 "}>
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
