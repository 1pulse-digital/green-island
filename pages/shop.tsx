import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { ShopSidebar } from "../components/shopSidebar";
import { Hits } from "react-instantsearch-dom";
import { ProductHit } from "../components/search/productHit";
import { AlgoliaPagination } from "../components/search/pagination";
import { ShopBannerFeatured } from "../components/shopBannerFeatured";
import { FeaturedProducts } from "../components/featuredProducts";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { fetchAPI, requestCoupon } from "../lib/api";
import useCouponRequested from "../hooks/useCouponRequested";
import toast from "react-hot-toast";

export interface ShopProps {}

//const Shop = (props: ShopProps) => {
export interface HomeProps {
  featuredProducts?: Product[];
}

const Shop = (props: ShopProps) => {
  const { couponRequested, setCouponRequested } = useCouponRequested(true);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
  });

  const handleCouponRequest = async () => {
    try {
      await requestCoupon(values.email, values.fullName);
      toast.success("You should receive your coupon shortly");
      setCouponRequested(true);
    } catch (e) {
      console.error(`Could not request coupon ${e}`);
      toast.error("Something went wrong, we could not send the coupon");
    }
  };

  const handleChange =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };
  const [loading, setLoading] = useState(false);

  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();

  const fetchData = async () => {
    const [featuredProducts] = await Promise.all([
      fetchAPI("/products?featured=true"),
    ]);

    return {
      featuredProducts,
    };
  };

  useEffect(() => {
    try {
      setLoading(true);
      // fetch data
      fetchData()
        .then((result) => {
          // Use the first 4 articles as featured articles

          setFeaturedProducts(result.featuredProducts);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (e) {
      console.error(`Could not fetch data:`, e);
    }
  }, []);

  return (
    <MainLayout>
      <ShopBanner />
      {/* <ShopBannerFeatured /> */}
      <FeaturedProducts products={featuredProducts} loading={loading} />
      {/* We use a 12 column grid system to fine tune the breakpoints */}
      <div className={"relative grid md:flex lg:min-h-[768px]"}>
        {/* Sidebar */}
        <div className={"max-w-full"}>
          <ShopSidebar />
        </div>

        {/* Product grid */}
        <div className="relative w-full bg-gray-50">
          <div className={"py-4 sm:px-4  mb-[38px] mx-auto"}>
            <Hits hitComponent={ProductHit} />
          </div>
          {/* Pagination */}
          <div className={"absolute inset-x-0 bottom-0 mx-auto "}>
            {/* TODO: We might want the user to set the page size */}
            <AlgoliaPagination hitsPerPage={10} />
          </div>
        </div>
      </div>

      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
