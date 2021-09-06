import React, { useState } from "react";
import { Input } from "../input";

export interface ShippingAddressProps {

}

export const ShippingAddress = (props: ShippingAddressProps) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    suburb: "",
    companyName: "",
    city: "",
    country: "",
    postalCode: "",
    phoneNumber: "",
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold"}>Shipping Address</p>
      <div className={"grid gap-8 mt-4"}>
        <Input
          id={"first-name"}
          label={"First name"}
          onChange={handleChange("firstName")}
          value={values.firstName}
        />

        <Input
          id={"last-name"}
          label={"Last name"}
          onChange={handleChange("lastName")}
          value={values.lastName}
        />

        <Input
          id={"company-name"}
          label={"Company name"}
          onChange={handleChange("companyName")}
          value={values.companyName}
        />

        <Input
          id={"street-address"}
          label={"Street address"}
          onChange={handleChange("streetAddress")}
          value={values.streetAddress}
        />
        <Input
          id={"suburb"}
          label={"Suburb"}
          onChange={handleChange("suburb")}
          value={values.suburb}
        />
        <Input
          id={"city"}
          label={"City"}
          onChange={handleChange("city")}
          value={values.city}
        />
        <Input
          id={"country"}
          label={"Country"}
          onChange={handleChange("country")}
          value={values.country}
        />
        <Input
          id={"phoneNumber"}
          label={"Phone number"}
          onChange={handleChange("phoneNumber")}
          value={values.phoneNumber}
        />
        <Input
          id={"postalCode"}
          label={"Postal code"}
          onChange={handleChange("postalCode")}
          value={values.postalCode}
        />
      </div>


    </div>
  );
};
