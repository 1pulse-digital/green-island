import React from "react";
import Image from "next/image";

import { Article } from "../types/article";
import { useRouter } from "next/router";

import { Button } from "./button";

export interface BlogWidgetProps {
  article: Article;
}

export const BlogWidget = (props: BlogWidgetProps) => {
  const router = useRouter();

  const viewBlog = () => {
    router.push(`/blogs/${props.article.slug}`);
  };
  return (

    <div
      className={
        "relative overflow-hidden w-full max-w-sm sm:h-[490px] md:h-[570px] bg-white shadow-sm rounded-lg "
      }>
      <div className={"h-full "} onClick={viewBlog}>
        <div className={"relative w-full h-72 bg-white mx-auto rounded hover:shadow-xl"}>
          <Image
            layout="fill"
            objectFit="cover"
            src={
              props.article.image?.formats.small?.url ||
              props.article.image?.formats.medium?.url ||
              props.article.image?.formats.thumbnail?.url ||
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            alt={props.article.image?.alternativeText || props.article.title}
          />
        </div>
        <div className={" p-6"}>
          <div
            className={
              "text-primary text-lg text-bol font-semibold line-clamp-2"
            }>
            {props.article.title}
          </div>
          <div className={"text-sm line-clamp-3"}>
            {props.article.description}
          </div>
          <div
            className={
              " inline-block bg-transparent text-blue-dark font-semibold uppercase hover:text-white hover:border-blue rounded "
            }>
            <div className={"sm:absolute bottom-6 left-6 "}>
              <Button color="primary">Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
