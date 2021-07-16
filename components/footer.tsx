import React from "react";
import Link from "next/link";
import home from "../pages/home";

export interface FooterProps {
  address?: string;
}
export const Footer = (props: FooterProps) => {
  return (
    <div
      className={
        "  bg-gray-600  text-white flex flex-row justify-between pt-20 pb-20 pl-32 pr-32"
      }
    >
      <div>{props.address}</div>
      <ul>
        <li>
          <Link href="/about">
            <a
              className={
                "font-medium text-white-500 hover:text-white-900 mx-5 "
              }
            >
              Shop Account
            </a>
          </Link>
        </li>

        <li>
          <Link href="/blog/hello-world">
            <a
              className={
                "font-medium text-white-500 hover:text-white-900 mx-5 "
              }
            >
              All Products{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a className={"font-medium text-white hover:text-white-900 mx-5 "}>
              Contact Us
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={"font-medium text-white hover:text-white mx-5 "}>
              Shop by Symptomps
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={
                "font-medium text-white-100 hover:text-white-900 mx-5 "
              }
            >
              COVID-19 Kit
            </a>
          </Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a
                className={
                  "font-medium text-white-500 hover:text-white-900 mx-5 "
                }
              >
                Contact Us
              </a>
            </Link>
            <li>
              <Link href="/">
                <a
                  className={
                    "font-medium text-white-500 hover:text-white-900 mx-5 "
                  }
                >
                  Blogs
                </a>
              </Link>
              <li>
                <Link href="/">
                  <a
                    className={
                      "font-medium text-white-500 hover:text-white-900 mx-5 "
                    }
                  >
                    FAQS
                  </a>
                </Link>
                <li>
                  <Link href="/">
                    <a
                      className={
                        "font-medium text-white-500 hover:text-white-900 mx-5 "
                      }
                    >
                      Privacy Policy
                    </a>
                  </Link>
                </li>
              </li>
            </li>
          </li>
        </ul>
      </div>

      <div>Follow Us</div>

      {/* <div>33 Highland Ave Bryanston Ext 8 Johannesburg South Africa</div>
      <div>Mon - Thurs:08:00 - 17:00 Fridays:08:00 - 13:00</div> */}
    </div>
  );
};
