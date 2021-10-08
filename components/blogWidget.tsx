import React from "react";
import Image from "next/image";

import { Article } from "../types/article";
import { useRouter } from "next/router";
import Link from "next/link";

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
        "relative overflow-hidden w-full max-w-sm sm:h-[490px] md:h-[500px] bg-white rounded-lg hover:shadow-2xl cursor-pointer "
      }>
      <div className={"h-full "} onClick={viewBlog}>
        <div className={"relative w-full h-64 bg-white "}>
          <Image
            layout="fill"
            objectFit="cover"
            src={props.article.image.formats.thumbnail.url}
            alt={props.article.image.alternativeText}
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
            <div className={"sm:absolute bottom-1 "}>
              {/* TODO: Add a blog archive page*/}
              <Link href="/blogs">
                <a>
                  <button
                    className={"flex text-secondary hover:text-primary py-2"}>
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={"h-6 w-6 self-center pl-2"}
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
