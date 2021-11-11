import { AlgoliaSearchBox } from "./search/searchbox";
import { AlgoliaRefinementList } from "./search/refinementList";
import { AlgoliaClearRefinements } from "./search/clearRefinements";
import { useRefinementContext } from "../contexts/refinementContext";

export interface ShopSidebarProps {
}

export const ShopSidebar = (props: ShopSidebarProps) => {
  const {defaultRefinementCategories} = useRefinementContext();

  return (
    <div className={"bg-gray-100 h-full py-5 px-10 "}>
      <div className="flex flex-col max-w-full sm:justify-center">
        <nav className={"grid gap-6"}>
          {/* Search box */}
          <div className="relative">
            <AlgoliaSearchBox />
          </div>


          <div>
            {/* Shop by category */}
            <div>
              <p className="w-full mb-4 text-2xl font-bold text-primary font-karla">
                Category
              </p>
              <AlgoliaRefinementList
                attribute={"category.name"}
                showMore={true}
                limit={10}
                defaultRefinement={defaultRefinementCategories}
              />
            </div>

            {/* Shop by product type */}
            {/*<div>*/}
            {/*  <p className="w-full mb-4 text-2xl font-bold text-primary font-karla">*/}
            {/*    Product Type*/}
            {/*  </p>*/}
            {/*  <div>*/}
            {/*    <AlgoliaRefinementList attribute={"product_type"} />*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/* Shop by product form */}
            <div>
              <p className="w-full mb-4 text-2xl font-bold text-primary font-karla">
                Product Form
              </p>
              <div>
                <AlgoliaRefinementList attribute={"product_form"} />
              </div>
            </div>

            <div className={""}>
              <AlgoliaClearRefinements clearsQuery customTitle={"Clear all filters and query"} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
