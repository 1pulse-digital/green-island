import React, { useState } from "react";
import { Input } from "./input";
import { useAuthContext } from "../contexts/authContext";
import Button from "./button";
import cn from "classnames";
import { MedicalAidDetails } from "./checkout/medicalAidDetails";
import { MedicalAidDetailsType } from "../types/medicalAid";
import { OrderHistory } from "./orderHistory";
import { saveProfileAddress, saveProfileMedicalAid } from "../lib/api";
import { toast } from "react-hot-toast";


export const UserProfile = () => {
  const { user, authToken } = useAuthContext();

  const [
    selectedSection,
    setSelectedSection,
  ] = useState<"myDetails" | "orderHistory" | "medicalAidDetails">("myDetails");

  const [values, setValues] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    address: user?.address || "",
  });

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

  const handleUpdate = async () => {
    if (authToken && values.address) {
      try {
        await saveProfileAddress(authToken, {
          address: values.address,
          last_name: values.last_name,
          first_name: values.first_name,
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
              />
              <Input
                id={"last-name"}
                label={"Last Name"}
                value={values.last_name}
                onChange={handleChange("last_name")}
              />

              <Input
                id={"email"}
                label={"Email"}
                value={values.email}
                type={"email"}
                disabled
              />
              {/*<div className={"grid w-full justify-centser"}>*/}
              {/*  <h2 className={"text-sm text-gray-600 -mt-4"}>Last used shipping address</h2>*/}

              {/*  <p className={"text-gray-900"}>*/}
              {/*    {user?.address?.split(",").map((line, idx) =>*/}
              {/*      <p key={idx}>{line}</p>,*/}
              {/*    )}*/}
              {/*  </p>*/}
              {/*</div>*/}
              {/*<Input id={"address"}*/}
              {/*       label={"Address"}*/}
              {/*       value={values.address}*/}
              {/*       onChange={handleChange("address")}*/}
              {/*/>*/}


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
