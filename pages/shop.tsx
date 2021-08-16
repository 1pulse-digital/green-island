import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { Product } from "../types/product";
import useSWR from "swr";
import { fetchAPI } from "../lib/api";
import ProductWidget from "../components/productWidget";
import { ShopSidebar } from "../components/shopSidebar";

export interface ShopProps {}

const useProducts = () => {
  const { data, error } = useSWR("/products", fetchAPI);
  return {
    products: data,
    isLoading: !error && !data,
    error,
  };
};

const Shop = (props: ShopProps) => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <MainLayout>
      <ShopBanner />
      <div className={"grid grid-cols-1  md:grid-cols-3  xl:grid-cols-4 justify-center"}>
        <ShopSidebar />

        <div className="p-5 md:p-7 col-span-2 xl:col-span-3">
          <p className={"font-karla pb-10"}>Home Digestive</p>
          <div className="flex flex-wrap gap-4">
            {products.map((p: Product) => {
              return <ProductWidget key={p.id} product={p} />;
            })}
          </div>
        </div>
      </div>

      {/* </div> */}
      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
