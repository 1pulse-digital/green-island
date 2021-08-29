import React from "react";
import { useProductCategories } from "../lib/api";
import { ProductCategory } from "../types/productCategory";
import { ProductForm, productForms } from "../types/productForms";
import { ProductType, productTypes } from "../types/productTypes";

interface SingleItemProps {
  title: string;
  checked: boolean;
  onChange: () => void;
}

const SingleItem = (props: SingleItemProps) => {
  return (
    <label className="flex items-center space-x-3 mb-3 hover:cursor-pointer">
      <input
        type="checkbox"
        name={`${props.title.split(" ").join("-")}`}
        className="bg-white bg-check h-6 w-6 border border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none hover:cursor-pointer"
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
  selectedProductTypes: ProductType[];
  onSelectType: (productType: ProductType) => void;

  selectedProductForms: ProductForm[];
  onSelectForm: (productForm: ProductForm) => void;

  selectedCategories: number[];
  onSelectCategory: (id: number) => void;
}

export const ShopSidebar = (props: ShopSidebarProps) => {
  const { productCategories, isLoading, error } = useProductCategories();

  const isCategoryChecked = (id: number): boolean => {
    return props.selectedCategories.findIndex((i) => i === id) >= 0;
  };

  const isProductTypeChecked = (value: string): boolean => {
    return props.selectedProductTypes.findIndex((i) => i.value === value) >= 0;
  };

  const isProductFromChecked = (value: string): boolean => {
    return props.selectedProductForms.findIndex((i) => i.value === value) >= 0;
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
                    checked={isCategoryChecked(item.id)}
                    onChange={() => props.onSelectCategory(item.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Shop by Product Type */}
          <div>
            <p className="text-primary font-bold w-full my-10 text-2xl font-karla">
              Shop by product type
            </p>
            <div>
              {productTypes.map(item => (
                <SingleItem
                  key={item.value}
                  title={item.label}
                  checked={isProductTypeChecked(item.value)}
                  onChange={() => props.onSelectType(item)}
                />
              ))}
            </div>
          </div>

          {/* Forms */}

          <div>
            <p className="text-primary font-bold w-full my-10 text-2xl font-karla">
              Forms
            </p>
            <div>
              {productForms.map(item => (
                <SingleItem
                  key={item.value}
                  title={item.label}
                  checked={isProductFromChecked(item.value)}
                  onChange={() => props.onSelectForm(item)}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
