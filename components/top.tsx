import React from "react";
import Image from "next/image";
import facebookPic from "../images/facebook.png";
import twitterPic from "../images/twitter.png";

export const Top = () => {
  return (
    <div
      className={
        "  bg-gray-900 relative pt-6 px-4 sm:px-6 lg:px-8 flex justify-end "
      }>
      <Image src={facebookPic} height="20px" width="20px" alt="facebook" />
      <Image src={twitterPic} height="20px" width="20px" alt="twitter" />
    </div>
  );
};
