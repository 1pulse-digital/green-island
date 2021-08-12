import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { fetchAPI } from "../lib/api";
import { Product } from "../types/product";
import ProductWidget from "./productWidget";


const useProducts = () => {
  const { data, error } = useSWR("/products?featured=true", fetchAPI);
  return {
    products: data,
    isLoading: !error && !data,
    error,
  };
};

export interface FeaturedProductsProps {
  products?: Product[];
}
export const FeaturedProducts = (props: FeaturedProductsProps) => {
  const { products } = props;

  if (!products) {
    return <div>No featured products at this time. Check back soon</div>;
  }

  return (
    <div className={"px-4 md:py-20 md:px-20 bg-gray-100 "}>
      <div className={"font-karla "}>
        <h1
          className={
            "pt-20 md:pt-0 md:text-5xl pb-20 font-medium text-4xl text-primary md:text-left"
          }>
          Featured products
        </h1>
      </div>
      <div className={"w-full"}>
        <div className="flex flex-wrap gap-4">
          {products.map((p: Product) => {
            return <ProductWidget key={p.id} product={p} />;
          })}
        </div>
      </div>
    </div>
  );
};
