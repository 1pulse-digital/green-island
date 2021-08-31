import React from "react";
import Link from "next/link";
import Button from "./button";

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
        className="text-white-500 transition-colors duration-300 hover:text-teal-accent-400 flex py-4 space-x-3">
        {props.children}
      </a>
    </Link>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <div
      className="grid row-gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-10 md:px-20 font-karla bg-primary">
      <div className={""}>
        <p className={"  text-white text-lg pb-2"}>
          Sign up for our monthly newsletter
        </p>
        <form className="flex flex-wrap gap-4">
          <input
            placeholder="Email Address"
            required
            type="text"
            className="px-4 h-12 transition duration-200 bg-white rounded shadow-lg focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <div className={"block"}>
            <Button color={"secondary"}>Subscribe</Button>
          </div>
        </form>
      </div>

      <div>
        <p className="font-medium text-white cursor-pointer hover:text-secondary">
          Shop
        </p>
        <ul className="">
          <li>
            <a
              href="/"
              className="text-white transition-colors duration-300  cursor-pointer hover:text-secondary">
              Shop Account
            </a>
          </li>
          <li>
            <Link href={"/shop"}>
              <a
                className="text-white transition-colors duration-300  cursor-pointer hover:text-secondary">
                All Products
              </a>
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="text-white transition-colors duration-300  cursor-pointer hover:text-secondary">
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
              className="text-white transition-colors duration-300  cursor-pointer hover:text-secondary">
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white transition-colors duration-300  cursor-pointer hover:text-secondary">
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="text-white transition-colors duration-300  cursor-pointer hover:text-secondary">
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
