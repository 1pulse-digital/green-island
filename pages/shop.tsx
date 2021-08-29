import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { Product } from "../types/product";
import { useProducts } from "../lib/api";
import ProductWidget from "../components/productWidget";
import { ShopSidebar } from "../components/shopSidebar";
import { useState } from "react";

export interface ShopProps {
}

interface ProductFilter {
  categories: number[];
}

const Shop = (props: ShopProps) => {
  const { products, isLoading, error } = useProducts();
  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
  });

  const onSelectCategory = (id: number) => {
    const idx = filter.categories.findIndex((i) => i === id);
    if (idx === -1) {
      const newCategories = [...filter.categories, id];
      setFilter({ ...filter, categories: newCategories });
    } else {
      const newCategories = [...filter.categories];
      newCategories.splice(idx);

      setFilter({ ...filter, categories: newCategories });
    }
  };

  if (error) {
    // TODO: We need to handle this error better
    return <div>Error: {error.message ? error.message : error.toString()}</div>;
  }

  return (
    <MainLayout>
      <ShopBanner />
      <div
        className={
          "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center"
        }>
        <ShopSidebar
          onSelectCategory={onSelectCategory}
          selectedCategories={filter.categories}
        />

        <div className="p-5 md:p-7 col-span-2 xl:col-span-3">
          <p className={"font-karla pb-10"}>Home Digestive</p>
          {!isLoading && (
            <div className="flex flex-wrap gap-4">
              {products.map((p: Product) => {
                return <ProductWidget key={p.id} product={p} />;
              })}
            </div>
          )}
          {!isLoading && <div className={"animate-pulse"}>Loading</div>}
        </div>
      </div>

      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
