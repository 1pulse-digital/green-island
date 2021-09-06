import React from "react";
import Image from "next/image";
import payfast from "../images/payfast.png";
import { ShippingAddress } from "../components/checkout/shippingAddress";
import { ShippingMethod } from "../components/checkout/shippingMethod";
import MainLayout from "../layouts/MainLayout";
import { MedicalAidDetails } from "../components/checkout/medicalAidDetails";
import { OrderSummary } from "../components/checkout/orderSummary";
import { PaymentMethod } from "../components/checkout/paymentMethod";

const Checkout = () => {
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

        <div className={"grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
          <div className={"grid gap-4"}>
            <ShippingMethod />
            <ShippingAddress />
          </div>

          <div className={"grid gap-4"}>
            <OrderSummary />
          </div>

          <div className={"grid gap-4"}>
            <MedicalAidDetails />
            <PaymentMethod />
          </div>
        </div>

        <div className={"grid justify-end"}>
          <span className={"text-sm"}>Secure payments with Payfast</span>
          <div>
            <Image src={payfast} alt="Payments made with Payfast" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Checkout;
