import React from "react";

export const Error_404 = () => {
  return (
    <div className={"bg-gray-100 h-[700px]"}>
      <div className={"   h-[100px] py-32   "}>
        <p
          className={
            "grid-cols justify-items-center text-center py-10 text-9xl"
          }>
          404
        </p>
        <p className={"grid-cols  justify-items-center text-center text-2xl "}>
          The requested page cannot be found!!!{" "}
        </p>

        <div className=" flex items-center justify-center py-20   ">
          <a
            href="http://localhost:3000/shop"
            className="  whitespace-nowrap inline-flex items-center px-20 justify-center  py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-primary  hover:bg-secondary">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};
