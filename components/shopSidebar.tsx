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
          <div>
            <p className="text-black-900  pt-6 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-bold">
              Shop by product type
            </p>
            <a
              className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
              href="#">
              <span className="text-left">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"></svg>
              </span>
              {/* test1 */}
              <div>
                {/* TODO: Replace these repeating items with the <SingleItem /> component */}
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Multivitamins
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Individual Nutrients
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Digestive Aids
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Probiotics
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Prebiotics
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Essential Fatty Acids
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Immune Enhancers
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-3">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none"
                  />
                  <span className="text-gray-700 dark:text-white font-normal">
                    Kid's health
                  </span>
                </label>
              </div>
              {/* tesst */}
            </a>
          </div>

          {/* Forms */}
          <div className={"ml-6"}>
            <p className="text-black-900  w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-bold">
              Forms
            </p>
            {/* test1 */}
            <div>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Capsule
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Softgel
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Tablet
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Powder
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Shake
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Liquid
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  className=" bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none"
                />
                <span className="text-gray-700 dark:text-white font-normal">
                  Granules
                </span>
              </label>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
