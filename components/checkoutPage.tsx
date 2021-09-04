import React from "react";
import Image from "next/image";
import payfast from "../images/payfast.png";

export const CheckoutPage = () => {
  return (
    <div className={"bg-gray-100 md:h-[2000px] sm:h-[3000px]"}>
      <h6 className={"text-4xl  grid py-6  px-10  "}>Checkout</h6>
      <p className={"px-10 py-6"}>
        Please enter your details below to complete your purchase.<br/>{" "}
        Please note that you will need to submit your purchase to your Medical
        Aid provider to claim back.
      </p>
      <div
        className={"md:grid md:grid-cols-3 sm:grid-cols-1 grid-rows-4 px-10 "}
      >
        <div className={"bg-white md:h-[1500px]  sm:h-[3000px]  px-10  "}>
          <p className={"text-2xl font-semibold   py-10  "}>Shipping Address</p>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              First Name *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[105px] border border-gray-700  flex-1 appearance-none   py-2 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Last Name *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[105px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Company Name
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[80px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Streeet Address *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[72px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[195px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Suburb *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[132px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              City *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[155px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Country *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[125px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Postal Code *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[98px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Phone Number *
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[75px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>

          <p className={"text-2xl font-semibold text-center py-10"}>
            Medical Aid Details
          </p>
          <div className="grid grid-cols-1">
            <div className="relative">
              ID
              <input
                type="text"
                id="contact-form-name"
                className="lg:ml-[175px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Medical Aid
              <input
                type="text"
                id="contact-form-name"
                className=" lg:ml-[105px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Scheme Name
              <input
                type="text"
                id="contact-form-name"
                className="lg:ml-[85px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Membership Number
              <input
                type="text"
                id="contact-form-name"
                className="lg:ml-[35px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="relative">
              Main Member
              <input
                type="text"
                id="contact-form-name"
                className="lg:ml-[85px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
        </div>

        <div
          className={
            "  lg:px-10 sm:w-full  h-[600px]  lg:mt-0 md:mt-0 sm:mt-10"
          }
        >
          <div className={"bg-white px-10 mt-10 py-8 "}>
            <p
              className={
                "text-2xl font-semibold divide-solid bg-white-500  py-2"
              }
            >
              Shipping Method
            </p>
            <div className="col-span-1 lg:col-span-1">
              <div className="relative">
                <input
                  type="checkbox"
                  id="contact-form-name"
                  className="w-5 h-5 text-gray-600 form-checkbox"
                  placeholder="  "
                />
                <span className="ml-2 text-gray-700">Courier (+R150)</span>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <div className="relative py-4">
                <input
                  type="checkbox"
                  id="contact-form-name"
                  className="w-5 h-5 text-gray-600 form-checkbox"
                  placeholder="  "
                />
                <span className="ml-2 text-gray-700">
                  Pick up in store (Free)
                </span>
              </div>
            </div>
          </div>
          <div className={"bg-white h-[300px]  lg:px-10 sm:w-full   mt-10"}>
            <p className={"text-2xl font-semibold divide-solid px-10  "}>
              Order Summary
            </p>
          </div>
        </div>

        <div className={"bg-white md:h-[200px] sm:h-[1000px]"}>
          <p className={"text-2xl font-semibold divide-solid  mb-6 px-10  "}>
            Payment Method
          </p>

          <div className="col-span-1 grid-rows-1 lg:col-span-1">
            <div className="relative px-10">
              <input
                type="checkbox"
                id="contact-form-name"
                className="w-5 h-5 text-gray-600 form-checkbox"
                placeholder="  "
              />
            </div>
          </div>

          <div className={"flex justify-end "}>
            <Image src={payfast} alt="payfast" />
          </div>

          <div className={"bg-white md:h-[300px] sm:h-[3000px] px-10   mt-10 "}>
            <p className={"text-2xl font-semibold divide-solid  "}>
              Discount Code<br/>
              <br/>
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
          </div>

          <div className={"bg-white md:h-[300px] sm:h-[3000px] px-10 mt-10"}>
            <p className={"text-2xl font-semibold divide-solid  py-4"}>
              Order Total<br/>
            </p>

            <input
              type="text"
              id="contact-form-name"
              className="flex-1 py-2 px-4 my-4 ml-2 w-1/2 placeholder-gray-400 text-gray-700 bg-white border border-gray-700 appearance-none"
              placeholder=" Enter discount code "
            />
            <div className="col-span-2 py-8 px-2">
              <button
                type="submit"
                className="py-2 px-4 text-base font-semibold text-center text-white border shadow-md transition duration-200 ease-in focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 focus:outline-none bg-secondary border-secondary hover:primary"
              >
                Proceed to Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
