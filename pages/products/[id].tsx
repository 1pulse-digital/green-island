import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import { Product } from "../../types/product";
import MainLayout from "../../layouts/MainLayout";
import { FeaturedProducts } from "../../components/featuredProducts";
import { ProductAdditionalInfo } from "../../components/productAdditionalInfo";
import SingleProductWidget from "../../components/singleProductWidget";
import { Disclaimer } from "../../components/disclaimer";
import { useRouter } from "next/router";

interface SingleProductProps {
}

const SingleProduct = (props: SingleProductProps) => {
  const [product, setProduct] = useState<Product>();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // fetch the data
  useEffect(() => {
    const fetchData = async () => {
      const id = (router.query.id as string);
      if (!id) {
        return;
      }
      const [product, featuredProducts] = await Promise.all([
        fetchAPI(`/products/${id}`),
        fetchAPI("/products?featured=true"),
      ]);

      return {
        product,
        featuredProducts,
      };
    };

    try {
      setLoading(true);
      // fetch data
      fetchData().then((result) => {
        setFeaturedProducts(result?.featuredProducts);
        setProduct(result?.product);
      }).finally(() => {
        setLoading(false);
      });
    } catch (e) {
      console.error(`Could not fetch data:`, e);
    }
  }, [router.query.id]);

  if (!product && loading) {
    return (
      <MainLayout>
        <div className="flex-grow bg-gray-100 grid place-items-center">
          <span className={"animate-pulse text-xl"}>Loading</span>
        </div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="bg-gray-50 w-full h-full md:h-[700px]">
          <div className={"text-xl text-center mt-8"}>The product you are looking for could not be found</div>
          {featuredProducts &&
            <FeaturedProducts products={featuredProducts} loading={loading} />
          }
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

        <FeaturedProducts products={featuredProducts} loading={loading} />
      </div>
    </MainLayout>
  );
};

export default SingleProduct;
