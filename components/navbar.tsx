import Link from "next/link";

import Image from "next/image";
import logo from "../images/logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ShoppingCart } from "./shoppingCart";
import { ProductWishlist } from "./ProductWishlist";
import { useAuthContext } from "../contexts/authContext";
import cn from "classnames";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";

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

export const Navbar = () => {
  const { user, isLoading, logout } = useAuthContext();
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <Popover className="z-30 w-full bg-white shadow-md lg:px-20">
      {({ open }) => (
        <div
          className="grid grid-cols-3 py-2 px-4 w-full sm:px-6 lg:px-8">

          {/* Menu wrapper */}
          <div className={"my-auto"}>
            {/* Mobile menu */}
            <div className="lg:hidden">
              {/* Mobile menu button */}
              <Popover.Button
                className="inline-flex justify-center items-center p-2 text-gray-400 rounded-md hover:text-white focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:outline-none hover:bg-secondary">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>

              {/* Mobile menu panel */}
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
                  className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right">
                  <div
                    className="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
                    <div className="px-5 pt-5 pb-6">
                      <div className="flex justify-between items-center">
                        <div className="-mr-2">
                          <Popover.Button
                            className="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          {navigationItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    <div className="py-6 px-5 space-y-6">
                      <div>
                        <Link href={"/register"}>
                          <a
                            href="#"
                            className="flex justify-center items-center py-2 px-4 w-full text-base font-medium text-white bg-gray-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700">
                            Sign up
                          </a>
                        </Link>

                        <p className="mt-6 text-base font-medium text-center text-gray-500">
                          Existing customer?{" "}
                          <Link href={"/login"}>
                            <a
                              className="text-indigo-600 hover:text-indigo-500">
                              Sign in
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>

            {/* Desktop menu */}
            <nav className="hidden gap-x-6 py-2 w-full text-base lg:flex text-primary">
              {/* Render all the navigationItems as <Link /> components */}
              {navigationItems.map((item, idx) => {
                return (
                  <Link key={idx} href={item.href}>
                    <a className="font-medium hover:font-bold w-[70px]">
                      {item.name}
                    </a>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* LOGO */}
          <div className={"mx-auto"}>
            <Image
              className={cn({ "animate-pulse": isLoading })}
              alt={"Perfect Health Practice logo"}
              src={logo}
            />
          </div>

          {/* Right hand menu items */}
          <div className="flex gap-x-4 justify-end items-center">
            <ShoppingCart />
            <ProductWishlist />

            {/* Not logged in */}
            {!user && !isLoginPage && (
              // TODO: Replace this with a <Link /> component not <a />
              <button
                className={"hidden lg:block whitespace-nowrap  items-center px-8 justify-center  py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-primary  hover:bg-secondary"}
                onClick={() => router.push("/login")}
                color={"primary"}>
                Sign in
              </button>
            )}

            {/* Logged in */}
            {user && (

              // <button
              //   className={"hidden lg:block whitespace-nowrap  items-center px-8 justify-center  py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-primary hover:bg-secondary"}
              //   onClick={logout}
              //   color={"secondary"}>
              //   Sign out
              // </button>
              <Menu as="div" className="relative z-20">
                <Menu.Button>
                  <span className="sr-only">Open user menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </Menu.Button>
                <Menu.Items
                  className="grid absolute right-0 gap-2 py-4 mt-2 w-48 bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={"/my-account"}>
                        <a
                          className={cn("px-2 py-1  hover:bg-gray-100 cursor-pointer", { "bg-gray-300": active })}
                        >
                          Account settings
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <div onClick={logout} className={"px-2 py-1 hover:bg-gray-100 cursor-pointer"}>
                      <span>Sign out</span>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            )}

          </div>
        </div>
      )}
    </Popover>
  );
};
