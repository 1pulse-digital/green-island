import { Article } from "../types/article";
import Markdown from "markdown-to-jsx";
import MainLayout from "../layouts/MainLayout";

export interface SingleBlogPostProps {
  article: Article;
}

const SingleBlogPost = (props: SingleBlogPostProps) => {
  if (!props.article) {
    return <div>Loading</div>;
  }

  return (
    <MainLayout>
      <div>
        <h1 className="text-4xl">{props.article.title}</h1>
        <div className="mx-auto prose">
          <article className="line-clamp-3 md:line-clamp-none">
            <Markdown>{props.article.content}</Markdown>
          </article>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleBlogPost;
