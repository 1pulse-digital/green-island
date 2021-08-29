import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import wishlist from "../images/wishlist.png";
import {
  CartItemType,
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
    <div className="grid grid-cols-8 h-24 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
      <div className="relative ring-primary ring-1 rounded-lg ring-offset-1">
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

      <div className="col-span-2 border-l-2 border-dashed pl-4">
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
  const { wishlistCount, wishlistItems } = useCartContext();

  return (
    <div className="max-w-sm relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`p-2 inline-flex rounded-sm hover:ring-2 ring-primary`}>
              {/* TODO: Replace image with SVG */}
              <Image src={wishlist} alt="wishlist" />
              {wishlistCount > 0 && (
                <span
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/3 -translate-y-1/3 bg-secondary rounded-full">
                  {wishlistCount}
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
                className="absolute z-10 w-screen max-w-sm px-4 mt-3 -translate-x-3/4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  {/* Cart Items */}
                  <div className="relative grid gap-4 bg-white p-4">
                    {wishlistItems.map((item, idx) => (
                      <WishlistItem key={idx} item={item} />
                    ))}
                  </div>

                  {/*  Message to display for empty cart */}
                  {wishlistCount === 0 && (
                    <div className="p-4 bg-gray-50">
                      <span>Your wishlist is empty</span>
                    </div>
                  )}

                  {/*  Cart summary */}
                  <div className="p-4 bg-gray-50">
                    <div
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
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
        )}
      </Popover>
    </div>
  );
};
