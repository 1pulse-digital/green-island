import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

import blog from "../images/8-easy-strategies.png";

// Custom components
import { BlogWidget } from "../components/blogWidget";

import { fetchAPI } from "../lib/api";
import { Article } from "../types/article";

export interface BlogsProps {
  articles: Article[];
}

const Blogs = (props: BlogsProps) => {
  return (
    <MainLayout>
      <div className={"p-10"}>
        <div>
          <h1>Latest recipes</h1>
          {/* Blog cards goes here */}
          <div className="flex-wrap mt-8">
          {props.articles.map((item) => (
            <BlogWidget key={item.id} article={item} />
          ))}
          </div>
          

          <h1>Most popular</h1>
          <div>{/* Blog cards goes here */}</div>

          <div>
            <div>Load more</div>
          </div>
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
