import React from "react";

import Image from "next/image";
import logo from "../images/logo.png";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div
      className={
        " justify-between items-center md:space-x-4 bg-white py-6 px-6 relative flex flex-wrap flex-row  bg-white-300 sm:text-center"
      }
    >
      <div>
        <svg
          className=" sm:hidden block w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div
        className={
          " hidden md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto md:bg-transparent p-6 md:p-0 text-white-500 uppercase hover:text-blue-900 mx-7  h-26 flex-auto pt-8 px-12   pb-3 space-x-12 "
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

      <div className={"sm:hidden block   h-26 flex-auto pt-5"}>
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
