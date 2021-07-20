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
        " p-2 w-full"
      }
    >
      <div className={" rounded-md p-2"}>
        <Image
          loader={strapiLoader}
          width={props.article.image.formats.thumbnail.width}
          height={props.article.image.formats.thumbnail.height}
          src={props.article.image.formats.thumbnail.url}
          alt={props.article.image.alternativeText}
        />
        <div className={" text-lg text-bol font-semibold  pt-4"}>Title: {props.article.title}</div>
        <div className={" text-sm py-4"}>{props.article.description}</div>

        <div
          className={
            "bg-transparent text-blue-dark font-semibold uppercase hover:text-white hover:border-blue rounded flex-auto w-1/2  justify-center "
          }
        >
          <button className={"text-blue-200"  }>Read More</button>
        </div>
      </div>
    </div>
  );
};
