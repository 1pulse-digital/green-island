import React from "react";
import Image from "next/image";

import { Article } from "../types/article";
import { getStrapiURL } from "../lib/api";

export interface BlogWidgetProps {
  article: Article;
}

type strapiLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const strapiLoader = (params: strapiLoaderParams) => {
  const urlBase = getStrapiURL();
  return `${urlBase}${params.src}`;
};

export const BlogWidget = (props: BlogWidgetProps) => {
  return (
    <div
      className={
        " bg-white flex flex-wrap  flex-row  pt-20 pb-20 pl-32 pr-32   w-full"
      }
    >
      <div className={"bg-blue-50 rounded-md p-2  "}>
        <Image
          loader={strapiLoader}
          width={props.article.image.formats.thumbnail.width}
          height={props.article.image.formats.thumbnail.height}
          src={props.article.image.formats.thumbnail.url}
          alt={props.article.image.alternativeText}
        />
        <div className={" text-4xl text-bol"}>Title: {props.article.title}</div>
        <div className={"  text-bol"}>{props.article.content}</div>

        <div
          className={
            "bg-transparent hover:bg-blue text-blue-dark font-semibold uppercase hover:text-white py-2 px-8 border border-black hover:border-blue rounded    flex-auto w-1/2  justify-center "
          }
        >
          <button>Read M</button>
        </div>
      </div>
    </div>
  );
};
