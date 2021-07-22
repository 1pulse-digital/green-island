import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

import blondeLady from "../images/blond-lady.jpg";
import fruit from "../images/fruits.jpg";

// Custom components
import { BlogWidget } from "../components/blogWidget";

import { fetchAPI } from "../lib/api";
import { Article } from "../types/article";
import Button from "../components/button";
import BlogNav from "../components/blog_navbar";

// Blog Hero Banner

const Banner = () => {
  return (
    <div className={"hidden sm:grid  grid-cols-2 h-[700px] bg-gray-50 "}>
      {/* Left column */}
      <div className={"grid ml-20 content-center w-full px-10"}>
        <h1 className={"text-5xl pb-4 font-bold"}>Our Blogs</h1>
        <p className={"text-md lg:pr-48 md:pr-32"}>
          The Perfect Health Practice is devoted to giving its patients not only
          the tools they need to heal, but also the ability to understand and
          manage their own health.
        </p>
      </div>

      {/* Right column */}
      <div className={"relative grid content-center"}>
        <div className={"absolute top-0 bottom-0 right-0 left-28"}>
          <Image layout="fill" objectFit="cover" src={fruit} />
        </div>
        <div className={"w-550px]"}>
          <Image src={blondeLady} />
        </div>
      </div>
    </div>
  );
};

const MobileBanner = () => {
  return (
    <div className={"sm:hidden grid h-[450px] bg-white"}>
      <div className={"relative grid content-center"}>
        <div className={"absolute top-0 bottom-0 right-0 left-40"}>
          <Image layout="fill" objectFit="cover" src={fruit} />
        </div>
        <div className={"w-[300px]"}>
          <Image src={blondeLady} />
        </div>
      </div>

      <div className={"grid ml-10 mr-10 content-center "}>
        <h1 className={"text-5xl pb-4"}>Our Blogs</h1>
        <p className={"text-md"}>
          The Perfect Health Practice is devoted to giving its patients not only
          the tools they need to heal, but also the ability to understand and
          manage their own health.
        </p>
      </div>
    </div>
  );
};

// Blog Archive page

export interface BlogsProps {
  articles: Article[];
}

const Blogs = (props: BlogsProps) => {
  return (
    <MainLayout>
    <div>
      <Banner />

      <MobileBanner />
      <div>
        {/* <h1>Latest recipes</h1> */}
        {/* Blog cards goes here */}
        {/* <div className="grid grid-cols-1 gap-x-4 lg:gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 justify-items-center "> */}
        <div>
     
        <BlogNav />

          <div className={"px-28 py-10 grid grid-cols-5"}>
          </div>
          <div className="flex justify-center flex-wrap gap-x-4 lg:gap-x-12 gap-y-12 ">
            {props.articles.map((item) => (
              <BlogWidget key={item.id} article={item} />
            ))}
          </div>
        </div>
        {/* <h1>Most popular</h1> */}
        <div>{/* Blog cards goes here */}</div>

        <div>{/* <div>Load more</div> */}</div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Blogs;

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles] = await Promise.all([fetchAPI("/articles")]);

  return {
    props: { articles },
    revalidate: 1,
  };
}
