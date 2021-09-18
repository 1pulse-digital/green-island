import React, { useState } from "react";
import Link from "next/link";
import { SmallButton } from "./button";

export interface FooterProps {
}

interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}

const SocialIcon = (props: SocialIconProps) => {
  return (
    <Link href={props.href}>
      <a
        href={props.href}
        className="flex py-4 space-x-3 transition-colors duration-300 text-white-500 hover:text-teal-accent-400">
        {props.children}
      </a>
    </Link>
  );
};

export const Footer = (props: FooterProps) => {
  const [values, setValues] = useState({
    email: "",
  });
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div
      className="grid grid-cols-1 py-10 px-10 md:grid-cols-2 md:px-20 lg:grid-cols-3 xl:grid-cols-4 row-gap-4 font-karla bg-primary">
      <div className={""}>
        <p className={"  text-white text-lg pb-2"}>
          Sign up for our monthly newsletter
        </p>
        <div className={"grid gap-4 p-4"}>
          {/* This is a copy paste of input component because of label color issues */}
          <div className={"relative"}>
            <input
              id={"email"}
              type={"email"}
              placeholder={"Email"}
              className="w-full h-10 placeholder-transparent text-gray-900 disabled:text-gray-600 rounded border-gray-300 focus:ring-0 focus:outline-none peer focus:border-secondary"
              value={values.email}
              onChange={handleChange("email")}
            />
            <label
              htmlFor={"email"}
              className="absolute left-2 -top-5 text-sm text-gray-600 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:text-gray-200 peer-focus:-top-5 peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div>
            <SmallButton
              color={"secondary"}
              onClick={() => alert(("The computer says no!"))}>
              Subscribe
            </SmallButton>
          </div>
        </div>

      </div>

      <div>
        <p className="font-medium text-white cursor-pointer hover:text-secondary">
          Shop
        </p>
        <ul className="">
          <li>
            <a
              href="/"
              className="text-white transition-colors duration-300 cursor-pointer hover:text-secondary">
              Shop Account
            </a>
          </li>
          <li>
            <Link href={"/shop"}>
              <a
                className="text-white transition-colors duration-300 cursor-pointer hover:text-secondary">
                All Products
              </a>
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="text-white transition-colors duration-300 cursor-pointer hover:text-secondary">
              COVID-19 Kit
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="mt-2">
          <li>
            <a
              href="/about"
              className="text-white transition-colors duration-300 cursor-pointer hover:text-secondary">
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white transition-colors duration-300 cursor-pointer hover:text-secondary">
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="text-white transition-colors duration-300 cursor-pointer hover:text-secondary">
              Blogs
            </a>
          </li>
        </ul>
      </div>

      <div className="font-medium tracking-wide text-white">
        <p>Follow us</p>

        <div className={"flex gap-4"}>
          <SocialIcon href={"/"}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </SocialIcon>
          <SocialIcon href={"/"}>
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path
                d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </SocialIcon>

        </div>
      </div>
    </div>
  );
};
