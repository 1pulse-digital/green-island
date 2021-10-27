import React, { useState } from "react";
import Link from "next/link";
import { SmallButton } from "./button";
import { Input } from "./input";
import { subscribeToMailer } from "../lib/api";
import { toast } from "react-hot-toast";

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

  const handleSubscribe = async () => {
    try {
      await subscribeToMailer(values.email);
      setValues({ ...values, email: "" });
      toast.success("You are now subscribed");
    } catch (e) {
      console.error(`Could not subscribe: ${e.message ? e.message : e.toString()}`);
      toast.error(`Something went wrong, we could add you to our subscriber list`, { icon: "😞️" });
    }
  };

  return (
    <div
      className="grid gap-4 p-10 text-center text-white md:justify-items-center md:grid-cols-10 md:text-left md:p-20 font-karla bg-primary">
      {/* Subscribe */}
      <div className={"md:col-span-4 xl:col-span-3 grid gap-4 mb-4"}>
        <p className={"text-lg "}>
          Sign up for our monthly newsletter
        </p>
        {/* This is a copy paste of input component because of label color issues */}
        <div>
          {/* Copy input component to override styles*/}
          <Input
            id={"subscriber-email"}
            label={"Email"}
            value={values.email}
            onChange={handleChange("email")}
            labelClassName={"peer-focus:text-white"}
          />
        </div>

        <SmallButton color={"secondary"} onClick={handleSubscribe}>
          Subscribe
        </SmallButton>
      </div>

      {/* Shop & My Account */}
      <div className={"md:col-span-2"}>
        <Link href={"/shop"}>
          <a
            className="font-medium duration-300 hover:text-secondary">
            Shop
          </a>
        </Link>
        <ul className="">
          <li>
            <Link href={"/my-account"}>
              <a
                className="duration-300 hover:text-secondary">
                My Account
              </a>
            </Link>
          </li>
          {/* TODO: Where should this point to? */}
          {/*<li>*/}
          {/*  <Link href={"/shop?"}>*/}
          {/*    <a className="duration-300 hover:text-secondary">*/}
          {/*      COVID-19 Kit*/}
          {/*    </a>*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </div>

      {/* About & Contact Us & Blogs */}
      <ul className="md:col-span-2">
        <li>
          <Link href={"/about"}>
            <a
              className="duration-300 hover:text-secondary">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <a
              className="duration-300 hover:text-secondary whitespace-nowrap">
              Contact Us
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/blogs"}>
            <a
              className="duration-300 hover:text-secondary whitespace-nowrap">
              Blogs
            </a>
          </Link>
        </li>
      </ul>

      {/* Follow us Section */}
      <div className="font-medium tracking-wide text-white md:col-span-2">
        <p className={""}>Follow us</p>

        <div className={"justify-center flex gap-4"}>
          {/* FIXME: Facebook */}
          <SocialIcon href={"https://www.facebook.com/ThePerfectHealthPractice/" } >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </SocialIcon>

          {/* FIXME: Instagram */}
          <SocialIcon href={"https://www.instagram.com/perfecthealthpractice/"}>
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
