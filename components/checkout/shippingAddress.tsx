import React, { useRef } from "react";
import { Input } from "../input";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { Address } from "../../types/address";
import cn from "classnames";

export interface ShippingAddress extends Address {
  first_name: string;
  last_name: string;
  company_name: string;
  phone_number: string;
}

export interface ShippingAddressProps {
  values: ShippingAddress;
  setValues: (values: ShippingAddress) => void;
}

export const ShippingAddress = (props: ShippingAddressProps) => {
  const { values, setValues } = props;
  const placeRef = useRef<HTMLInputElement>(null);
  const handleChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const handleAddressChange = (value: string) => {
    const addressBreakdown = {
      postal_code: "",
      country: "",
      province: "",
      city: "",
      area: "",
      suburb: "",
      street: "",
      street_number: "",
      formatted_address: value,
    } as Address;
    setValues({ ...values, ...addressBreakdown });
  };

  const handleSelectAddress = async (address: string) => {
    const geoResultList = await geocodeByAddress(address);
    if (!geoResultList || geoResultList.length < 1) {
      return;
    }

    const geoResult = geoResultList[0];
    const addressBreakdown = {
      postal_code: "",
      country: "",
      province: "",
      city: "",
      area: "",
      suburb: "",
      street: "",
      street_number: "",
      formatted_address: geoResult.formatted_address,
    } as Address;

    console.log({ geoResult });

    for (const ac of geoResult.address_components) {
      switch (convertAddressComponentType(ac.types)) {
        case "country":
          addressBreakdown.country = ac.long_name;
          break;
        case "postalCode":
          addressBreakdown.postal_code = ac.long_name;
          break;
        case "province":
          addressBreakdown.province = ac.long_name;
          break;
        case "city":
          addressBreakdown.city = ac.long_name;
          break;
        case "area":
          addressBreakdown.area = ac.long_name;
          break;
        case "suburb":
          addressBreakdown.suburb = ac.long_name;
          break;
        case "street":
          addressBreakdown.street = ac.long_name;
          break;
        case "streetNumber":
          addressBreakdown.street_number = ac.long_name;
          break;
      }
    }

    setValues({
      ...values,
      ...addressBreakdown,
    });
  };

  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold "}>Shipping Address</p>
      <div className={"grid gap-8 mt-6"}>
        <Input
          id={"first-name"}
          label={"First name"}
          value={values.first_name}
          onChange={handleChange("first_name")}
        />

        <Input
          id={"last-name"}
          label={"Last name"}
          onChange={handleChange("last_name")}
          value={values.last_name}
        />

        <Input
          id={"company-name"}
          label={"Company name (Optional)"}
          onChange={handleChange("company_name")}
          value={values.company_name}
        />

        <Input
          id={"phoneNumber"}
          label={"Phone number"}
          onChange={handleChange("phone_number")}
          value={values.phone_number}
        />

        <div className={cn("duration-1000", { hidden: values.postal_code })}>
          <PlacesAutocomplete
            value={values.formatted_address}
            onChange={handleAddressChange}
            onSelect={handleSelectAddress}
            searchOptions={{
              componentRestrictions: {
                country: "ZA",
              },
            }}>
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className={"relative"}>
                <input
                  {...getInputProps({
                    placeholder: "Address",
                    className:
                      "w-full h-10 placeholder-transparent text-gray-900 rounded border-gray-300 focus:ring-0 focus:outline-none peer focus:border-secondary",
                    disabled: false,
                    id: "google_maps_address",
                    ref: placeRef,
                  })}
                />
                <label
                  htmlFor={"google_maps_address"}
                  className="absolute text-sm text-gray-600 transition-all left-2 -top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:text-gray-600 peer-focus:-top-5 peer-focus:text-sm">
                  Address
                </label>
                <div className="grid gap-1 shadow">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, idx) => {
                    const className = cn(
                      "p-2 hover:ring-2 ring-primary ring-inset cursor-pointer",
                      { "bg-gray-100": suggestion.active }
                    );
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                        })}
                        key={idx}>
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <div className={"grid w-full "}>
          <h2 className={"text-lg text-gray-800 text-primary w-min"}>
            {values.country ? "Address" : ""}
          </h2>
          <p
            className={"text-md text-gray-600 cursor-pointer"}
            onClick={() => {
              handleAddressChange("");
              placeRef.current?.focus();
            }}>
            <span className={""}>
              {values.street_number
                ? `${values.street_number} ${values.street}`
                : ""}
            </span>
            <br />
            <span className={""}>{values.suburb} </span>
            <br />
            {renderCity(values.city)}
            <br />
            <span className={""}>{values.country}</span>
            <br />
            <span className={""}>{values.postal_code}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

type addressComponentType =
  | "postalCode"
  | "country"
  | "province"
  | "city"
  | "area"
  | "suburb"
  | "street"
  | "streetNumber";

export const isMajorCity = (value: string): boolean => {
  return Boolean(
    majorCities.find((c) => c.name === value || c.alias === value)
  );
};

export const majorCities = [
  { alias: "Randburg", name: "Randburg" },
  { alias: "Johannesburg", name: "Johannesburg" },
  { alias: "Pretoria", name: "Pretoria" },
  { alias: "Bloemfontein", name: "Bloemfontein" },
  { alias: "Cape Town", name: "Cape" },
  { alias: "Durban", name: "Durban" },
  { alias: "Port Elizabeth", name: "Gqeberha" },
  { alias: "East London", name: "East London" },
  { alias: "George", name: "George" },
  { alias: "Kimberly", name: "Kimberly" },
  { alias: "Ladysmith", name: "Ladysmith" },
  { alias: "Nelspruit", name: "Mbombela" },
  { alias: "Polokwane", name: "Polokwane" },
  { alias: "Potchefstroom", name: "Potchefstroom" },
  { alias: "Welkom", name: "Welkom" },
  { alias: "Witbank", name: "Emalahleni" },
  { alias: "Centurion", name: "Centurion" },
  { alias: "Midrand", name: "Midrand" },
  { alias: "Sandton", name: "Sandton" },
  { alias: "Krugersdorp", name: "Krugersdorp" },
];

const renderCity = (city: string) => {
  if (isMajorCity(city)) {
    return (
      <span className={""}>
        {city} <em className={"text-xs font-semibold"}>*Major City</em>
      </span>
    );
  }
  return <span className={""}>{city}</span>;
};

const convertAddressComponentType = (
  types: string[]
): addressComponentType | undefined => {
  if (types.includes("postal_code")) {
    return "postalCode";
  }

  if (types.includes("country")) {
    return "country";
  }

  if (types.includes("administrative_area_level_1")) {
    return "province";
  }

  if (types.includes("administrative_area_level_2")) {
    return "area";
  }

  if (types.includes("locality")) {
    return "city";
  }

  if (types.includes("sublocality")) {
    return "suburb";
  }

  if (types.includes("route")) {
    return "street";
  }

  if (types.includes("street_number")) {
    return "streetNumber";
  }
};
