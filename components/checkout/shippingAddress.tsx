import React, { useRef } from "react";
import { Input } from "../input";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { Address } from "../../types/address";
import cn from "classnames";

export interface ShippingAddress extends Address {
  firstName: string,
  lastName: string,
  companyName: string,
  phoneNumber: string,
}

export interface ShippingAddressProps {
  values: ShippingAddress;
  setValues: (values: ShippingAddress) => void;

}

export const ShippingAddress = (props: ShippingAddressProps) => {
  const { values, setValues } = props;
  const placeRef = useRef<HTMLInputElement>(null);
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleAddressChange = (value: string) => {
    const addressBreakdown = {
      postalCode: "",
      country: "",
      province: "",
      city: "",
      area: "",
      suburb: "",
      street: "",
      streetNumber: "",
      formattedAddress: value,
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
      postalCode: "",
      country: "",
      province: "",
      city: "",
      area: "",
      suburb: "",
      street: "",
      streetNumber: "",
      formattedAddress: geoResult.formatted_address,
    } as Address;

    for (const ac of geoResult.address_components) {
      switch (convertAddressComponentType(ac.types)) {
        case "country" :
          addressBreakdown.country = ac.long_name;
          break;
        case "postalCode" :
          addressBreakdown.postalCode = ac.long_name;
          break;
        case "province" :
          addressBreakdown.province = ac.long_name;
          break;
        case "city" :
          addressBreakdown.city = ac.long_name;
          break;
        case "area" :
          addressBreakdown.area = ac.long_name;
          break;
        case "suburb" :
          addressBreakdown.suburb = ac.long_name;
          break;
        case "street" :
          addressBreakdown.street = ac.long_name;
          break;
        case "streetNumber" :
          addressBreakdown.streetNumber = ac.long_name;
          break;
      }
    }
    console.log({ geoResult: geoResult });
    setValues({
      ...values, ...addressBreakdown,
    });
  };


  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold"}>Shipping Address</p>
      <div className={"grid gap-8 mt-4"}>
        <Input
          id={"first-name"}
          label={"First name"}
          value={values.firstName}
          onChange={handleChange("firstName")}
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
          id={"phoneNumber"}
          label={"Phone number"}
          onChange={handleChange("phoneNumber")}
          value={values.phoneNumber}
        />

        <div className={cn("duration-1000", { "hidden": values.postalCode })}>
          <PlacesAutocomplete
            value={values.formattedAddress}
            onChange={handleAddressChange}
            onSelect={handleSelectAddress}
            searchOptions={{
              // types: ["address"],
              componentRestrictions: {
                country: "ZA",
              },
            }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className={"relative"}>
                <input
                  {...getInputProps({
                    placeholder: "Address",
                    className: "w-full h-10 placeholder-transparent text-gray-900 rounded border-gray-300 focus:ring-0 focus:outline-none peer focus:border-secondary",
                    disabled: false,
                    id: "google_maps_address",
                    ref: placeRef,
                  })}
                />
                <label
                  htmlFor={"google_maps_address"}
                  className="absolute left-2 -top-5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:text-gray-600 peer-focus:-top-5 peer-focus:text-sm"
                >
                  Address
                </label>
                <div className="grid gap-1 shadow">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, idx) => {
                    const className = cn("p-2 hover:ring-2 ring-primary ring-inset cursor-pointer", { "bg-gray-100": suggestion.active });
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                        })}

                        key={idx}
                      >
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
          <h2 className={"text-lg text-gray-800 text-primary w-min"}>{values.country ? "Address" : ""}</h2>
          <p className={"text-md text-gray-600 cursor-pointer"} onClick={() => {
            handleAddressChange("");
            placeRef.current?.focus();
          }}>
            <span className={""}>{values.streetNumber ? `${values.streetNumber} ${values.street}` : ""}</span><br />
            <span className={""}>{values.suburb} </span><br />
            <span className={""}>{convertCity(values.city)}</span><br />
            <span className={""}>{values.country}</span><br />
            <span className={""}>{values.postalCode}</span>
          </p>
          {/*<Input*/}
          {/*  id={"street"}*/}
          {/*  label={"Street"}*/}
          {/*  value={values.streetNumber ? `${values.streetNumber} ${values.street}` : ""}*/}
          {/*  disabled*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  id={"suburb"}*/}
          {/*  label={"Suburb"}*/}
          {/*  value={values.suburb}*/}
          {/*  disabled*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  id={"city"}*/}
          {/*  label={"City"}*/}
          {/*  disabled*/}
          {/*  value={convertCity(values.city)}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  id={"country"}*/}
          {/*  label={"Country"}*/}
          {/*  disabled*/}
          {/*  value={values.country}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  id={"postalCode"}*/}
          {/*  label={"Postal code"}*/}
          {/*  disabled*/}
          {/*  value={values.postalCode}*/}
          {/*/>*/}
        </div>
      </div>


    </div>
  );
};

type addressComponentType =
  "postalCode"
  | "country"
  | "province"
  | "city"
  | "area"
  | "suburb"
  | "street"
  | "streetNumber"

const majorCities = [
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
];

const convertCity = (city: string): string => {
  const majorCity = majorCities.find(c => c.name === city);
  if (majorCity) {
    return `${city} ( ${majorCity.alias} )`;
  }
  return city;
};


const convertAddressComponentType = (types: string[]): addressComponentType | undefined => {
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
