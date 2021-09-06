import React from "react";

export interface MedicalAidDetailsProps {

}

export const MedicalAidDetails = (props: MedicalAidDetailsProps) => {
  return (
    <div className={"bg-white  px-10  "}>
      <p className={"text-2xl font-semibold py-10"}>
        Medical Aid Details
      </p>
      <div className="grid grid-cols-1">
        <div className="relative">
          ID
          <input
            type="text"
            id="contact-form-name"
            className="lg:ml-[175px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
            placeholder="  "
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1">
        <div className="relative">
          Medical Aid
          <input
            type="text"
            id="contact-form-name"
            className=" lg:ml-[105px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
            placeholder="  "
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1">
        <div className="relative">
          Scheme Name
          <input
            type="text"
            id="contact-form-name"
            className="lg:ml-[85px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
            placeholder="  "
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1">
        <div className="relative">
          Membership Number
          <input
            type="text"
            id="contact-form-name"
            className="lg:ml-[35px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
            placeholder="  "
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1">
        <div className="relative">
          Main Member
          <input
            type="text"
            id="contact-form-name"
            className="lg:ml-[85px] border border-gray-700  flex-1 appearance-none   py-2 my-4 px-4 bg-white text-gray-700 placeholder-gray-400  "
            placeholder="  "
          />
        </div>
      </div>
    </div>
  );
};
