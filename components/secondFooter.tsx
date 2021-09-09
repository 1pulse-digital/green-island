import React from "react";

export interface secondFooterProps {
}

export const SecondFooter = (props: secondFooterProps) => {
  return (
    <div
      className="grid grid-cols-1 py-10 px-10 pt-5 border-t sm:flex-row md:grid-cols-2 md:px-20 lg:px-20 border-white-800 bg-primary">
      <div className="flex text-sm text-white">
        ©2021 Perfect Health Practice |
        <div className={""}>
          <a
            href="http://localhost:3000/privacy "
            className="py-4 px-2 cursor-pointer hover:text-secondary">
            Privacy Policy |
          </a>
        </div>
        <div className={""}>
          <a href="http://localhost:3000/terms " className="">
            Terms and Conditions
          </a>
        </div>
      </div>
      <div className="text-left md:text-right">
        <a
          href="/"
          className="text-right text-white transition-colors duration-300 hover:text-teal-accent-400">
          <p className="pt-5 text-sm text-white md:pt-0">
            Developed and design by 1Pulse Digital
          </p>
          <p className="text-sm text-white">Photography by Dane Drevin</p>
        </a>
      </div>
    </div>
  );
};
