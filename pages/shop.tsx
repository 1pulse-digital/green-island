import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { Product } from "../types/product";
import { useProducts } from "../lib/api";
import ProductWidget from "../components/productWidget";
import { ShopSidebar } from "../components/shopSidebar";
import { useEffect, useState } from "react";
import qs from "qs";
import { ProductType } from "../types/productTypes";
import { ProductForm } from "../types/productForms";

export interface ShopProps {
}

interface ProductFilter {
  categories: number[];
  productForms: ProductForm[];
  productTypes: ProductType[];
}

const Shop = (props: ShopProps) => {
  const [query, setQuery] = useState<string>();

  const { products, isLoading, error } = useProducts(query);

  const [filter, setFilter] = useState<ProductFilter>({
    categories: [],
    productForms: [],
    productTypes: [],
  });

  useEffect(() => {
    setQuery(qs.stringify({
        _where: [
          { category: [filter.categories] },
          { product_form: [filter.productForms.map(i => i.value)] },
          { product_type: [filter.productTypes.map(i => i.value)] },
        ],
      }),
    );
  }, [filter]);

  const onSelectProductType = (item: ProductType) => {
    const idx = filter.productTypes.findIndex((i) => i.value === item.value);
    if (idx === -1) {
      const newProductTypes = [...filter.productTypes, item];
      setFilter({ ...filter, productTypes: newProductTypes });
    } else {
      const newProductTypes = [...filter.productTypes];
      newProductTypes.splice(idx, 1);
      setFilter({ ...filter, productTypes: newProductTypes });
    }
  };

  const onSelectProductForm = (item: ProductForm) => {
    const idx = filter.productForms.findIndex((i) => i.value === item.value);
    if (idx === -1) {
      const newProductForms = [...filter.productForms, item];
      setFilter({ ...filter, productForms: newProductForms });
    } else {
      const newProductForms = [...filter.productForms];
      newProductForms.splice(idx, 1);
      setFilter({ ...filter, productForms: newProductForms });
    }
  };

  const onSelectCategory = (id: number) => {
    const idx = filter.categories.findIndex((i) => i === id);
    if (idx === -1) {
      const newCategories = [...filter.categories, id];
      setFilter({ ...filter, categories: newCategories });
    } else {
      const newCategories = [...filter.categories];
      newCategories.splice(idx, 1);

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
      <div className={"grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center"}>
        <ShopSidebar
          onSelectCategory={onSelectCategory}
          selectedCategories={filter.categories}

          onSelectType={onSelectProductType}
          selectedProductTypes={filter.productTypes}

          onSelectForm={onSelectProductForm}
          selectedProductForms={filter.productForms}
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
          {isLoading && <div className={"animate-pulse"}>Loading</div>}
        </div>
      </div>

      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
