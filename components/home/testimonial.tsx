import { Disclosure } from "@headlessui/react";
import { divide } from "lodash";
import React from "react";
// import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../button";

var Carousel = require("react-responsive-carousel").Carousel;

export const TestimonialCarousel = () => {
  const customPrevArrow = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button title={label} onClick={onClickHandler}>
      prev
    </button>
  );

  const customNextArrow = (
    onClickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button className=" ml-10 " title={label} onClick={onClickHandler}>
      next
    </button>
  );

  return (
    <div className="  grid grid-cols-1 py-10 sm:h-  md:grid-cols-1 md:px-32 lg:grid-cols-1 xl:grid-cols-1  ">
      <h1
        className={
          "     text-5xl md:text-5xl z-10 text-white font-medium font-karla pb-12 "
        }>
        What our clients have to say
      </h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        // renderArrowNext={customNextArrow}
        // renderArrowPrev={customPrevArrow}
      >
        <div className={"grid mb-20 "}>
          <p className={"italic text-2xl text-white font-light  "}>
            “Dr Robin is passionate about healing people, finding the cause of
            the problem and then addressing it.<br></br> He explains everything
            so well really feel that at last there is hope.”
          </p>
        </div>

        <div className={"grid"}>
          <p className={"italic text-2xl text-white font-light "}>
            “Dr Robin Is the most incredible doctor I have ever worked with! I
            cannot recommend anyone more highly!<br></br> Even my little girl of
            1 and a half was so impressed with him and sat and did everything he
            needed her to do!<br></br> I never leave there not feeling positive
            and helped!”
          </p>
        </div>

        <div className={"grid"}>
          <p className={"italic text-2xl text-white font-light "}>
            “Personally I appreciate such a thorough consultation that is not
            rushed! Dr Kohler looks for the root cause<br></br> (even root of
            the root issue ) and treats it naturally. Always such a positive
            experience.”
          </p>
        </div>

        <div className={"grid"}>
          <p className={"italic text-2xl text-white font-light "}>
            “My experience with Dr. Robin Kohler can best be described as
            "transformative". <br></br>I feel like FINALLY someone has the
            intelligence and capability to treat the whole person. I highly
            recommend his practice.”
          </p>
        </div>
      </Carousel>
    </div>
  );
};
