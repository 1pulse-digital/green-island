import React from "react";
import { Product } from "../types/product";
import ProductWidget from "./productWidget";

export interface FeaturedProductsProps {
  products?: Product[];
  loading: boolean;
}

export const FeaturedProducts = (props: FeaturedProductsProps) => {
  const { products, loading } = props;

  if (!loading && !products) {
    return <div className={"text-gray-600"}>No featured products at this time. Check back soon</div>;
  }

  return (
    <div className={" px-2 md:py-20 md:px-20 bg-gray-50 "}>
      <div className={"font-karla "}>
        <h1
          className={
            "flex flex-col items-center pt-20 md:pt-0 md:text-5xl pb-20 font-medium text-4xl text-primary md:text-left"
          }>
          Featured products
        </h1>
      </div>
      <div className={"flex justify-center"}>
        {!loading && (
          <div className="flex flex-wrap gap-4">
            {products?.map((p: Product) => {
              return <ProductWidget key={p.id} product={p} />;
            })}
          </div>
        )}
        {loading && (
          <div className={"text-gray-600 animate-pulse"}>Fetching featured products</div>
        )}
      </div>
    </div>
  );
};
