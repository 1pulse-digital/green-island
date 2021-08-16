import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { fetchAPI } from "../../lib/api";
import { Product } from "../../types/product";
import MainLayout from "../../layouts/MainLayout";
import ProductWidget1 from "../../components/productWidget1";

import { FeaturedProducts } from "../../components/featuredProducts";

interface SingleProductProps {
  product: Product;
  featuredProducts?: Product[];
}

const SingleProduct = (props: SingleProductProps) => {
  const { product, featuredProducts } = props;

  if (!product) {
    return <div>Still loading</div>;
  }
  return (
    <MainLayout>
      <div className=" ">
        {/* array slice */}
        {/* array slice */}
        <ProductWidget1 product={product} />
        <FeaturedProducts products={featuredProducts} />
      </div>
    </MainLayout>
  );
};

export default SingleProduct;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
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
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}
