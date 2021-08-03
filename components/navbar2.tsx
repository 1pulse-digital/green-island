import React from "react";

import Link from "next/link";
import avatar from "../images/avatar.png";
import cart from "../images/cart.png";
import wishlist from "../images/wishlist.png";
import Image from "next/image";
import logo from "../images/logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
//import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "Home",
    href: "/",

    icon: ChartBarIcon,
  },
  {
    name: "About",

    href: "/about",
    icon: CursorClickIcon,
  },
  {
    name: "Shop",

    href: "shop",
    icon: ShieldCheckIcon,
  },
  {
    name: "Blogs",

    href: "blogs",
    icon: ViewGridIcon,
  },
  {
    name: "Contact",

    href: "contact",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "",

    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar2() {
  return (
    <Popover className="relative bg-white z-20">
      {({ open }) => (
        <>
          <div className="max-w-8xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center  border-gray-100 py-2 md:justify-start md:space-x-20 ">
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="hidden md:flex space-x-10 z-10 text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <Link href="/">
                  <a>Home</a>
                </Link>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  <Link href="/blogs">
                    <a>Blog</a>
                  </Link>
                </a>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </Popover.Group>

              <div className="flex justify-center lg:w-0 lg:flex-1">
                <a href="#">
                  <Image src={logo} />
                </a>
              </div>
              <div className=" md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8 gap-x-8     ">
                <Image src={cart} alt="cart" />
                <Image src={wishlist} alt="logo" />

                <a
                  href="http://localhost:3000/logins"
                  className=" hidden sm:block md:ml-8 whitespace-nowrap inline-flex items-center px-8 justify-center  py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-primary  hover:bg-secondary"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <Image src={logo} alt="logo" />

                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/*  <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          /> */}
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
