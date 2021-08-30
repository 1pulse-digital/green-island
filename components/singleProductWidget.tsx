import { Product } from "../types/product";
import Image from "next/image";
import { strapiLoader } from "../lib/media";

export interface ProductWidget1Props {
  product: Product;
}

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
    <div className={"h-full w-full"}>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 font-karla bg-gray-50  "
        }>
        <div className=" relative self-center h-[600px] w-[600px]">
          <Image
            layout="fill"
            objectFit="cover"
            loader={strapiLoader}
            src={product.image?.formats.small.url || "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"}
            alt={product.image?.alternativeText || "Product image"}
          />
        </div>
        {/* product description */}
        <div className="  md:h-[100px]sm:h-[1500px] px-10 py-10  ">
          <span className="truncate font-semibold text-4xl">
            {product.name}
          </span>
          {/* Product Rating Starts */}
          <div className={"flex flex-auto pt-6"}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <svg
              className="w-5 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          {/* Product Rating Starts */}
          <p className={"py-10 "}>{product.description}</p>
          <p className={"py-2 font-semibold "}>{product.directions}</p>
          <p className={"py-2 font-semibold pb-10"}>{product.warning}</p>
          <p className={"font-semibold text-2xl"}>
            <div className="relative inline-block text-left px-2">
              <div>
                <button
                  type="button"
                  className=" border gap-2 border-gray-500  dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-6 py-2 text-lg font-medium text-gray-700 dark:text-gray-10s0 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none   "
                  id="options-menu">
                  Select option
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
                  </svg>
                </button>
              </div>
            </div>

            {prettyPrice(product.price)}
          </p>
          <div className="relative inline-block text-left px-2 py-10">
            <div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-300 px-4 py-2 ">
                  -
                </button>
                <button
                  type="button"
                  className="w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2">
                  1
                </button>
                <button
                  type="button"
                  className="w-full border-t border-b border-r text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="truncate h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget1;
