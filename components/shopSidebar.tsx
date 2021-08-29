import React from "react";
import { useProductCategories } from "../lib/api";
import { ProductCategory } from "../types/productCategory";

interface SingleItemProps {
  title: string;
  checked: boolean;
  onChange: () => void;
}

const SingleItem = (props: SingleItemProps) => {
  return (
    <label className="flex items-center space-x-3 mb-3 ">
      <input
        type="checkbox"
        name={`${props.title.split(" ").join("-")}`}
        className="bg-white bg-check h-6 w-6 border border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none"
        checked={props.checked}
        onChange={props.onChange}
        value=""
      />
      <span className="truncate text-gray-700 dark:text-white font-normal">
        {props.title}
      </span>
    </label>
  );
};

export interface ShopSidebarProps {
  selectedCategories: number[];
  onSelectCategory: (id: number) => void;
}

export const ShopSidebar = (props: ShopSidebarProps) => {
  const { productCategories, isLoading, error } = useProductCategories();

  const isChecked = (id: number): boolean => {
    return props.selectedCategories.findIndex((i) => i === id) > 0;
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className={"bg-gray-100 h-full py-5 px-10 md:px-10 lg:px-20 "}>
      <div className="flex flex-col sm:justify-center">
        <nav>
          {/* Search box */}
          <div className="my-8 ">
            <input
              type="search"
              className="bg-white p-3 w-full"
              placeholder="Search products..." />
          </div>

          {/* Shop by Category */}
          <div>
            <p className="text-primary font-bold  w-full pb-2   mb-4 text-2xl font-karla">
              Shop by Category
            </p>

            {isLoading && <div className={"animate-pulse"}>Loading</div>}

            {!isLoading && (
              <div className={"font-karla"}>
                {productCategories.map((item: ProductCategory) => (
                  <SingleItem
                    key={item.id}
                    title={item.name}
                    checked={isChecked(item.id)}
                    onChange={() => props.onSelectCategory(item.id)}
                  />
                ))}

                {/* <SingleItem title="Gut Health" />
              <SingleItem title="Skin Health" />
              <SingleItem title="Mental Health" />
              <SingleItem title="Weight and Metabolism" />
              <SingleItem title="Detoxification" />
              <SingleItem title="Daily Care" />
              <SingleItem title="Immune Support" />
              <SingleItem title="Stress Management" />
              <SingleItem title="Thyroid Support" />
              <SingleItem title="Infection Management" />
              <SingleItem title="Pain Management" /> */}
              </div>
            )}
          </div>

          {/* Shop by Product Type */}
          <div>
            <p className="text-primary font-bold w-full my-10 text-2xl font-karla">
              Shop by product type
            </p>
            <div>
              {/*<SingleItem title="Multivitamins" />*/}
              {/*<SingleItem title=" Individual Nutrients" />*/}
              {/*<SingleItem title="Digestive Aids" />*/}
              {/*<SingleItem title=" Probiotics" />*/}
              {/*<SingleItem title=" Prbiotics" />*/}
              {/*<SingleItem title="Essential Fatty Acids" />*/}
              {/*<SingleItem title="Immune Enhancers" />*/}
              {/*<SingleItem title="Kid's health" />*/}
            </div>
          </div>

          {/* Forms */}

          <div>
            <p className="text-primary font-bold w-full my-10 text-2xl font-karla">
              Forms
            </p>
            {/* test1 */}
            <div>
              {/*<SingleItem title=" Capsule" />*/}
              {/*<SingleItem title=" Softgel" />*/}
              {/*<SingleItem title=" Tablet" />*/}
              {/*<SingleItem title="  Powder" />*/}
              {/*<SingleItem title="Shake" />*/}
              {/*<SingleItem title=" Liquid" />*/}
              {/*<SingleItem title="Granules" />*/}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
