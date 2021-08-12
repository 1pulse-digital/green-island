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
    <div className={"bg-gray-50 w-1/4 semibold h-full py-5"}>
      <div className="flex flex-col sm:flex-row justify-center ">
        <nav>
          {/* Search box */}
          <div className="my-8 ">
            <input
              type="search"
              className="bg-white p-3 w-full"
              placeholder="Search products..."></input>
          </div>

          {/* Shop by Category */}
          <div>
            <p className="text-primary font-bold  w-full pb-2   mb-4 text-2xl font-karla">
              Shop by Category
            </p>

            {/*  test */}

            <div className={"font-karla"}>
              <SingleItem title="Hormonal Health" />
              <SingleItem title="Gut Health" />
              <SingleItem title="Skin Health" />
              <SingleItem title="Mental Health" />
              <SingleItem title="Weight and Metabolism" />
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
          <div>
            <p className="text-primary font-bold w-full my-10 text-2xl font-karla">
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

          <div>
            <p className="text-primary font-bold w-full my-10 text-2xl font-karla">
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
