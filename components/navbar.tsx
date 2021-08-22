import Link from "next/link";

import wishlist from "../images/wishlist.png";
import Image from "next/image";
import logo from "../images/logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ShoppingCart } from "./shoppingCart";
import { ProductWishlist } from "./ProductWishlist";
import { Button } from "./button";
import { useRouter } from "next/router";

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const MobileNavMenu = () => {};

const DesktopNavMenu = () => {};

export const Navbar = () => {
  const router = useRouter();

  return (
    <Popover className="relative bg-white z-20">
      {({ open }) => (
        <>
          {/* MAIN SECTION */}

          <div className="max-w-full px-4 sm:px-6 ">
            <div className="flex justify-between items-center border-gray-100 py-2 md:justify-start md:space-x-20 ">
              {/* MOBILE HAMBURGER MENU - WE STILL NEED TO MAKE THE NAVBAR WORK */}

              <div className="lg:hidden">
                <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              {/* DESKTOP MENU */}
              <nav className="hidden text-base lg:flex space-x-9 text-primary">
                {/* Render all the navigationItems as <Link /> components */}
                {navigationItems.map((item, idx) => {
                  return (
                    <Link key={idx} href={item.href}>
                      <a className="bg-yellow-300 font-medium hover:font-bold">
                        {item.name}
                      </a>
                    </Link>
                  );
                })}
              </nav>

              {/* LOGO */}

              <div className="flex justify-center  lg:w-0 lg:flex-1 md:w-0 md:flex-1">
                <a href="#">
                  <Image src={logo} />
                </a>
              </div>

              {/* SHOP MENU */}

              <div className="flex items-center justify-end sm:flex-1 lg:w-0 gap-x-8">
                <ShoppingCart />
                <ProductWishlist />

                <Image src={wishlist} alt="logo" />

                <Button
                  className="hidden md:block md:ml-6 whitespace-nowrap"
                  onClick={() => {
                    router.push("/logins");
                  }}
                  color="primary">
                  Sign in
                </Button>
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
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
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
                      {navigationItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
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
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-indigo-700">
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500">
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
};
