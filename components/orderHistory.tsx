import { Order } from "../types/order";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../lib/api";
import { useAuthContext } from "../contexts/authContext";
import { CartItem } from "./shoppingCart";
import { Disclosure } from "@headlessui/react";
import { SmallButton } from "./button";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { toast } from "react-hot-toast";
import cn from "classnames";

export interface OrderHistoryProps {

}

const OrderHistory = (props: OrderHistoryProps) => {
  const [pastOrders, setPastOrders] = useState<Order[]>();
  const { authToken } = useAuthContext();

  const fetchOrders = async (token: string): Promise<Order[]> => {
    return await fetchAPI("/orders/me", token);
  };

  const handleRequestInvoice = (order_id: number) => async () => {
    try {
      await fetchAPI(`/orders/my-invoice/${order_id}`, authToken);
    } catch (e) {
      console.error(`Could not request invoice: ${e.message ? e.message : e.toString()}`);
      toast.error("Something went wrong, we could not request your invoice");
    }
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

    <div className={"text-left grid grid-cols-3"}>
      <span className={"font-semibold"}>Order Number</span>
      <span className={"font-semibold"}>Total</span>
      <span className={"font-semibold"}>Date</span>
    </div>

    <div className={"divide-y divide-primary col-span-full grid gap-2 max-h-screen overflow-y-scroll"}>
      {pastOrders?.map(order => {
        return (
          <Disclosure key={order.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="grid grid-cols-3 text-left pt-2">
                  <span className={""}>#{order.id}</span>
                  <span className={""}>R{order.total}</span>
                  <div className={"grid grid-cols-2"}>
                    <span>{new Date(order.time_submitted || "").toLocaleDateString()}</span>
                    <ChevronUpIcon
                      className={cn({ "transform rotate-180": open }, "w-5 h-5 text-primary")} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                  <div className={""}>
                    {order.items?.map((item, idx) => <CartItem item={item} key={idx} disabled />)}
                    <div className={"my-4 justify-end flex"}>
                      <SmallButton onClick={handleRequestInvoice(order.id)} color={"primary"}>
                        Request invoice for order #{order.id}
                      </SmallButton>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  </div>;
};

export { OrderHistory };
