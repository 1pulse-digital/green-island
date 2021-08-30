import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { ShopSidebar } from "../components/shopSidebar";
import { Hits } from "react-instantsearch-dom";
import { ProductHit } from "../components/search/productHit";

export interface ShopProps {
}

const Shop = (props: ShopProps) => {

  return (
    <MainLayout>
      <ShopBanner />
      {/* We use a 12 column grid system to fine tune the breakpoints */}
      <div className={"grid grid-cols-12 lg:min-h-[768px]"}>
        {/* Sidebar */}
        <div className={"col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3 2xl:col-span-2"}>
          <ShopSidebar />
        </div>

        {/* Product grid */}
        <div className="p-5 md:p-7 col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-9 2xl:col-span-10">
          <Hits hitComponent={ProductHit} />
        </div>
      </div>

      <Suppliers />
    </MainLayout>
  );
};

export default Shop;
