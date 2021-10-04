import { Product } from "../types/product";
import Image from "next/image";
import { strapiLoader } from "../lib/media";
import { prettyPrice } from "../lib/calc";
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import App from "./app";

export interface ProductWidget1Props {
  product: Product;
}

const ProductWidget1 = (props: ProductWidget1Props) => {
  const { product } = props;

  if (!product) {
    return null;
  }

  return (
    <div className={"h-full w-full"}>
      <div
        className={"grid grid-cols-1 md:grid-cols-2 font-karla bg-gray-50  "}>
        <div className=" relative self-center h-[600px] w-[600px]">
          <Image
            layout="fill"
            objectFit="cover"
            loader={strapiLoader}
            src={
              product.image?.formats.small.url ||
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            alt={product.image?.alternativeText || "Product image"}
          />
        </div>
        {/* product description */}
        <div className="  md:h-[100px]sm:h-[1500px] px-10 py-10  ">
          <span className="text-4xl font-semibold truncate">
            {product.name}
          </span>
          {/* Product Rating Starts */}
          <div className={"flex flex-auto pt-6"}>
            <ReactStars activeColor="blue" size={30} isHalf={true} />

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
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
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          {/* Product Rating Starts */}
          <p className={"py-10 "}>{product.description}</p>
          <p className={"py-2 font-semibold "}>{product.directions}</p>
          <p className={"py-2 font-semibold pb-10"}>{product.warning}</p>
          <p className={"font-semibold text-2xl"}>
            <div className="inline-block relative px-2 text-left">
              <div
                className="flex gap-2 justify-center items-center py-2 px-6 w-full text-lg font-medium text-gray-700 rounded-md border border-gray-500 shadow-sm dark:bg-gray-800 hover:bg-gray-50 focus:outline-none dark:text-gray-10s0 dark:hover:bg-gray-500"
                id="options-menu">
                <label for="variations"> Select option</label>

                <select name="Variations" id="size">
                  <option value="90 tablets">{product.price}</option>
                  <option value="20 capsules">{product.name}</option>
                  <option value="10 capsules">10 capsules</option>
                  <option value="5 capsules">5 capsules</option>
                </select>
              </div>
            </div>

            {prettyPrice(product.price)}
          </p>

          <div className="inline-block relative py-10 px-2 text-left">
            <App />
            <div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="py-2 px-4 w-full text-base font-medium text-black bg-white rounded-l-md border-t border-b border-l hover:bg-gray-300">
                  -
                </button>
                <button
                  type="button"
                  className="py-2 px-4 w-full text-base font-medium text-black bg-white border hover:bg-gray-100">
                  1
                </button>
                <button
                  type="button"
                  className="py-2 px-4 w-full text-base font-medium text-black bg-white rounded-r-md border-t border-r border-b hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="px-20 mt-4 h-12 font-medium tracking-wide text-white rounded-full shadow-md transition duration-200 focus:outline-none truncate bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget1;
