import React from "react";
import useRouter from "next/router";
import Link from "next/link";

export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <div className="bg-gray-500">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6 bg-red-800 justify-items-end  ">
          <div className="md:max-w-md lg:col-span-2 bg-gray-900">
            <span className="text-base font-medium tracking-wide text-white">
              Sign up for our monthly newsletter
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email Address"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4  ml-32 space-x-8">
            <div>
              <p className="font-medium tracking-wide text-white">Shop</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Shop Account
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    COVID-19 Kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-white">
                Practice info
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Follow us
                <a
                  href="/"
                  className="text-white-500 transition-colors duration-300 hover:text-teal-accent-400 flex py-4 space-x-3"
                >
                  <a
                    href="/"
                    className="text-white-500 transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-white">
            © 2021 Perfect Health Practice • Sitemap • Privacy Policy
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <p className="text-sm text-white">
                Developed and design by 1Pulse Digital
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
