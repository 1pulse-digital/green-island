import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import useRouter from "next/router";

import Link from "next/link";
import avatar from "../images/avatar.png";
import cart from "../images/cart.png";
import wishlist from "../images/wishlist.png";

export const Navbar = () => {
  return (
    <div className={" flex flex-wrap px-20"}>
      <div className={"font-normal text-white-500 flex-auto pt-8 px-6  "}>
        <div
          className={"inline-flex items-center justify-center text-primary "}
        >
          <div className={"pr-10"}>
            <a>Home</a>
          </div>
          <div className={"pr-10"}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>

          <div className={"pr-10"}>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </div>

          <div className={"pr-10"}>
            <Link href="/blogs">
              <a>Blog </a>
            </Link>
          </div>

          <div className={"pr-10"}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={" h-26 flex-auto pt-3 justify-center"}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={"flex px-10"}>
        <button
          type="button"
          className={
            "bg-primary text-white font-semibold rounded-full py-2 px-8 mt-8"
          }
        >
          Sign In
        </button>
        <div className={" h-26 flex-auto justify-center "}>
          <Image src={avatar} alt="logo" />
        </div>
        <div className={" h-26 flex-auto justify-center"}>
          <Image src={wishlist} alt="logo" />
        </div>
        <div className={" h-26 flex-auto justify-center"}>
          <Image src={cart} alt="logo" />
        </div>
      </div>
    </div>
  );
};

// export default Navbar;
