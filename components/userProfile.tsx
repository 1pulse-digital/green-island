import React, { useState } from "react";
import { Input } from "./input";
import { useAuthContext } from "../contexts/authContext";
import Button from "./button";
import cn from "classnames";
import { MedicalAidDetails } from "./checkout/medicalAidDetails";
import { MedicalAidDetailsType } from "../types/medicalAid";
import { OrderHistory } from "./orderHistory";


export const UserProfile = () => {
  const { user } = useAuthContext();

  const [
    selectedSection,
    setSelectedSection,
  ] = useState<"myDetails" | "orderHistory" | "medicalAidDetails" | "security">("myDetails");

  const [values, setValues] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
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

  const [credentials, setCredentials] = useState({
    oldPass: "",
    newPass: "",
    newPassConfirmation: "",
  });

  return (
    <div className={"bg-gray-100 font-karla text-primary px-12 xl:px-24"}>
      <h1 className={"text-4xl py-8"}>
        Edit Profile
      </h1>

      <div className={"grid md:grid-cols-3 gap-12 xl:gap-24"}>
        {/* Left column with profile menu */}
        <div>
          <div className={
            "flex flex-col gap-2 bg-gray-300 text-lg py-6"
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
            <button
              onClick={() => {
                setSelectedSection("security");
              }}
              className={cn(
                { "font-semibold": selectedSection === "security" },
                "hover:font-semibold text-left px-4",
              )}>Security
            </button>
          </div>
        </div>
        {/* Right column with form */}
        <div
          className={
            "md:col-span-2"
          }>
          {selectedSection === "myDetails" && (
            <div className="grid lg:grid-cols-2 gap-6 py-12 px-10 mr-24 w-full bg-white">
              <Input
                id={"first-name"}
                label={"First Name"}
                value={values.firstName}
                onChange={handleChange("firstName")}
              />
              <Input
                id={"last-name"}
                label={"Last Name"}
                value={values.lastName}
                onChange={handleChange("lastName")}
              />

              <Input
                id={"email"}
                label={"Email"}
                value={values.email}
                type={"email"}
                disabled
              />
              <Input id={"address"}
                     label={"Address"}
                     value={values.address}
                     onChange={handleChange("address")}
              />

              <div className="mx-auto col-span-full">
                <Button color={"primary"}>Update</Button>
              </div>
            </div>
          )}

          {selectedSection === "orderHistory" && (
            <div className="grid gap-6 py-12 px-10 mr-24 w-full bg-white">
              <OrderHistory />
            </div>
          )}

          {selectedSection === "security" && (
            <div className="grid lg:grid-cols-2 gap-6 py-12 px-10 mr-24 w-full bg-white">
              <Input
                id={"old-password"}
                label={"Old Password"}
                value={credentials.oldPass}
                type={"password"}
                onChange={(e) => setCredentials({ ...credentials, oldPass: e.target.value })}
              />
              <Input
                id={"new-password"}
                label={"New Password"}
                value={credentials.newPass}
                type={"password"}
                onChange={(e) => setCredentials({ ...credentials, newPass: e.target.value })}
              />

              <Input
                id={"confirm-new-password"}
                label={"Confirm New Password"}
                value={credentials.newPassConfirmation}
                onChange={(e) => setCredentials({ ...credentials, newPassConfirmation: e.target.value })}
                type={"password"}
              />
              <div className="mx-auto col-span-full">
                <Button color={"primary"}>Update</Button>
              </div>
            </div>
          )}

          {selectedSection === "medicalAidDetails" && (
            <div className="grid py-2 px-10 w-full bg-white">
              <MedicalAidDetails
                handleChange={handleMedicalAidDetailsChange}
                values={medicalAidDetails} />

              <div className="mx-auto col-span-full">
                <Button color={"primary"}>Update</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
