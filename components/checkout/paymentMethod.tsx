import React from "react";
import Image from "next/image";
import payfastLogo from "./Payfast_logo_stacked.svg";

export interface PaymentMethodProps {

}

export const PaymentMethod = (props: PaymentMethodProps) => {
  return (
    <div className={"bg-white px-10 relative"}>
      <p className={"text-2xl font-semibold py-10"}>Payment Method</p>
      <div className={"absolute top-0 right-0 mt-10 mr-4 "}>
        <Image width={80} height={80} src={payfastLogo} alt="payfast" />
      </div>
      <p className={"text-2xl font-semibold divide-solid  "}>
        Discount Code<br />
        <br />
        Apply discount code
      </p>
      <input
        type="text"
        id="contact-form-name"
        className="flex-1 py-2 px-4 my-4 ml-2 w-full placeholder-gray-400 text-gray-700 bg-white border border-gray-700 appearance-none"
        placeholder=" Enter discount code "
      />
      <div className="col-span-2 py-2 px-10">
        <button
          type="submit"
          className="py-2 px-4 text-base font-semibold text-center text-white border shadow-md transition duration-200 ease-in hover:bg-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-secondary border-secondary"
        >
          Apply
        </button>
      </div>
      <button
        type="submit"
        className="py-2 px-4 text-base font-semibold text-center text-white border shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-secondary border-secondary hover:primary"
      >
        Proceed to Purchase
      </button>

    </div>
  );
};
