import { useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";
import { Article } from "../../types/article";
import Markdown from "markdown-to-jsx";
import MainLayout from "../../layouts/MainLayout";
import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext } from "next";

export interface SingleBlogPostProps {
  article: Article;
}

type strapiLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const strapiLoader = (params: strapiLoaderParams) => {
  return params.src;
};

const SingleBlogPost = (props: SingleBlogPostProps) => {
  const router = useRouter();

  if (!props.article) {
    return <div>Still loading</div>;
  }
  return (
    <MainLayout>
      <div className={""}>
        <div
          className={
            "grid sm:grid-col-1 lg:grid-cols-2 h-screen px-10 sm:px-10 lg:h-[550px] bg-gray-50 lg:px-2  "
          }>
          {/* Left column - Text introduction goes here*/}

          <div className={"grid  sm:px-0 md:px-24 content-center  max-h-full"}>
            <h1 className={"lg:text-5xl  md:text-4xl text-2xl text-primary"}>
              <h1 className="text-4xl font-bold">{props.article.title}</h1>
              <h1 className="text-4xl font-bold">{props.article.category.name}</h1>
              <h1 className="pt-10 pb-5 text-lg">
                {props.article.description}
              </h1>
            </h1>
          </div>

          {/* Right column - Hero image goes here*/}

          <div className={"relative grid content-center max-h-full"}>
            <div className={"lg:absolute top-0 bottom-0 right-0  w-full"}>
              {/* <Image
                layout="fill"
                objectFit="cover"
                loader={strapiLoader}
                src={props.article.image.formats.small.url}
                alt={props.article.image.alternativeText}
              /> */}
            </div>
          </div>
        </div>
        <div className={""}>
          <div className="prose-sm">
            <article className="px-10 py-10 sm:py-10 md:py-20">
              <Markdown>{props.article.content}</Markdown>
            </article>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleBlogPost;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const [article] = await Promise.all([
    fetchAPI(`/articles/${context.params.slug}`),
  ]);

  return {
    props: { article },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "flip-the-script-on-treats" } }, // See the "paths" section below
    ],
    fallback: true, //true or false // See the "fallback" section below
  };
}
