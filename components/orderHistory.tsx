import { Order } from "../types/order";
import { useEffect, useState } from "react";

export interface OrderHistoryProps {

}

const OrderHistory = (props: OrderHistoryProps) => {
  const [pastOrders, setPastOrders] = useState<Order[]>();

  useEffect(() => {

  }, []);

  return <div>
    Order History
  </div>;
};

export { OrderHistory };
