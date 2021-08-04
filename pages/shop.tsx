import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { Product } from "../types/product";
import useSWR from "swr";
import { fetchAPI } from "../lib/api";

export interface ShopProps {
}

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

      There are some products
      {products.map((p: Product) => {
        return (
          <div key={p.id}>{p.name}</div>
        );
      })}
      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
