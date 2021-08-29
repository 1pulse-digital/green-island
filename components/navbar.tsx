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
import Button from "./button";

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
    <Popover className="w-full bg-white shadow-md ">
      {({ open }) => (
        <div
          className="grid grid-cols-3 w-full py-2 px-4 sm:px-6 lg:px-8">

          {/* Menu wrapper */}
          <div className={"my-auto"}>
            {/* Mobile menu */}
            <div className="lg:hidden">
              {/* Mobile menu button */}
              <Popover.Button
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
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
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                  <div
                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div className="-mr-2">
                          <Popover.Button
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-indigo-700">
                            Sign up
                          </a>
                        </Link>

                        <p className="mt-6 text-center text-base font-medium text-gray-500">
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
            <nav className="hidden w-full py-2 lg:flex gap-x-6 text-base text-primary">
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
          <div className="flex items-center justify-end gap-x-4">
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
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
                <Menu.Items
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active && "bg-blue-500"}`}
                        href="/account-settings"
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <Button className={"h-20"} color={"secondary"} onClick={logout}>Sign out</Button>
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
