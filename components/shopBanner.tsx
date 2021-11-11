import React, { useState } from "react";
import Image from "next/image";
import shop from "../images/shop-banner.png";
import Button from "./button";
import { requestCoupon } from "../lib/api";
import { toast } from "react-hot-toast";

export const ShopBanner = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
  });

  const handleCouponRequest = async () => {
    try {
      await requestCoupon(values.email, values.fullName);
      toast.success("You should receive your coupon shortly");
    } catch (e) {
      console.error(`Could not request coupon ${e}`);
      toast.error("Something went wrong, we could not send the coupon");
    }
  };

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div
      className={"grid h-[450px] bg-gray-50"}>
      <div className={"relative lg:px-[100px] px-10 grid content-center "}>
        <Image
          layout="fill"
          objectFit="cover"
          src={shop}
          placeholder={"blur"}
          alt="Organic medicine on white table"
        />
        <div className={"z-10 grid sm:px-0 content-center"}>
          <h1
            className={
              "lg:text-5xl  md:text-4xl text-3xl text-primary sm:grid-cols-1 md:grid-cols-1  font-karla"
            }>
            Get 15% off Your first purchase.
          </h1>
          <p
            className={
              "text-2xl my-8 text-gray-600 font-light font-karla"
            }>
            <span className="inline bg-white/90 xl:bg-transparent">
              Fill in your details below to receive your 15% off coupon code.
            </span>
          </p>
          <div className={"flex flex-wrap gap-4"}>
            <input
              className="h-12 px-4 bg-white rounded-full appearance-none md:mr-2 md:mb-0 focus:outline-none focus:border-deep-purple-accent-400 focus:shadow-outline"
              placeholder="Full Name"
              required
              type="text"
              value={values.fullName}
              onChange={handleChange("fullName")}
            />
            <input
              className="h-12 px-4 mb-3 transition duration-200 rounded-full appearance-none md:mr-2 md:mb-0 focus:outline-none focus:border-deep-purple-accent-400 focus:shadow-outline"
              placeholder="Email Address"
              required
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
            {/*<Input*/}
            {/*  inputClassName={"rounded-full"}*/}
            {/*  id={"full-name"}*/}
            {/*  label={"Full Name"}*/}
            {/*  value={values.fullName}*/}
            {/*  onChange={handleChange("fullName")}*/}
            {/*/>*/}
            {/*<Input*/}
            {/*  id={"email"}*/}
            {/*  type={"email"}*/}
            {/*  label={"Email Address"}*/}
            {/*  value={values.email}*/}
            {/*  onChange={handleChange("email")}*/}
            {/*/>*/}
            <Button color={"primary"} onClick={handleCouponRequest}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
