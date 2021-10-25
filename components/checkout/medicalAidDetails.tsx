import React from "react";
import { Input } from "../input";
import { MedicalAidDetailsType } from "../../types/medicalAid";

export interface MedicalAidDetailsProps {
  values: MedicalAidDetailsType;
  handleChange: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MedicalAidDetails = (props: MedicalAidDetailsProps) => {
  const { values, handleChange } = props;

  return (
    <div className={"bg-white p-10 "}>
      <p className={"text-2xl font-semibold"}>
        Medical Aid Details
      </p>
      <div className={"grid gap-8 mt-4"}>
        <Input
          id={"medical-aid"}
          label={"Medical aid provider "}
          onChange={handleChange("provider")}
          value={values.provider}
        />

        <Input
          id={"scheme-name"}
          label={"Scheme name "}
          onChange={handleChange("scheme_name")}
          value={values.scheme_name}
        />

        <Input
          id={"membership-number"}
          label={"Membership number "}
          onChange={handleChange("membership_number")}
          value={values.membership_number}
        />
        <Input
          id={"main-member"}
          label={"Main member"}
          onChange={handleChange("main_member")}
          value={values.main_member}
        />
      </div>
    </div>
  );
};
