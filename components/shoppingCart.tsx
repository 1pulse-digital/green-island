import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import cart from "../images/cart.png";
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
  const { cartCount, cartItems } = useCartContext();

  // calculate the total price for all items in the
  const cartTotal = cartItems
    .map((item) => item.product.price * item.quantity)
    .reduce((total, item) => (total += item), 0);

  return (
    <div className="max-w-sm relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`p-2 inline-flex rounded-sm hover:ring-2 ring-primary`}>
              <Image src={cart} alt="cart" />
              {cartCount > 0 && (
                <span
                  className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/3 -translate-y-1/3 bg-secondary rounded-full">
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
        )}
      </Popover>
    </div>
  );
};
