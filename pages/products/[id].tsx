import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { fetchAPI } from "../../lib/api";
import { Product } from "../../types/product";
import MainLayout from "../../layouts/MainLayout";
import { FeaturedProducts } from "../../components/featuredProducts";
import { ProductAdditionalInfo } from "../../components/productAdditionalInfo";
import SingleProductWidget from "../../components/singleProductWidget";
import { Disclaimer } from "../../components/disclaimer";

interface SingleProductProps {
  product: Product;
  featuredProducts?: Product[];
}

const SingleProduct = (props: SingleProductProps) => {
  const { product, featuredProducts } = props;

  if (!product) {
    return (
      <MainLayout>
        <div className="flex-grow bg-gray-100 grid place-items-center">
          <span className={"animate-pulse text-xl"}>Loading</span>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="bg-gray-50 w-full">

        <SingleProductWidget product={product} />

        <ProductAdditionalInfo product={product} />

        <Disclaimer />

        <FeaturedProducts products={featuredProducts} />
      </div>
    </MainLayout>
  );
};

export default SingleProduct;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const [product, featuredProducts] = await Promise.all([
    fetchAPI(`/products/${context.params.id}`),
    fetchAPI("/products?featured=true"),
  ]);

  return {
    props: { product, featuredProducts },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    // paths: [{ params: { id: "1" } }],
    paths: [],
    fallback: true,
  };
}
