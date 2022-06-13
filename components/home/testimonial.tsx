import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require("react-responsive-carousel").Carousel;

export const TestimonialCarousel = () => {
  return (
    <div className="w-8/12 ml-2 md:w-10/12 lg:w-full lg:px-20 ">
      <h1
        className={
          "md:text-5xl text-4xl z-10 text-white font-medium font-karla pb-12  "
        }>
        What our clients have to say
      </h1>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={10000}
        transitionTime={2000}
        showThumbs={false}>
        <div className={"lg:mb-32 md:mb-20 sm:mb-52"}>
          <p
            className={
              "italic lg:text-2xl md:text-2xl sm:text-1xl text-white font-light"
            }>
            “Dr Robin is passionate about healing people, finding the cause of
            the problem and then addressing it. He explains everything so well
            really feel that at last there is hope.”
          </p>
        </div>

        <div>
          <p
            className={
              "italic lg:text-2xl md:text-2xl sm:text-1xl  text-white font-light"
            }>
            “Dr Robin Is the most incredible doctor I have ever worked with! I
            cannot recommend anyone more highly! Even my little girl of 1 and a
            half was so impressed with him and sat and did everything he needed
            her to do! I never leave there not feeling positive and helped!”
          </p>
        </div>

        <div>
          <p
            className={
              "italic lg:text-2xl md:text-2xl sm:text-1xl  text-white font-light"
            }>
            “Personally I appreciate such a thorough consultation that is not
            rushed! Dr Kohler looks for the root cause (even root of the root
            issue ) and treats it naturally. Always such a positive experience.”
          </p>
        </div>

        <div className={
          "italic lg:text-2xl md:text-2xl sm:text-1xl text-white font-light"
        }>
          <p>
            “My experience with Dr. Robin Kohler can best be described as
            "transformative".
          </p>
          <p>
            I feel like FINALLY someone has the intelligence and capability to
            treat the whole person. I highly recommend his practice.”
          </p>
        </div>
      </Carousel>
    </div>
  );
};
