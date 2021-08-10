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
    return <div>No featured products at this time. Check back soon</div>
  }

  return (
    <div
      className={" pt-8 pb-32 bg-gray-100 justify-center items-center pl-48 "}>
      <div className={" flex p-10 "}>
        <div className="flex flex-wrap gap-4">
          {products.map((p: Product) => {
            return <ProductWidget key={p.id} product={p} />;
          })}
        </div>
      </div>
    </div>
  );
};
