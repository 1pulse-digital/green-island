import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { prettyPrice } from "../../lib/calc";
import cn from "classnames";

export interface ShippingMethodProps {
  shipping: boolean;
  setShipping: (value: boolean) => void;
  shippingPrice: number;
}

export const ShippingMethod = (props: ShippingMethodProps) => {
  const [plan, setPlan] = useState("startup");

  return (
    <div className={"bg-white p-10 h-48"}>
      <RadioGroup value={plan} onChange={setPlan}>
        <RadioGroup.Label>
          <p className={"text-2xl font-semibold"}>Shipping Method</p>
        </RadioGroup.Label>
        <div className={"grid gap-2 mt-2"}>
          <RadioGroup.Option value="courier">
            {({ checked }) => (
              <>
                <input
                  type="checkbox"
                  name={"courier"}
                  className="w-6 h-6 bg-white rounded border-gray-300 hover:cursor-pointer bg-check text-primary focus:ring-secondary"
                  checked={props.shipping}
                  onChange={() => props.setShipping(!props.shipping)}
                  value=""
                />
                <span className={"ml-2 text-gray-700 whitespace-nowrap"}>Courier +( {prettyPrice(props.shippingPrice)} )</span>
              </>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="pickup">
            {({ checked }) => (
              <>
                <input
                  type="checkbox"
                  name={"pickup"}
                  className="w-6 h-6 bg-white rounded border-gray-300 hover:cursor-pointer bg-check text-primary focus:ring-secondary"
                  checked={!props.shipping}
                  onChange={() => props.setShipping(!props.shipping)}
                  value=""
                />
                <span className={cn("ml-2 text-gray-700")}>Pick up in store (Free)</span>
              </>
            )}
          </RadioGroup.Option>
        </div>
      </RadioGroup>

    </div>
  );
};
