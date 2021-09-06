import React from "react";

export interface ShippingMethodProps {

}

export const ShippingMethod = (props: ShippingMethodProps) => {
  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold"}>
        Shipping Method
      </p>
      <div className="mt-4">
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
  );
};
