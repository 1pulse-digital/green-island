import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

import { majorCities } from "./shippingAddress";

export interface ShippingMethodProps {
  shipping: boolean;
  setShipping: (value: boolean) => void;
}

export const ShippingMethod = (props: ShippingMethodProps) => {
  const [plan, setPlan] = useState("startup");

  return (
    <div className={"bg-white p-10 h-auto"}>
      <RadioGroup value={plan} onChange={setPlan}>
        <RadioGroup.Label>
          <p className={"text-2xl font-semibold"}>Shipping Method</p>
        </RadioGroup.Label>
        <div className={"grid gap-2 mt-2"}>
          <RadioGroup.Option value="pickup">
            <>
              <input
                type="checkbox"
                name={"pickup"}
                className="w-6 h-6 bg-white rounded border-gray-300 hover:cursor-pointer bg-check text-primary focus:ring-secondary"
                checked={!props.shipping}
                onChange={() => props.setShipping(!props.shipping)}
                value=""
              />
              <span className={"ml-2 text-gray-700"}>Pick up in store (Free)</span>
            </>
          </RadioGroup.Option>
          <RadioGroup.Option value="courier">
            <>
              <input
                type="checkbox"
                name={"courier"}
                className="w-6 h-6 bg-white rounded border-gray-300 hover:cursor-pointer bg-check text-primary focus:ring-secondary"
                checked={props.shipping}
                onChange={() => props.setShipping(!props.shipping)}
                value=""
              />
              <span
                className={"ml-2 text-gray-700 whitespace-nowrap"}
              >
                Courier
              </span>
            </>
          </RadioGroup.Option>
        </div>
      </RadioGroup>
      {props.shipping && (
        <div className={"text-sm text-primary grid gap-2 mt-4"}>
          <div>
            <p className={"font-semibold"}>Major cities <em className={"font-light"}>+R100</em></p>
            <ul className={"flex flex-wrap gap-x-2"}>
              {majorCities.map(city => {
                return <li key={city.name}>{city.alias}</li>;
              })}
            </ul>
          </div>
          <p className={"font-semibold"}>Outlying areas <em className={"font-light"}>+R165</em></p>
        </div>
      )}
    </div>
  );
};
