import React from "react";
import Image from "next/image";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";
import { Article } from "../types/article";

export interface BlogsProps {
  articles?: Article[];
}

export const Blogs = (props: BlogsProps) => {
  return (
    <div
      className={" pt-8 pb-32 bg-white-100 justify-center items-center pl-48 "}
    >
      <div className={" flex p-10 "}>
        <Image src={blog1} alt="facebook" />
        <Image src={blog2} alt="twitter" />
        <Image src={blog3} alt="twitter" />
        <Image src={blog4} alt="twitter" />
      </div>
      {props.articles?.map((entry) => (
        <div key={entry.id}>{entry.title}</div>
      ))}
    </div>
  );
};
