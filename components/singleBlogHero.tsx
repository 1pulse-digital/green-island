import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import human from "../images/human.jpg";
import { useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";
import { Article } from "../../types/article";
import Markdown from "markdown-to-jsx";

export const SingleBlogHero = () => {
  return (
    <div
      className={
        "grid sm:grid-col-1 lg:grid-cols-2 h-[350px] lg:h-[550px] bg-gray-50 lg:px-32 md:px-10 px-4 "
      }
    >
      {/* Left column - Text introduction goes here*/}

      <div className={"grid  sm:px-0 content-center"}>
        <h1 className={"lg:text-5xl  md:text-4xl text-2xl text-primary"}>
          Post Name
        </h1>
      </div>

      {/* Right column - Hero image goes here*/}

      <div className={"relative grid content-center"}>
        <div className={"lg:absolute top-0 bottom-0 right-0 left-28 w-full"}>
          <Image layout="fill" objectFit="cover" src={human} />
        </div>
      </div>
    </div>
  );
};
