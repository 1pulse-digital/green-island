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

  console.log("The products:", products);
  return (
    <MainLayout>
      <ShopBanner />

      <div className="flex gap-8">
        {products.map((p: Product) => {
          return <ProductWidget key={p.id} product={p} />;
        })}
      </div>
      <ShopSidebar />
      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
