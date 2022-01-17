import React, { useRef, useState } from "react";
import { Input } from "./input";
import { useAuthContext } from "../contexts/authContext";
import Button from "./button";
import cn from "classnames";
import { MedicalAidDetails } from "./checkout/medicalAidDetails";
import { MedicalAidDetailsType } from "../types/medicalAid";
import { OrderHistory } from "./orderHistory";
import { saveProfileDetails, saveProfileMedicalAid } from "../lib/api";
import { toast } from "react-hot-toast";
import { Wrapper } from "@googlemaps/react-wrapper";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { LuhnAlgorithm } from "../lib/util";


export const UserProfile = () => {
  const placeRef = useRef<HTMLInputElement>(null);

  const { user, authToken } = useAuthContext();

  const [
    selectedSection,
    setSelectedSection,
  ] = useState<"myDetails" | "orderHistory" | "medicalAidDetails">("myDetails");

  const [addressText, setAddressText] = useState(user?.address);

  const [values, setValues] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    address: user?.address || "",
    rsa_id: user?.rsa_id || "",
  });

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

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [medicalAidDetails, setMedicalAidDetails] = useState<MedicalAidDetailsType>({
    provider: user?.medical_aid_details?.provider || "",
    scheme_name: user?.medical_aid_details?.scheme_name || "",
    membership_number: user?.medical_aid_details?.membership_number || "",
    main_member: user?.medical_aid_details?.main_member || "",
  });

  const handleMedicalAidDetailsChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setMedicalAidDetails({ ...medicalAidDetails, [name]: event.target.value });
  };

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    rsa_id: "",
    address: "",
  });

  const handleUpdate = async () => {
    // validate the fields
    let valid = true;
    let newErrors = {
      first_name: "",
      last_name: "",
      email: "",
      rsa_id: "",
      address: "",
    };

    if (values.first_name === "") {
      newErrors.first_name = "First Name is required";
      valid = false;
    }
    if (values.last_name === "") {
      newErrors.last_name = "Last Name is required";
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
    if (values.rsa_id === "") {
      newErrors.rsa_id = "Identity number is required";
      valid = false;
    }
    if (!LuhnAlgorithm(values.rsa_id)) {
      newErrors.rsa_id = "Invalid identity number";
      valid = false;
    }
    setErrors(newErrors);

    if (valid && authToken && values.address) {
      try {
        await saveProfileDetails(authToken, {
          address: values.address,
          last_name: values.last_name,
          first_name: values.first_name,
          rsa_id: values.rsa_id,
        });
        toast.success("Profile updated");
      } catch (e) {
        toast.error(`Something went wrong, we could not update your profile`, { icon: "😞️" });
        console.error(`Could not update your profile ${e}`);
      }
    }
  };

  const handleUpdateMedicalAidDetails = async () => {
    if (authToken &&
      medicalAidDetails.provider &&
      medicalAidDetails.scheme_name &&
      medicalAidDetails.membership_number &&
      medicalAidDetails.main_member) {
      try {
        await saveProfileMedicalAid(authToken, medicalAidDetails);
        toast.success("Medical aid details updated");
      } catch (e) {
        toast.error(`Something went wrong, we could not update your medical aid details`, { icon: "😞️" });
        console.error(`Could not update your medical aid details ${e}`);
      }
    } else {
      toast.error("Please fill in all your details");
    }
  };


  return (
    <div className={"font-karla bg-gray-50 text-primary px-12 xl:px-24 pb-10"}>
      <h1 className={"text-4xl py-8"}>
        Edit Profile
      </h1>

      <div className={"grid md:grid-cols-3 gap-12 xl:gap-24 "}>
        {/* Left column with profile menu */}
        <div>
          <div className={
            "flex flex-col gap-2 bg-gray-300 text-lg py-6 rounded"
          }>
            <button
              onClick={() => {
                setSelectedSection("myDetails");
              }}
              className={cn(
                { "font-semibold": selectedSection === "myDetails" },
                "hover:font-semibold text-left px-4",
              )}>My Details
            </button>
            <button
              onClick={() => {
                setSelectedSection("orderHistory");
              }}
              className={cn(
                { "font-semibold": selectedSection === "orderHistory" },
                "hover:font-semibold text-left px-4",
              )}
            >Order History
            </button>
            <button
              onClick={() => {
                setSelectedSection("medicalAidDetails");
              }}
              className={cn(
                { "font-semibold": selectedSection === "medicalAidDetails" },
                "hover:font-semibold text-left px-4",
              )}>Medical Aid Details
            </button>
          </div>
        </div>
        {/* Right column with form */}
        <div
          className={
            "md:col-span-2 "
          }>
          {selectedSection === "myDetails" && (
            <div className="grid w-full gap-6 px-10 py-12 mr-24 bg-white lg:grid-cols-2">
              <Input
                id={"first-name"}
                label={"First Name"}
                value={values.first_name}
                onChange={handleChange("first_name")}
                error={errors.first_name}
              />

              <Input
                id={"last-name"}
                label={"Last Name"}
                value={values.last_name}
                onChange={handleChange("last_name")}
                error={errors.last_name}
              />
              <Input
                id={"email"}
                label={"Email"}
                value={values.email}
                type={"email"}
                disabled
              />
              <Input
                id={"rsa-id"}
                label={"Identity number"}
                onChange={handleChange("rsa_id")}
                value={values.rsa_id}
                error={errors.rsa_id}
              />

              <div className={"lg:col-span-2"}>
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

              <div className="mx-auto col-span-full">
                <Button color={"primary"} onClick={handleUpdate}>Update</Button>
              </div>
            </div>
          )}

          {selectedSection === "orderHistory" && (
            <div className="grid w-full gap-6 px-10 py-12 mr-24 bg-white">
              <OrderHistory />
            </div>
          )}

          {selectedSection === "medicalAidDetails" && (
            <div className="grid w-full px-10 py-2 bg-white">
              <MedicalAidDetails
                handleChange={handleMedicalAidDetailsChange}
                values={medicalAidDetails}
              />

              <div className="mx-auto col-span-full">
                <Button color={"primary"} onClick={handleUpdateMedicalAidDetails}>Update</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
