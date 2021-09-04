import { ArticleCategory } from "../types/articleCategory";

export interface BlogNavProps {
  categories?: ArticleCategory[]
  onSelect: (name: string) => void
}

const BlogNav = (props: BlogNavProps) => {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-5 mb-10"}>
      <div className={""}>
        <a href=" " className="grid py-10 px-24 font-bold text-primary">
          All Posts
        </a>
      </div>
      {props.categories?.map((c) => {
        return (
          <div key={c.id} className={"hover:bg-secondary hover:text-white"}>
            <a href=" " className="grid py-10 px-24 font-bold text-primary">
              {c.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BlogNav;
