import React from "react";
import Image from "next/image";
import payfastLogo from "./Payfast_logo_stacked.svg";
import Button from "../button";
import { Input } from "../input";

export interface PaymentMethodProps {
  handleProceedToPayment: () => void;
}

export const PaymentMethod = (props: PaymentMethodProps) => {

  return (
    <div className={"bg-white p-10 relative"}>
      <div className={"absolute top-0 right-0 mt-4 mr-4 "}>
        <Image width={60} height={60} src={payfastLogo} alt="payfast" />
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
        <Button onClick={props.handleProceedToPayment} color={"primary"}>Proceed to payment</Button>
      </div>
    </div>
  );
};
