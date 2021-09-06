import React from "react";
import Image from "next/image";
import { ShippingAddress } from "../components/checkout/shippingAddress";
import { ShippingMethod } from "../components/checkout/shippingMethod";
import MainLayout from "../layouts/MainLayout";
import { MedicalAidDetails } from "../components/checkout/medicalAidDetails";
import { OrderSummary } from "../components/checkout/orderSummary";
import { PaymentMethod } from "../components/checkout/paymentMethod";
import payfastLogo from "../components/checkout/PayFast_logo_colour.png"

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
