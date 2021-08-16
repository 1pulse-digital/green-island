import React, { useState } from "react";
import Image from "next/image";
import infection from "../images/infection_management.jpg";
import digestive from "../images/digestive_health.jpg";
import daily from "../images/daily-self-care.jpg";
import mental from "../images/mental_health.jpg";
import stress from "../images/stress-management.jpg";
import cn from "classnames";

import { Button } from "../components/button";

interface CategoryWidgetProps {
  title: string;
  imgSrc: StaticImageData;
  altText: string;
  extraClassName?: string;
}

const CategoryWidget = (props: CategoryWidgetProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const customMouseEnter = () => {
    setIsHovering(true);
  };

  const customMouseLeave = () => {
    setIsHovering(false);
  };

  const imageClassName = cn("duration-500", "", {
    "opacity-80 ": isHovering,
    "scale-110": isHovering,
  });

  return (
    <div
      className={cn(
        "bg-primary",
        "relative grid w-full h-full cursor-pointer",
        props.extraClassName
      )}
      onMouseEnter={customMouseEnter}
      onMouseLeave={customMouseLeave}>
      <Image
        className={imageClassName}
        objectFit="cover"
        src={props.imgSrc}
        alt={props.altText}
      />
      <Button
        color={"primary"}
        className={"absolute justify-self-center self-center bg-secondary"}>
        {props.title}
      </Button>
    </div>
  );
};

export const Categories = () => {
  return (
    <div className={"mt-20 lg:mb-20 lg:mx-20"}>
      <h1
        className={
          "md:text-5xl pb-20 font-medium text-4xl text-primary md:text-left "
        }>
        Popular Categories
      </h1>

      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 w-full h-full"
        }>
        <CategoryWidget
          altText={"young lady taking care of older lady"}
          imgSrc={infection}
          title={"Infection Management"}
          extraClassName={"lg:col-span-2 lg:row-span-2"}
        />

        <CategoryWidget
          altText={"peacefull zen man"}
          imgSrc={mental}
          title={"Mental Health"}
        />

        <CategoryWidget
          altText={"women covering her stomach"}
          imgSrc={digestive}
          title={"Digestive Health"}
        />

        <CategoryWidget
          altText={"lady drinking green tea"}
          imgSrc={daily}
          title={"Daily Self Care"}
        />

        <CategoryWidget
          altText={"lady sitting on the coach smiling"}
          imgSrc={stress}
          title={"Stress Management"}
        />
      </div>
    </div>
  );
};
