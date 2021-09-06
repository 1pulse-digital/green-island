import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  useCartContext,
  WishlistItemType,
} from "../contexts/cartContext";
import Image from "next/image";
import { strapiLoader } from "../lib/media";

const prettyPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(price);
};


const WishlistItem = ({ item }: { item: WishlistItemType }) => {
  const { removeFromWishlist, addToCart } = useCartContext();

  return (
    <div className="grid grid-cols-8 h-24 rounded-lg transition duration-150 ease-in-out hover:bg-gray-50">
      <div className="relative rounded-lg ring-1 ring-offset-1 ring-primary">
        <Image
          layout="fill"
          objectFit="contain"
          loader={strapiLoader}
          src={item.product.image?.formats.thumbnail.url || ""}
          alt={item.product.image?.alternativeText || "Product image"}
        />
      </div>

      <div className="col-span-5 px-4">
        <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
        <p className="text-sm text-gray-800 line-clamp-3">
          {item.product.description}
        </p>
      </div>

      <div className="col-span-2 pl-4 border-l-2 border-dashed">
        <p>{prettyPrice(item.product.price)}</p>
        <div>
          <button
            className="text-primary"
            onClick={() => {
              addToCart(item.product, 1);
              removeFromWishlist(item.product.id);
            }}>
            Add to cart
          </button>
        </div>
        <div>
          <button
            className="text-red-500"
            onClick={() => {
              removeFromWishlist(item.product.id);
            }}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductWishlist = () => {
  const { wishlistItems } = useCartContext();

  return (
    <div className="relative max-w-sm">
      <Popover className="relative">
        <>
          <Popover.Button
            className={`p-2 inline-flex`}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6 text-primary hover:text-secondary"
                 viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd" />
            </svg>

            {wishlistItems.length > 0 && (
              <span
                className="inline-flex absolute top-0 right-0 justify-center items-center py-1 px-2 text-xs font-bold leading-none text-white rounded-full transform translate-x-1/4 -translate-y-1/4 bg-secondary">
                  {wishlistItems.length}
                </span>
            )}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel
              className="absolute z-10 px-4 mt-3 w-screen max-w-sm -translate-x-3/4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                {/* Cart Items */}
                <div className="grid relative gap-4 p-4 bg-white">
                  {wishlistItems.map((item, idx) => (
                    <WishlistItem key={idx} item={item} />
                  ))}
                </div>

                {/*  Message to display for empty cart */}
                {wishlistItems.length === 0 && (
                  <div className="p-4 bg-gray-50">
                    <span>Your wishlist is empty</span>
                  </div>
                )}

                {/*  Cart summary */}
                <div className="p-4 bg-gray-50">
                  <div
                    className="flow-root py-2 px-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Some summary of your wishlist?
                        </span>
                      </span>
                    <span className="block text-sm text-gray-500">
                        Thanks
                      </span>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
};
