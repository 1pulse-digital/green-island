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
//     <label className="flex items-center mb-3 space-x-3 hover:cursor-pointer">
//       <input
//         type="checkbox"
//         name={`${props.title.split(" ").join("-")}`}
//         className="w-6 h-6 bg-white border border-gray-300 checked:bg-blue-500 checked:border-transparent hover:cursor-pointer focus:outline-none bg-check"
//         checked={props.checked}
//         onChange={props.onChange}
//         value=""
//       />
//       <span className="font-normal text-gray-700 dark:text-white truncate">
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
    <div className={"bg-gray-100 h-full py-5 px-10 "}>
      <div className="flex flex-col sm:justify-center">
        <nav className={"grid gap-6"}>
          {/* Search box */}
          <div className="relative">
            <AlgoliaSearchBox />
          </div>


          {/* Shop by category */}
          <div>
            <p className="mb-4 w-full text-2xl font-bold text-primary font-karla">
              Category
            </p>
            <AlgoliaRefinementList attribute={"category.name"} />
          </div>

          {/* Shop by product type */}
          <div>
            <p className="mb-4 w-full text-2xl font-bold text-primary font-karla">
              Product Type
            </p>
            <div>
              <AlgoliaRefinementList attribute={"product_type"} />
            </div>
          </div>

          {/* Shop by product form */}
          <div>
            <p className="mb-4 w-full text-2xl font-bold text-primary font-karla">
              Product Form
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
