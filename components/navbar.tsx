import React from "react";
import home from "../pages/home";
import Image from "next/image";
import logo from "../images/logo.png";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className={" flex flex-wrap flex-row  bg-white-300"}>
      <div
        className={
          "font-medium text-white-500 uppercase hover:text-blue-900 mx-7  h-26 flex-auto pt-8 px-6   pb-3 space-x-12"
        }
      >
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About Us</a>
        </Link>

        <Link href="/blog/hello-world">
          <a>Shop</a>
        </Link>

        <Link href="/blog/hello-world">
          <a>Blog </a>
        </Link>

        <Link href="/blog/hello-world">
          <a>Contact</a>
        </Link>
      </div>

      <div className={" h-26 flex-auto pt-3 justify-center"}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={" h-26 flex-auto pt-5"}>
        <button
          type="button"
          className={
            "bg-transparent hover:bg-blue text-blue-dark font-semibold uppercase hover:text-white py-2 px-8 border border-black hover:border-blue rounded"
          }
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

// export default Navbar;
