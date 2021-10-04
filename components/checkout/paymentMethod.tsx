import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import payfastLogo from "./Payfast_logo_stacked.svg";
import Button from "../button";
import { Input } from "../input";
import { useAuthContext } from "../../contexts/authContext";

export interface PaymentMethodProps {
  handleProceedToPayment: () => Promise<void>;
  applyCoupon: () => Promise<void>;
  appliedCoupons: string[];
  coupon: string;
  setCoupon: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const PaymentMethod = (props: PaymentMethodProps) => {
  const { user } = useAuthContext();

  return (
    <div className={"bg-white p-10 relative"}>
      <div className={"absolute top-0 right-0 mt-4 mr-4 "}>
        <Image width={60} height={60} src={payfastLogo} alt="payfast" />
      </div>
      <p className={"text-2xl font-semibold"}>
        Discount Code
      </p>
      <div className={"grid gap-4 mt-6"}>
        <Input
          id={"coupon-code"}
          label={"Enter discount code"}
          value={props.coupon}
          onChange={(e) => props.setCoupon(e.target.value)}
        />
        <div className={"grid grid-cols-2"}>
          {props.appliedCoupons && props.appliedCoupons.length > 0 &&(
            <div className={"mb-8"}>
              <span className={"text-primary text-sm font-bold"}>Coupons applied</span><br/>
              {props.appliedCoupons.map(c => (
                <span className={"text-secondary text-sm"} key={c}>{c}</span>
              ))}
            </div>
          )}
          <div className={"grid col-start-2 justify-end"}>
            <Button
              onClick={props.applyCoupon}
              color={"secondary"}
              className={"text-sm h-12 p-2"}>Apply</Button>
          </div>
        </div>
        <Input
          disabled={Boolean(user)}
          id={"email"}
          label={"Email address"}
          type={"email"}
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)} />
      </div>
      <div className={"grid content-center mt-4"}>
        <Button onClick={props.handleProceedToPayment} color={"primary"}>Proceed to payment</Button>
      </div>
    </div>
  );
};
