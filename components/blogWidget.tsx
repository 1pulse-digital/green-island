import React from "react";
import Image from "next/image";

import { Article } from "../types/article";
import { getStrapiURL } from "../lib/api";
import Button from "./button";
import { useRouter } from "next/router";

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

// Blog widget -

export const BlogWidget = (props: BlogWidgetProps) => {
  const router = useRouter();

  const viewBlog = () => {
    router.push(`/blogs/${props.article.slug}`);
  };
  return (
    <div
      className={
        "relative overflow-hidden w-full max-w-sm sm:h-[490px] md:h-[570px] bg-white shadow-sm rounded-lg"
      }
    >
      <div className={"h-full "} onClick={viewBlog}>
        <div className={"relative w-full h-72 bg-white mx-auto "}>
          <Image
            layout="fill"
            objectFit="cover"
            loader={strapiLoader}
            // width={props.article.image.formats.thumbnail.width}
            // height={props.article.image.formats.thumbnail.height}
            src={props.article.image.formats.thumbnail.url}
            alt={props.article.image.alternativeText}
          />
        </div>
        <div className={" p-6"}>
          <div
            className={
              "text-primary text-lg text-bol font-semibold line-clamp-2"
            }
          >
            {props.article.title}
          </div>
          <div className={"text-sm line-clamp-3"}>
            {props.article.description}
          </div>
          <div
            className={
              " inline-block bg-transparent text-blue-dark font-semibold uppercase hover:text-white hover:border-blue rounded "
            }
          >
            {/*  {
              <div className={"grid grid-auto gap-2 py-4"}>
                {props.article.tags.map((item) => (
                  <span
                    className={
                      " rounded-full text-gray-700 bg-gray-200 px-2 py-1 text-sm"
                    }
                  >
                    #{item.name}
                  </span>
                ))}
              </div>
            } */}
            <div className={"sm:absolute bottom-6 left-6 "}>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
