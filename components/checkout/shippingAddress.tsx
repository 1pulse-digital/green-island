import React from "react";

export interface ShippingAddressProps {

}

export const ShippingAddress = (props: ShippingAddressProps) => {
  return (
    <div className={"bg-white px-10  "}>
      <p className={"text-2xl font-semibold py-10"}>Shipping Address</p>
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
    </div>
  );
};
