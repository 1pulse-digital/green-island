import React from "react";
import Image from "next/image";
import payfastLogo from "./Payfast_logo_stacked.svg";
import Button from "../button";
import { Input } from "../input";

export interface PaymentMethodProps {

}

export const PaymentMethod = (props: PaymentMethodProps) => {
  return (
    <div className={"bg-white px-10 relative"}>
      <p className={"text-2xl font-semibold py-10"}>Payment Method</p>
      <div className={"absolute top-0 right-0 mt-10 mr-4 "}>
        <Image width={80} height={80} src={payfastLogo} alt="payfast" />
      </div>
      <p className={"text-2xl font-semibold"}>
        Discount Code
      </p>
      <div className={"grid gap-4 mt-6"}>
        <Input id={"coupon-code"} label={"Enter discount code"} value={""}
               onChange={(e) => console.log(e.target.value)} />
        <div className={"grid justify-end"}>
          <Button color={"secondary"} className={"text-sm h-12 p-2"}>Apply</Button>
        </div>
      </div>
      <div className={"grid content-center mt-4"}>
        <Button color={"primary"}>Proceed to payment</Button>
      </div>
    </div>
  );
};
