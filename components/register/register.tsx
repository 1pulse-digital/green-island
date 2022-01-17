import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { sendEvent } from "../../lib/gtag";
import Link from "next/link";
import { saveProfileDetails } from "../../lib/api";
import cn from "classnames";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Input } from "../input";
import { SmallButton } from "../button";
import { LuhnAlgorithm } from "../../lib/util";

export const Register = () => {
  const placeRef = useRef<HTMLInputElement>(null);

  const { register, authToken } = useAuthContext();
  const router = useRouter();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rsaID: "",
    address: "",
    passwordConfirmation: "",
  });

  const [addressText, setAddressText] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rsaID: "",
    password: "",
    address: "",
  });

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // validate the fields
    let valid = true;
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      rsaID: "",
      address: "",
      password: "",
    };

    if (values.firstName === "") {
      newErrors.firstName = "First Name is required";
      valid = false;
    }
    if (values.lastName === "") {
      newErrors.lastName = "Last Name is required";
      valid = false;
    }
    if (values.email === "") {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (values.address == "") {
      newErrors.address = "Address is required";
      valid = false;
    }
    if (values.password === "") {
      newErrors.password = "Password is required";
      valid = false;
    }
    if (values.rsaID === "") {
      newErrors.rsaID = "Identity number is required";
      valid = false;
    }
    if (!LuhnAlgorithm(values.rsaID)) {
      newErrors.rsaID = "Invalid identity number";
      valid = false;
    }
    if (values.password !== values.passwordConfirmation) {
      newErrors.password = "Passwords don't match";
      valid = false;
    }
    setErrors(newErrors);

    if (valid) {
      try {
        await register(values.email, values.password);
        setRegistrationComplete(true);
        sendEvent({ action: "sign_up" });
      } catch (e) {
        toast.error(e, { icon: "😞️" });
      }
    }
  };

  useEffect(() => {
    const doSave = async (token: string) => {
      await saveProfileDetails(token, {
        address: values.address,
        first_name: values.firstName,
        last_name: values.lastName,
        rsa_id: values.rsaID,
      });
    };

    if (authToken && registrationComplete) {
      doSave(authToken).then(() => {
        toast(`Welcome to The Perfect Health Practice!`, { icon: "🌿⚕️" });
        setRegistrationComplete(false);
        router.replace("/").finally();
      }).catch(() => {
        toast.error(`We could not save your profile details, please update your details later`);
      });
    }

  }, [
    router,
    authToken,
    registrationComplete,
    values.firstName,
    values.lastName,
    values.rsaID,
    values.address,
  ]);

  const handleAddressChange = (value: string) => {
    setAddressText(value);
    if (value === "") {
      setValues({ ...values, address: value });
    }
  };

  const handleSelectAddress = async (address: string) => {
    const geoResultList = await geocodeByAddress(address);
    if (!geoResultList || geoResultList.length < 1) {
      return;
    }

    const geoResult = geoResultList[0];
    const formatted_address = geoResult.formatted_address;

    setValues({ ...values, address: formatted_address });
    setAddressText(formatted_address);
  };


  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...values, [name]: event.target.value };
    setValues(newValues);
    // password validation
    if (name === "passwordConfirmation" || errors.password) {
      // validate the password field
      if (newValues.password !== newValues.passwordConfirmation) {
        setErrors({ ...errors, password: "Passwords don't match" });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }
  };

  return (
    <div
      className={
        "grid lg:grid-cols-2 w-full bg-gray-100 lg:h-[800px] content-center font-karla px-8 lg:px-16 text-primary "
      }>
      {/* Left column */}
      <div className={"lg:px-10  grid-cols-2 "}>
        <h6 className={"text-4xl mb-8"}>Create an Account</h6>
        <div>
          <div className="grid lg:grid-cols-2 gap-6 py-12 px-10 m-auto bg-white">
            <div className="col-span-2 lg:col-span-1">
              <Input
                id={"first-name"}
                label={"First name"}
                value={values.firstName}
                onChange={handleChange("firstName")}
              />
              {errors.firstName &&
                <span className="text-xs text-red-600">{errors.firstName}</span>
              }
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Input
                id={"last-name"}
                label={"Last name"}
                onChange={handleChange("lastName")}
                value={values.lastName}
              />
              {errors.lastName &&
                <span className="text-xs text-red-600">{errors.lastName}</span>
              }
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Input
                type={"email"}
                id={"email"}
                label={"Email"}
                onChange={handleChange("email")}
                value={values.email}
              />
              {errors.email &&
                <span className="text-xs text-red-600">{errors.email}</span>
              }
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Input
                type={"text"}
                id={"rsa-id"}
                label={"Identity number"}
                onChange={handleChange("rsaID")}
                value={values.rsaID}
              />
              {errors.rsaID &&
                <span className="text-xs text-red-600">{errors.rsaID}</span>
              }
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Input
                id={"password"}
                type={"password"}
                label={"Password"}
                value={values.password}
                onChange={handleChange("password")}
              />
              {errors.password &&
                <span className="text-xs text-red-600">{errors.password}</span>
              }
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Input
                id={"confirm-password"}
                type={"password"}
                label={"Confirm Password"}
                value={values.passwordConfirmation}
                onChange={handleChange("passwordConfirmation")}
              />
            </div>

            <div className="col-span-2">
              <Wrapper
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}
                libraries={["places"]}>
                <PlacesAutocomplete
                  value={addressText}
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
                        autoComplete={"off"}
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

              </Wrapper>

              {errors.address &&
                <span className="text-xs text-red-600">{errors.address}</span>
              }
            </div>
          </div>

          <div className={"bg-white py-4 px-12"}>
            <div className={"border border-gray-700 w-full py-2 px-4 "}>
              <p className={"text-opacity-100 font-bold"}>
                To create an account, please review our terms and conditions
                before you click on the "register" button below.{" "}
              </p>
              <p className="mt-1">
                By clicking on the "register" button you agree to you
                personal data being used in accordance with the privacy notice and
                cookie notice. We will use your personal data to manage your
                account, fulfill your order, and dispatch goods via our courier
                service. Your phone number is required for delivery contact from
                the courier.
              </p>
            </div>
          </div>

          <div className="col-span-2 py-8 px-10 bg-white">
            <SmallButton
              onClick={handleRegister}
              color={"primary"}
            >
              Register
            </SmallButton>
            <Link href={"/terms-and-conditions"}>
              <a rel={"noopener"} target={"_blank"} className={"pl-2 duration-300 hover:text-secondary"}>
                Terms and Conditions
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className={"lg:px-10  text-lg py-16 lg:py-20 "}>
        <div className={"bg-white py-10 px-10 "}>
          <p className={"font-bold text-2xl "}>
            Benefits of Creating an Account{" "}
          </p>
          <br />
          <p className={"font-bold"}>
            News and exclusive offers!<br />
          </p>
          Sign up to receive email updates on promotions, launches, gift ideas
          and more. <br />
          <br />
          <p className={"font-bold"}>
            {" "}
            Order History <br />
          </p>
          Receive important information about your order.<br />
          <br />
          <p className={"font-bold"}>
            Faster Checkout<br />
          </p>
          Save your billing and shipping information to make repeat purchases
          easier.
        </div>
      </div>
    </div>
  );
};
