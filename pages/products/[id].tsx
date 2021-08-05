import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { fetchAPI } from "../../lib/api";


interface SingleProductProps {
}

const SingleProduct = (props: SingleProductProps) => {
  return (
    <div>

    </div>
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

  const [article] = await Promise.all([
    fetchAPI(`/products/${context.params.slug}`),
  ]);

  return {
    props: { article },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 1 } }, // See the "paths" section below
    ],
    fallback: true, //true or false // See the "fallback" section below
  };
}
