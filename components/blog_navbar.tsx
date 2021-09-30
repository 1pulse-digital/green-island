import { ArticleCategory } from "../types/articleCategory";
import cn from "classnames";
import { productTypes } from "../types/productTypes";
export interface BlogNavProps {
  categories?: ArticleCategory[];
  onSelect: (name: string) => void;
  selectedCategory: string;
}

const BlogNav = (props: BlogNavProps) => {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-5 mb-10"}>
      <div
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          props.onSelect("All Posts");
        }}
        className={" "}>
        <a
          href=" "
          className="grid py-10 px-24 font-bold text-primary hover:bg-secondary">
          All Posts
        </a>
      </div>
      {props.categories?.map((c) => {
        return (
          <div
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              props.onSelect(c.name);
            }}
            key={c.id}
            className={cn("hover:bg-secondary hover:text-white", {
              "bg-secondary": props.selectedCategory === c.name,
            })}>
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
