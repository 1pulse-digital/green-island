import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import { Product } from "../../types/product";
import MainLayout from "../../layouts/MainLayout";
import { FeaturedProducts } from "../../components/featuredProducts";
import { ProductAdditionalInfo } from "../../components/productAdditionalInfo";
import SingleProductWidget from "../../components/singleProductWidget";
import { Disclaimer } from "../../components/disclaimer";
import { useRouter } from "next/router";
import Link from "next/link";

interface SingleProductProps {
}

const BreadCrumbs = () => {
  return (
    <nav className="flex px-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/orders">
            <a
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6 text-gray-400 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd" />
              </svg>
              Back to orders
            </a>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

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
        <BreadCrumbs />

        <SingleProductWidget product={product} />

        <ProductAdditionalInfo product={product} />

        <Disclaimer />

        <FeaturedProducts products={featuredProducts} loading={loading} />
      </div>
    </MainLayout>
  );
};

export default SingleProduct;
