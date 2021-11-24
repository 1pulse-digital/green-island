import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CartItemType, useCartContext } from "../contexts/cartContext";
import Image from "next/image";
import Button from "./button";
import { useRouter } from "next/router";
import { prettyPrice } from "../lib/calc";

export interface CartItemProps {
  item: CartItemType;
  disabled?: boolean;
}

export const CartItem = ({ item, disabled }: CartItemProps) => {
  const { removeFromCart } = useCartContext();
  const router = useRouter();

  const goToProduct = (item: CartItemType) => () => {
    router.push(`/products/${item.product.id}`);
  };

  return (
    <div className="grid grid-cols-8 h-24 rounded-lg transition duration-150 ease-in-out hover:bg-gray-50">
      <div className="relative rounded-lg ring-1 ring-offset-1 ring-primary cursor-pointer"
           onClick={goToProduct(item)}>
        <Image
          layout="fill"
          objectFit="contain"
          src={item.product.image?.formats.thumbnail?.url ||
          "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"}
          alt={item.product.image?.alternativeText || item.product.name}
        />
      </div>

      <div className="col-span-5 px-4">
        <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
        <p className="text-sm text-gray-800 line-clamp-3">
          {item.product.description}
        </p>
      </div>

      <div className="col-span-2 pl-4 border-l-2 border-dashed">
        <p>Total: {item.quantity}</p>
        <p>{prettyPrice(item.quantity * item.product.price)}</p>
        {!disabled && (
          <div
            onClick={(e) => {
              removeFromCart(item.product.id, 1);
            }}
            className="flex justify-end p-4 cursor-pointer text-primary hover:text-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export const ShoppingCart = () => {
  const { cartItems, clearCart } = useCartContext();
  const cartCount = cartItems.length;
  const router = useRouter();

  // calculate the total price for all items in the
  const cartTotal = cartItems
    .map((item) => item.product.price * item.quantity)
    .reduce((total, item) => (total += item), 0);

  return (
    <div className="relative max-w-sm">
      <Popover className="relative">
        <>
          <Popover.Button
            className={`p-2 inline-flex rounded-sm`}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6 text-primary hover:text-secondary"
                 viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {cartCount > 0 && (
              <span
                className="inline-flex absolute top-0 right-0 justify-center items-center py-1 px-2 text-xs font-bold leading-none text-white rounded-full transform translate-x-1/4 -translate-y-1/4 bg-secondary">
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
              className="absolute z-10 px-4 mt-3 w-screen max-w-sm -translate-x-3/4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg">
                {/* Cart Items */}
                <div className="grid relative gap-4 p-4 bg-white">
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
                <div className="flex p-4 bg-gray-100">
                  <div className={"flex-grow"}>
                    <span className="block text-sm font-medium text-gray-900">Cart Total</span>
                    <span className="block text-sm text-gray-500">{prettyPrice(cartTotal)}</span>
                    <Button onClick={(e) => {
                      router.push("/checkout");
                    }} color={"primary"} className={"h-12 text-base mt-4 "}>Checkout</Button>
                  </div>
                  <div
                    className="px-1 cursor-pointer text-primary hover:text-secondary"
                    onClick={(e) => clearCart()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20"
                         fill="currentColor">
                      <path fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                      />
                    </svg>
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
