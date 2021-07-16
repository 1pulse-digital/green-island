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
      className={" pt-8 pb-32 bg-white-100 justify-center items-center pl-48 "}
    >
      <div className={" flex p-10 "}>
        <Image
          loader={strapiLoader}
          width={props.article.image.formats.thumbnail.width}
          height={props.article.image.formats.thumbnail.height}
          src={props.article.image.formats.thumbnail.url}
          alt={props.article.image.alternativeText}
        />
        <div>Title: {props.article.title}</div>
      </div>
    </div>
  );
};
