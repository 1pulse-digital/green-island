import React, { useState } from "react";
import Image from "next/image";
import { ShippingAddress } from "../components/checkout/shippingAddress";
import { ShippingMethod } from "../components/checkout/shippingMethod";
import MainLayout from "../layouts/MainLayout";
import { MedicalAidDetails } from "../components/checkout/medicalAidDetails";
import { OrderSummary } from "../components/checkout/orderSummary";
import { PaymentMethod } from "../components/checkout/paymentMethod";
import payfastLogo from "../components/checkout/PayFast_logo_colour.png";
import { useCartContext } from "../contexts/cartContext";
import { useAuthContext } from "../contexts/authContext";
import { getStrapiURL } from "../lib/api";
import { parseErrorResponse } from "../utils/strapi";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const { authToken, setLoading } = useAuthContext();
  const { cartItems } = useCartContext();

  const createOrder = async () => {
    const requestUrl = getStrapiURL("/orders");
    setLoading(true);
    let data;
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (authToken) {
        // @ts-ignore
        headers.Authorization = `Bearer ${authToken}`;
      }

      const response = await fetch(requestUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            ...item,
            product: { id: item.product.id, price: item.product.price, name: item.product.name },
          })),
          billing_address: shippingAddress,
          shipping_address: shippingAddress,
          description: "",
          // TODO: Do we want to include a customer note?
          customer_note: "",
          shipping: shipping,
        }),
      });
      data = await response.json();
    } catch (e) {
      console.error(`Could not create order: ${e.message ? e.message : e.toString()}`);
      setLoading(false);
      throw `Something went wrong with the order placement`;
    }

    if (data.error) {
      console.warn(`Order placement failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      setLoading(false);
      throw `Order placement failed: ${combinedMessage}`;
    } else {
      // order placement success
      console.debug(`Order placed: `, data);
    }
    setLoading(false);
  };

  const handleProceedToPayment = () => {
    createOrder().then((result) => {
      toast.success("Order created");
    }).catch((e) => {
      toast.error("Order placement failed");
    });
  };

  const [shipping, setShipping] = useState(true);

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    suburb: "",
    city: "",
    country: "",
    phoneNumber: "",
    postalCode: "",
  });

  //md:grid-cols-2 xl:grid-cols-3
  return (
    <MainLayout>
      <div className={"bg-gray-100 px-10 lg:px-20 xl:px-28 py-4 grid gap-4"}>
        <h6 className={"text-4xl"}>Checkout</h6>
        <p className={""}>
          Please enter your details below to complete your purchase.
        </p>
        <p className={"text-sm"}>
          Please note that you will need to submit your purchase to your Medical
          Aid provider to claim back.
        </p>

        <div className={"grid gap-4 lg:grid-cols-2 2xl:grid-cols-3"}>
          <div className={"grid gap-4"}>
            <ShippingMethod
              shipping={shipping}
              setShipping={setShipping}
              shippingPrice={150}
            />
            {shipping && (
              <ShippingAddress values={shippingAddress} setValues={setShippingAddress} />
            )}
          </div>

          <div className={"grid gap-4"}>
            <OrderSummary cartItems={cartItems} />
          </div>

          <div className={"grid gap-4 lg:col-span-2 lg:grid-cols-2 2xl:col-span-1 2xl:grid-cols-1"}>
            <MedicalAidDetails />
            <PaymentMethod handleProceedToPayment={handleProceedToPayment} />
          </div>
        </div>

        <div className={"grid justify-end"}>
          <span className={"text-sm text-gray-600"}>All payments are secured with Payfast</span>
          <div className="w-[200px]">
            <Image src={payfastLogo} alt="Payments made with Payfast" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Checkout;
