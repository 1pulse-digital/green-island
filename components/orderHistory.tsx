import { Order } from "../types/order";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../lib/api";
import { useAuthContext } from "../contexts/authContext";
import { CartItem } from "./shoppingCart";

export interface OrderHistoryProps {

}

const OrderHistory = (props: OrderHistoryProps) => {
  const [pastOrders, setPastOrders] = useState<Order[]>();
  const { authToken } = useAuthContext();

  const fetchOrders = async (token: string): Promise<Order[]> => {
    return await fetchAPI("/orders/me", token);
  };

  useEffect(() => {
    if (authToken) {
      fetchOrders(authToken).then(orders => {
        setPastOrders(orders);
      });
    }
  }, [authToken]);

  return <div className={"grid gap-4"}>
    Order History

    {pastOrders?.map(order => {
      return (
        <div key={order.id}>
          <span>Order #{order.id}</span>
          <div>
            {order.items?.map((item, idx) => <CartItem item={item} key={idx} disabled />)}
          </div>
        </div>
      );
    })}
  </div>;
};

export { OrderHistory };
