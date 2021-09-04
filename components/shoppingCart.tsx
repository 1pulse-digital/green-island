import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CartItemType, useCartContext } from "../contexts/cartContext";
import Image from "next/image";

type strapiLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const prettyPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(price);
};

const strapiLoader = (params: strapiLoaderParams) => params.src;

const CartItem = ({ item }: { item: CartItemType }) => {
  const { removeFromCart } = useCartContext();
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
        <p>Total: {item.quantity}</p>
        <p>{prettyPrice(item.quantity * item.product.price)}</p>
        <button
          className="text-red-500"
          onClick={() => {
            removeFromCart(item.product.id, 1);
          }}>
          remove
        </button>
      </div>
    </div>
  );
};

export const ShoppingCart = () => {
  const { cartItems } = useCartContext();
  const cartCount = cartItems.length;

  // calculate the total price for all items in the
  const cartTotal = cartItems
    .map((item) => item.product.price * item.quantity)
    .reduce((total, item) => (total += item), 0);

  return (
    <div className="max-w-sm relative">
      <Popover className="relative">
        <>
          <Popover.Button
            className={`p-2 inline-flex rounded-sm`}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-6 w-6 text-primary ring-1 rounded ring-offset-2 hover:ring-offset-4  ring-primary"
                 viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {cartCount > 0 && (
              <span
                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-secondary rounded-full">
                  {cartCount}
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
                  {cartItems.map((item, idx) => (
                    <CartItem key={idx} item={item} />
                  ))}
                </div>

                {/*  Message to display for empty cart */}
                {cartCount === 0 && (
                  <div className="p-4 bg-gray-50">
                    <span>Your cart is empty</span>
                  </div>
                )}

                {/*  Cart summary */}
                <div className="p-4 bg-gray-50">
                  <div
                    className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Cart Total
                        </span>
                      </span>
                    <span className="block text-sm text-gray-500">
                        {prettyPrice(cartTotal)}
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
