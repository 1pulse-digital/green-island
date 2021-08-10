import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { fetchAPI } from "../../lib/api";

interface SingleProductProps {}

const SingleProduct = (props: SingleProductProps) => {
  return <div></div>;
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

  const [products] = await Promise.all([
    fetchAPI(`/products/${context.params.id}`),
  ]);

  return {
    props: { products },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}
