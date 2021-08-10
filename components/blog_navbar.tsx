import { ArticleCategory } from "../types/articleCategory";

export interface BlogNavProps {
  categories?: ArticleCategory[]
  onSelect: (name: string) => void
}

const BlogNav = (props: BlogNavProps) => {
  return (
    <div className={"md:grid grid-cols-5 sm:grid grid-cols-1 "}>
      <div>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid">
          All Posts
        </a>
      </div>
      {props.categories?.map((c) => {
        return (
          <div key={c.id} className={"hover:bg-red-200"}>
            <a href=" " className=" text-primary font-bold px-24 py-10 grid">
              {c.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BlogNav;
