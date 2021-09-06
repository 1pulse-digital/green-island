import React, { useState } from "react";
import { Input } from "../input";

export interface MedicalAidDetailsProps {

}

export const MedicalAidDetails = (props: MedicalAidDetailsProps) => {
  const [values, setValues] = useState({
    medicalAid: "",
    schemeName: "",
    membershipNumber: "",
    mainMember: "",
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold"}>
        Medical Aid Details
      </p>
      <div className={"grid gap-8 mt-4"}>
        <Input
          id={"medical-aid"}
          label={"Medical aid provider "}
          onChange={handleChange("medicalAid")}
          value={values.medicalAid}
        />

        <Input
          id={"scheme-name"}
          label={"Scheme name "}
          onChange={handleChange("schemeName")}
          value={values.schemeName}
        />

        <Input
          id={"membership-number"}
          label={"Membership number "}
          onChange={handleChange("membershipNumber")}
          value={values.membershipNumber}
        />
        <Input
          id={"main-member"}
          label={"Main member"}
          onChange={handleChange("mainMember")}
          value={values.mainMember}
        />
      </div>
    </div>
  );
};
