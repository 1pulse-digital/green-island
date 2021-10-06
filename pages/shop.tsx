import MainLayout from "../layouts/MainLayout";
import { ShopBanner } from "../components/shopBanner";
import { Suppliers } from "../components/suppliers";
import { ShopSidebar } from "../components/shopSidebar";
import { Hits } from "react-instantsearch-dom";
import { ProductHit } from "../components/search/productHit";
import { AlgoliaPagination } from "../components/search/pagination";

export interface ShopProps {
}

const Shop = (props: ShopProps) => {

  return (
    <MainLayout>
      <ShopBanner />
      {/* We use a 12 column grid system to fine tune the breakpoints */}
      <div className={"relative grid md:flex lg:min-h-[768px] bg-blue-400"}>
        {/* Sidebar */}
        <div className={""}>
          <ShopSidebar />
        </div>

        {/* Product grid */}
        <div className="relative bg-gray-50 w-full">
          <div className={"p-5 md:p-7 mb-[38px] mx-auto"}>
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
