import React from "react";
import useRouter from "next/router";
import Link from "next/link";
import Button from "./button";

export interface secondFooterProps {}

export const SecondFooter = (props: secondFooterProps) => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 pt-5  border-t border-white-800 sm:flex-row bg-primary px-10 md:px-20 lg:px-20 py-10">
        <p className="text-sm text-white flex ">
          ©2021 Perfect Health Practice |
          <div className={""}>
            <a
              href="http://localhost:3000/privacy "
              className=" py-4 px-2 cursor-pointer hover:text-secondary ">
              Privacy Policy |
            </a>
          </div>
          <div className={""}>
            <a href="http://localhost:3000/terms " className="  ">
              Terms and Conditions
            </a>
          </div>
        </p>
        <div className="text-left md:text-right ">
          <a
            href="/"
            className="text-white transition-colors duration-300 hover:text-teal-accent-400 text-right">
            <p className="text-sm text-white pt-5 md:pt-0 ">
              Developed and design by 1Pulse Digital
            </p>
            <p className="text-sm text-white">Photography by Dane Drevin</p>
          </a>
        </div>
      </div>
  );
};
