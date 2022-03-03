import React from "react";
import { Input } from "../input";
import { ShippingAddress } from "./shippingAddress";


export interface ContactDetailsProps {
  values: ShippingAddress;
  setValues: (values: ShippingAddress) => void;
  errors: {
    first_name: string,
    last_name: string,
    phone_number: string,
  };
}


export const ContactDetailsCard = (props: ContactDetailsProps) => {
  const { errors, values, setValues } = props;
  const handleChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold "}>Contact Details</p>
      <div className={"grid gap-6 mt-6"}>
        <Input
          id={"first-name"}
          label={"First name"}
          value={values.first_name}
          onChange={handleChange("first_name")}
          error={errors.first_name}
        />

        <Input
          id={"last-name"}
          label={"Last name"}
          onChange={handleChange("last_name")}
          value={values.last_name}
          error={errors.last_name}
        />

        <Input
          id={"phoneNumber"}
          label={"Phone number"}
          onChange={handleChange("phone_number")}
          value={values.phone_number}
          error={errors.phone_number}
        />
      </div>
    </div>
  );
};
