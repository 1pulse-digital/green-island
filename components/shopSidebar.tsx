import React from "react";

const SingleItem = ({ title }: { title: string }) => {
  return (
    <label className="flex items-center space-x-3 mb-3">
      <input
        type="checkbox"
        name="checked-demo"
        className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
      />
      <span className="truncate text-gray-700 dark:text-white font-normal">
        {title}
      </span>
    </label>
  );
};

export const ShopSidebar = () => {
  return (
    <div className={"bg-gray-200 w-96 semibold h-full"}>
      <div className="flex flex-col sm:flex-row sm:justify-start ">
        <nav className="px-6">
          {/* Search box */}
          <div className="my-8">
            <input
              type="search"
              className="bg-white  border-2 p-3 w-full "
              placeholder="Search products..."></input>
            <div className=" pin-r pin-t mt-3 text-purple-lighter"></div>
          </div>

          {/* Shop by Category */}
          <div className={"ml-6"}>
            <p className="text-black-900 font-bold  w-full border-b-2 pb-2 border-gray-100  mb-4 text-md ">
              Shop by Category
            </p>

            {/*  test */}

            <div>
              <SingleItem title="Hormonal Health" />
              <SingleItem title="Gut Health" />
              <SingleItem title="Skin Health" />
              <SingleItem title="Mental Health" />
              <SingleItem title="Weight & Metabolism" />
              <SingleItem title="Detoxification" />
              <SingleItem title="Daily Care" />
              <SingleItem title="Immune Support" />
              <SingleItem title="Stress Management" />
              <SingleItem title="Thyroid Support" />
              <SingleItem title="Infection Management" />
              <SingleItem title="Pain Management" />
            </div>

            {/*  end */}
          </div>

          {/* Shop by Prouct Type */}
          <div className={"ml-6"}>
            <p className="text-black-900  pt-6 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-bold">
              Shop by product type
            </p>
            <div>
              <SingleItem title="Multivitamins" />
              <SingleItem title=" Individual Nutrients" />
              <SingleItem title="Digestive Aids" />
              <SingleItem title=" Probiotics" />
              <SingleItem title=" Prebiotics" />
              <SingleItem title="Essential Fatty Acids" />
              <SingleItem title="Immune Enhancers" />
              <SingleItem title="Kid's health" />
            </div>
          </div>

          {/* Forms */}

          <div className={"ml-6"}>
            <p className="text-black-900  w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-bold">
              Forms
            </p>
            {/* test1 */}
            <div>
              <SingleItem title=" Capsule" />
              <SingleItem title=" Softgel" />
              <SingleItem title=" Tablet" />
              <SingleItem title="  Powder" />
              <SingleItem title="Shake" />
              <SingleItem title=" Liquid" />
              <SingleItem title="Granules" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
