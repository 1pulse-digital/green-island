import { Tab } from "@headlessui/react";
import classnames from "classnames";
import { Product } from "../types/product";

export interface ProductAdditionalInfoProps {
  product: Product;
}

export const ProductAdditionalInfo = (props: ProductAdditionalInfoProps) => {
  return (
    <div className="py-16 px-10 ml-16 w-3/4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-secondary">
          <Tab
            className={({ selected }) =>
              classnames(
                "w-full py-2.5 text-lg leading-5 font-medium text-primary rounded-lg",
                "focus:outline-none  ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }>
            Ingredients
          </Tab>
          <Tab
            className={({ selected }) =>
              classnames(
                "w-full py-2.5 text-lg leading-5 font-medium text-primary rounded-lg",
                "focus:outline-none  ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }>
            Additional Information
          </Tab>
          <Tab
            className={({ selected }) =>
              classnames(
                "w-full py-2.5 text-lg leading-5 font-medium text-primary rounded-lg",
                "focus:outline-none  ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }>
            Benefits
          </Tab>
          <Tab
            className={({ selected }) =>
              classnames(
                "w-full py-2.5 text-lg leading-5 font-medium text-primary rounded-lg",
                "focus:outline-none  ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }>
            Reviews
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classnames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}>
            <div>{props.product.ingredients}</div>
          </Tab.Panel>
          <Tab.Panel
            className={classnames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}>
            <div>{props.product.additional_information}</div>
          </Tab.Panel>
          <Tab.Panel
            className={classnames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}>
            <div>{props.product.benefits}</div>
          </Tab.Panel>
          <Tab.Panel
            className={classnames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}>
            <div>{props.product.warning}</div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
