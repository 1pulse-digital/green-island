import { AlgoliaSearchBox } from "./search/searchbox";
import { AlgoliaRefinementList } from "./search/refinementList";
import { AlgoliaClearRefinements } from "./search/clearRefinements";

// interface SingleItemProps {
//   title: string;
//   checked: boolean;
//   onChange: () => void;
// }

// const SingleItem = (props: SingleItemProps) => {
//   return (
//     <label className="flex items-center space-x-3 mb-3 hover:cursor-pointer">
//       <input
//         type="checkbox"
//         name={`${props.title.split(" ").join("-")}`}
//         className="bg-white bg-check h-6 w-6 border border-gray-300 checked:bg-blue-500 checked:border-transparent focus:outline-none hover:cursor-pointer"
//         checked={props.checked}
//         onChange={props.onChange}
//         value=""
//       />
//       <span className="truncate text-gray-700 dark:text-white font-normal">
//         {props.title}
//       </span>
//     </label>
//   );
// };

export interface ShopSidebarProps {
  // selectedProductTypes: ProductType[];
  // onSelectType: (productType: ProductType) => void;
  //
  // selectedProductForms: ProductForm[];
  // onSelectForm: (productForm: ProductForm) => void;
  //
  // selectedCategories: number[];
  // onSelectCategory: (id: number) => void;
}

export const ShopSidebar = (props: ShopSidebarProps) => {
  return (
    <div className={"bg-gray-100 h-full py-5 px-10 2xl:px-20 "}>
      <div className="flex flex-col sm:justify-center">
        <nav className={"grid gap-6"}>
          {/* Search box */}
          <div className="relative">
            <AlgoliaSearchBox />
          </div>


          {/* Shop by category */}
          <div>
            <p className="text-primary font-bold w-full mb-4 text-2xl font-karla">
              Shop by Category
            </p>
            <AlgoliaRefinementList attribute={"category.name"} />
          </div>

          {/* Shop by product types */}
          <div>
            <p className="text-primary font-bold w-full mb-4 text-2xl font-karla">
              Shop by product type
            </p>
            <div>
              <AlgoliaRefinementList attribute={"product_type"} />
            </div>
          </div>

          {/* Shop by product forms */}
          <div>
            <p className="text-primary font-bold w-full mb-4 text-2xl font-karla">
              Forms
            </p>
            <div>
              <AlgoliaRefinementList attribute={"product_form"} />
            </div>
          </div>

          <div className={""}>
            <AlgoliaClearRefinements clearsQuery customTitle={"Clear all filters and query"} />
          </div>
        </nav>
      </div>
    </div>
  );
};
