import { ArticleCategory } from "../types/articleCategory";
import cn from "classnames";

export interface BlogNavProps {
  categories?: ArticleCategory[];
  onSelect: (name: string) => void;
  selectedCategory: string;
}

const CategoryOption = ({ name, onSelect, selectedCategory }: { name: string } & BlogNavProps) => {
  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onSelect(name);
      }}
      className={cn(
        "w-full sm:w-auto text-primary rounded ring-secondary ring-1",
        { "hover:border-secondary ring-primary hover:bg-secondary/20": selectedCategory !== name },
        { "bg-secondary text-white": selectedCategory === name },
      )}>
      <button className="w-full sm:w-44 h-16 lg:w-60 lg:h-20 font-bold">
        {name}
      </button>
    </div>
  );
};

const BlogNav = (props: BlogNavProps) => {
  return (
    <div className={"flex flex-wrap gap-2 px-2 sm:gap-4 sm:px-4 justify-center"}>
      <CategoryOption
        selectedCategory={props.selectedCategory}
        onSelect={props.onSelect}
        name={"All Posts"}
      />

      {props.categories?.map((c) => {
        return (
          <CategoryOption
            key={c.id}
            selectedCategory={props.selectedCategory}
            onSelect={props.onSelect}
            name={c.name}
          />
        );
      })}
    </div>
  );
};

export default BlogNav;
