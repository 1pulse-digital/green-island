import React, { useRef } from "react";
import { Input } from "../input";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { Address } from "../../types/address";
import cn from "classnames";
import { useAuthContext } from "../../contexts/authContext";
import Link from "next/link";

export interface ShippingAddress extends Address {
  first_name: string;
  last_name: string;
  company_name: string;
  phone_number: string;
}

export interface ShippingAddressCardProps {
  values: ShippingAddress;
  setValues: (values: ShippingAddress) => void;
  errors: {
    first_name: string,
    last_name: string,
    phone_number: string,
    address: string,
  };
}

export const breakdownGeoResult = (geoResult: google.maps.GeocoderResult) => {
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
  return addressBreakdown;
};

export const ShippingAddressCard = (props: ShippingAddressCardProps) => {
  const { user } = useAuthContext();
  const { errors, values, setValues } = props;
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
      apt_floor_number: values.apt_floor_number,
      complex_building_name: values.complex_building_name,
    } as Address;
    setValues({ ...values, ...addressBreakdown });
  };

  const handleSelectAddress = async (address: string) => {
    const geoResultList = await geocodeByAddress(address);
    if (!geoResultList || geoResultList.length < 1) {
      return;
    }

    const geoResult = geoResultList[0];
    const addressBreakdown = breakdownGeoResult(geoResult);

    setValues({
      ...values,
      ...addressBreakdown,
    });
  };

  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold "}>Shipping Address</p>
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

        <div className={cn("duration-1000", { hidden: values.postal_code })}>
          <Input
            id={"apt_floor_number"}
            label={"Apt, Floor number"}
            onChange={handleChange("apt_floor_number")}
            value={values.apt_floor_number}
            className={"mt-8"}
          />
          <Input
            id={"complex_building_name"}
            label={"Complex or Building name"}
            onChange={handleChange("complex_building_name")}
            value={values.complex_building_name}
            className={"mt-8"}
          />
          <br />
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
                {errors.address &&
                  <span className="text-xs text-red-600">{errors.address}</span>
                }
                <div className="grid gap-1 shadow">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, idx) => {
                    const className = cn(
                      "p-2 hover:ring-2 ring-primary ring-inset cursor-pointer",
                      { "bg-gray-100": suggestion.active },
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

        {values.country && (
          <div className={"grid w-full relative"}>
            <button
              className={"absolute top-0 right-0 text-primary hover:text-secondary"}
              onClick={() => {
                handleAddressChange("");
                placeRef.current?.focus();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd" />
              </svg>
            </button>

            <h2 className={"text-lg text-gray-800 text-primary w-min"}>
              Address
            </h2>
            <p className={"text-md text-gray-600"}>
              {values.apt_floor_number && (
                <>
                  <span>{values.apt_floor_number}</span>
                  <br />
                </>
              )}
              {values.complex_building_name && (
                <>
                  <span>{values.complex_building_name}</span>
                  <br />
                </>
              )}

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
        )}
        {user && (
          <div className={"grid place-content-end"}>
            <Link href={"/my-account"}>
              <a className={"text-xs text-gray-600 hover:text-secondary hover:underline"}>Save a default</a>
            </Link>
          </div>
        )}
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
    majorCities.find((c) => c.name === value || c.alias === value),
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
  types: string[],
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
