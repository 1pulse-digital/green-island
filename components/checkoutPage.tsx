import React from "react";

export const CheckoutPage = () => {
  return (
    <div className={"bg-secondary md:h-[2000px] sm:h-[3000px]"}>
      <h6 className={"text-4xl  grid py-6  px-10  "}>Checkout</h6>
      <p className={"px-10 py-6"}>
        Please enter your details below to complete your purchase. Please note
        that you will need to submit your purchase to your Medical Aid provider
        to claim back.
      </p>
      <div
        className={"md:grid md:grid-cols-3 sm:grid-cols-1 grid-rows-4 px-10"}
      >
        <div className={"bg-white md:h-[1500px]  sm:h-[3000px] py-10 px-10 "}>
          <p className={"text-2xl font-semibold  py-10"}>Shipping Address</p>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative   ">
              First Name *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-16 border border-gray-700  flex-1 appearance-none   py-2 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Last Name *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-16 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Company Name
              <input
                type="text"
                id="contact-form-name"
                className=" ml-8 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Streeet Address *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-6 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                id="contact-form-name"
                className=" ml-36 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Suburb *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-20 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              City *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-28 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Country *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-20 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Postal Code *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-16 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Phone Number *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-10 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Last Name *
              <input
                type="text"
                id="contact-form-name"
                className=" ml-16 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Last Name *
              <input
                type="text"
                id="contact-form-name"
                className="ml-16 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <p className={"text-2xl font-semibold text-center py-10"}>
            Medical Aid Details
          </p>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              ID
              <input
                type="text"
                id="contact-form-name"
                className="ml-40 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Medical Aid
              <input
                type="text"
                id="contact-form-name"
                className="ml-24 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Scheme Name
              <input
                type="text"
                id="contact-form-name"
                className="ml-20 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Membership Number
              <input
                type="text"
                id="contact-form-name"
                className="ml-8 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              Main Member
              <input
                type="text"
                id="contact-form-name"
                className="ml-20 border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
                placeholder="  "
              />
            </div>
          </div>
        </div>

        <div className={"bg-yellow-500 px-10 h-[600px] "}>
          <p className={"text-2xl font-semibold divide-solid  py-10"}>
            Shipping Method
          </p>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative ">
              <input
                type="checkbox"
                id="contact-form-name"
                className="form-checkbox h-5 w-5 text-gray-600"
                placeholder="  "
              />
              <span className="ml-2 text-gray-700">Courier (+R150)</span>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative py-4">
              <input
                type="checkbox"
                id="contact-form-name"
                className="form-checkbox h-5 w-5 text-gray-600"
                placeholder="  "
              />
              <span className="ml-2 text-gray-700">
                Pick up in store (Free)
              </span>
            </div>
          </div>
          <div className={"bg-blue-500 h-[300px]"}>
            <p className={"text-2xl font-semibold divide-solid  py-10"}>
              Order Summary
            </p>
          </div>
        </div>

        <div className={"bg-green-400 h-[300px]"}>
          <p className={"text-2xl font-semibold divide-solid  py-10 px-10"}>
            Payment Method
          </p>
          <div className="col-span-1 lg:col-span-1">
            <div className=" relative px-10 ">
              <input
                type="checkbox"
                id="contact-form-name"
                className="form-checkbox h-5 w-5 text-gray-600"
                placeholder="  "
              />
              <span className="ml-2 text-gray-700">Payment Method</span>
            </div>
          </div>
          <div className={"bg-purple-400 md:h-[300px] sm:h-[2000px] px-10"}>
            <p className={"text-2xl font-semibold divide-solid  py-4"}>
              Discount Code<br></br>
              <br></br>
              Apply discount code
            </p>

            <input
              type="text"
              id="contact-form-name"
              className="ml-2 border border-gray-700  flex-1 appearance-none  w-1/2  py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400   "
              placeholder=" Enter discount code "
            />
            <div className="col-span-2 py-2 px-10">
              <button
                type="submit"
                className="py-2 px-4  bg-secondary  border border-secondary hover:bg-gray-500 focus:ring-indigo-500 focus:ring-offset-indigo-200  text-white    transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   "
              >
                Apply
              </button>
            </div>
          </div>

          <div className={"bg-red-400 md:h-[300px] sm:h-[1000px] px-10"}>
            <p className={"text-2xl font-semibold divide-solid  py-4"}>
              Order Total<br></br>
            </p>

            <input
              type="text"
              id="contact-form-name"
              className="ml-2 border border-gray-700  flex-1 appearance-none  w-1/2  py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400   "
              placeholder=" Enter discount code "
            />
            <div className="col-span-2 py-2 px-2">
              <button
                type="submit"
                className="py-2 px-4 bg-secondary border border-secondary hover:primary focus:ring-indigo-500 focus:ring-offset-indigo-200  text-white    transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   "
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
