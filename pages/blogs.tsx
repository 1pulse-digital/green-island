import MainLayout from "../layouts/MainLayout";
import Image from "next/image";


import blondeLady from "../images/blond-lady.jpg";
import fruit from "../images/fruits.jpg";

// Custom components
import { BlogWidget } from "../components/blogWidget";

import { fetchAPI } from "../lib/api";
import { Article } from "../types/article";
import BlogNav from "../components/blog_navbar";
import { ArticleCategory } from "../types/articleCategory";
import { useState } from "react";

// Blog Hero Banner

const Banner = () => {
  return (
    <div className={"hidden sm:grid  grid-cols-2 h-[700px] bg-gray-50 font-karla text-primary"}>
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
          <Image
            layout="fill"
            objectFit="cover"
            src={fruit}
            placeholder={"blur"}
            alt={"Lot's of healthy fruit on wooden table"}
          />
        </div>
        <div className={"w-550px]"}>
          <Image
            src={blondeLady}
            placeholder={"blur"}
            alt={"Healthy young female breathing fresh air"}
          />
        </div>
      </div>
    </div>
  );
};

const MobileBanner = () => {
  return (
    <div className={"sm:hidden grid h-[450px] bg-white font-karla text-primary"}>
      <div className={"relative grid content-center"}>
        <div className={"absolute top-0 bottom-0 right-0 left-40"}>
          <Image
            layout="fill"
            objectFit="cover"
            src={fruit}
            placeholder={"blur"}
            alt={"Lot's of healthy fruit on wooden table"}
          />
        </div>
        <div className={"w-[300px]"}>
          <Image
            src={blondeLady}
            placeholder={"blur"}
            alt={"Healthy young female breathing fresh air"}
          />
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
  articleCategories: ArticleCategory[];
}

const Blogs = (props: BlogsProps) => {
  const [articles, setArticles] = useState(props.articles);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const selectCategory = (name: string) => {
    // setSelectedCategory(name);
    console.log(`selectCategory: ${name}`);
  };

  return (
    <MainLayout>
      <div>
        <Banner />
        <MobileBanner />

        <div>

          <div className={"font-karla"}>
            <BlogNav
              categories={props.articleCategories}
              onSelect={selectCategory}
            />
            <div className="flex flex-wrap gap-x-4 gap-y-12 justify-center pb-10 lg:gap-x-12">
              {articles.map((item) => (
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
  const [articles, articleCategories] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/article-categories"),
  ]);

  return {
    props: {
      articles,
      articleCategories,
    },
    revalidate: 1,
  };
}
