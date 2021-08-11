import { Product } from "../types/product";
import Image from "next/image";

export interface ProductWidget1Props {
  product: Product;
}

type strapiLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const strapiLoader = (params: strapiLoaderParams) => {
  return params.src;
};

const prettyPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(price);
};

const ProductWidget1 = (props: ProductWidget1Props) => {
  const { product } = props;

  if (!product) {
    return null;
  }

  return (
    <div className={"bg-gray-100-200 h-[1200px] w-full py-10"}>
      <div className={"grid grid-cols-5 bg-gray-100   "}>
        <div className={"relative col-span-1 h-[400px] bg-red-600 "}>
          <Image
            layout="fill"
            objectFit="cover"
            loader={strapiLoader}
            src={product.image.formats.small.url}
            alt={product.image.alternativeText}
          />
        </div>
        <div className=" col-span-2 px-5 py-6 bg-yellow-500 relative  h-[700px]">
          <Image
            layout="fill"
            objectFit="cover"
            loader={strapiLoader}
            src={product.image.formats.small.url}
            alt={product.image.alternativeText}
          />
        </div>
        {/* product description */}
        <div className=" px-20 py-20 col-span-2 bg-gray-100">
          <span className="truncate font-semibold text-3xl">
            {product.name}
          </span>

          <p className={"py-10 "}>{product.description}</p>
          <p className={"font-semibold text-2xl"}>
            <div className="relative inline-block text-left px-2">
              <div>
                <button
                  type="button"
                  className=" border gap-2 border-gray-500  dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-6 py-2 text-lg font-medium text-gray-700 dark:text-gray-10s0 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                  id="options-menu">
                  Select option
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {prettyPrice(product.price)}
          </p>
          <div className="relative inline-block text-left px-2 py-10">
            <div>
              <button
                type="button"
                className=" border  border-gray-500  dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-10 py-2 text-lg font-medium text-gray-700 dark:text-gray-10s0 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                id="options-menu">
                1
                {/* <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                </svg> */}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="truncate h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 ">
            Add to cart
          </button>
        </div>
      </div>
      <div className={"bg-white py-10 h-[400px] px-48 "}>
        {/* accordion start */}
        <div class="w-full flex sm:border-b sm:border-gray-300 relative flex-col sm:flex-row">
          <div class="flex-1 sm:text-center font-medium pb-3 cursor-pointer hover:text-blue-400 false">
            International
          </div>
          <p></p>
          <div class="flex-1 sm:text-center font-medium pb-3 cursor-pointer hover:text-blue-400 false">
            Local
          </div>
          <div class="flex-1 sm:text-center font-medium pb-3 cursor-pointer hover:text-blue-400 text-blue-400">
            Global
          </div>
          <div class="flex-1 sm:text-center font-medium pb-3 cursor-pointer hover:text-blue-400 false">
            Pencil
          </div>
          <div class="hidden sm:block absolute bottom-0 left-0 h-1 bg-blue-400 transition-transform duration-300 ease-out w-1/4 transform translate-x-double"></div>
        </div>
        {/* acoordion end */}
        <p className={"px-60 "}>{product.benefits}</p>
      </div>
    </div>
  );
};

export default ProductWidget1;
