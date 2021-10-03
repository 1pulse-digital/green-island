import React from "react";
import { CartItemType } from "../../contexts/cartContext";
import { CartItem } from "../shoppingCart";
import { prettyPrice } from "../../lib/calc";
import { Order } from "../../types/order";

export interface OrderSummaryProps {
  cartItems: CartItemType[];
  order?: Order;
}

export const OrderSummary = (props: OrderSummaryProps) => {
  const { cartItems } = props;
  const cartTotal = cartItems
    .map((item) => item.product.price * item.quantity)
    .reduce((total, item) => (total += item), 0);

  return (
    <div className={"bg-white p-10  "}>
      <p className={"text-2xl font-semibold"}>Order Summary</p>
      <p className={"text-sm"}>Please review your order below</p>
      <div className={"bg-gray-50 mt-4 p-4 flex flex-col gap-4 shadow-lg rounded-lg h-[460px] overflow-auto"}>
        {cartItems.map((item, idx) => {
          return (
            <CartItem item={item} key={idx} disabled={Boolean(props.order)} />
          );
        })}
      </div>

      <div className={"mt-4 grid grid-cols-2 gap-4"}>
        {props.order && (
          <div>
            <span className="block text-sm font-medium text-gray-900">Total discount</span>
            <span className="block text-sm text-gray-500">{prettyPrice(props.order.discount_total)}</span>
          </div>
        )}
        {props.order && (
          <div>
            <span className="block text-sm font-medium text-gray-900">Shipping Total</span>
            <span className="block text-sm text-gray-500">{prettyPrice(props.order.shipping_total)}</span>
          </div>
        )}
        {props.order && (
          <div className={"col-span-2"}>
            <span className="block font-medium text-gray-900">Order Total</span>
            <span className="block text-gray-500">{prettyPrice(props.order.total)}</span>
          </div>
        )}
        {!props.order && (
          <div className={"col-span-2"}>
            <span className="block font-medium text-gray-900">Cart Total</span>
            <span className="block text-gray-500">{prettyPrice(cartTotal)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
