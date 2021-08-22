import { ArticleCategory } from "../types/articleCategory";

export interface BlogNavProps {
  categories?: ArticleCategory[]
  onSelect: (name: string) => void
}

const BlogNav = (props: BlogNavProps) => {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-5 mb-10"}>
      <div className={""}>
        <a href=" " className=" text-primary font-bold px-24 py-10 grid ">
          All Posts
        </a>
      </div>
      {props.categories?.map((c) => {
        return (
          <div key={c.id} className={"hover:bg-secondary hover:text-white"}>
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
