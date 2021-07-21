import { useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";
import { Article } from "../../types/article";
import Markdown from "markdown-to-jsx";
import MainLayout from "../../layouts/MainLayout";

export interface SingleBlogPostProps {
  article: Article;
}

const SingleBlogPost = (props: SingleBlogPostProps) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <MainLayout>
    <div>
      <h1 className="text-4xl">{props.article.title}</h1>
      <div className="prose mx-auto">
        <article className="line-clamp-3 md:line-clamp-none">
          <Markdown>{props.article.content}</Markdown>
        </article>
      </div>
    </div>
    </MainLayout>
  );
};

export default SingleBlogPost;


export async function getStaticProps() {
  // Run API calls in parallel
  const [article] = await Promise.all([
    fetchAPI("/articles/this-shrimp-is-awesome"),
  ]);

  return {
    props: { article },
    revalidate: 1,
  };
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "this-shrimp-is-awesome" } }, // See the "paths" section below
    ],
    fallback: false, //true or false // See the "fallback" section below
  };
}
