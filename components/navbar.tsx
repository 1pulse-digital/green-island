import Link from "next/link";

import Image from "next/image";
import logo from "../images/logo.png";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ShoppingCart } from "./shoppingCart";
import { ProductWishlist } from "./productWishlist";
import { useAuthContext } from "../contexts/authContext";
import cn from "classnames";
import { useRouter } from "next/router";
import { SmallButton } from "./button";

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
    <div className={"z-30 relative h-[93px]"}>
      <Popover className="fixed w-full shadow-sm bg-white/80 backdrop-blur lg:px-10">
        {({ open }) => (
          <div className="grid w-full grid-cols-3 px-4 py-2 sm:px-6 lg:px-4">
            {/* Menu wrapper */}
            <div className={"my-auto"}>
              {/* Mobile menu */}
              <div className="lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:outline-none hover:bg-secondary">
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
                    className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform">
                    <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                      <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                          <div className="-mr-2">
                            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
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

                      <div className="px-5 py-6 space-y-6">
                        <div>
                            <a
                              href="https://robins-perfect-health.cliniko.com/bookings"
                              target={"_blank"}
                              rel="noreferrer"
                              className="flex items-center justify-center w-full px-4 py-2 mb-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-secondary hover:bg-primary">
                              Book an appointment
                            </a>
                          <Link href={"/register"}>
                            <a
                              href="#"
                              className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-secondary">
                              Sign up
                            </a>
                          </Link>

                          <p className="mt-6 text-base font-medium text-center text-gray-500">
                            Existing customer?
                            <Link href={"/login"}>
                              <a className="pl-1 text-secondary hover:text-indigo-500">
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
              <nav className="hidden w-full py-2 text-base gap-x-6 lg:flex text-primary">
                {/* Render all the navigationItems as <Link /> components */}
                {navigationItems.map((item, idx) => {
                  return (
                    <Link key={idx} href={item.href}>
                      <a
                        className={cn(
                          router.pathname === item.href
                            ? "font-bold"
                            : "font-medium",
                          "hover:font-bold w-[70px]"
                        )}>
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
                className={cn({ "animate-spin": isLoading })}
                alt={"Perfect Health Practice logo"}
                src={logo}
              />
            </div>

            {/* Right hand menu items */}
            <div className="flex items-center justify-end gap-x-2 sm:gap-x-4">
              <ShoppingCart />
              <ProductWishlist />

              {/* Not logged in */}
              {!user && !isLoginPage && (
                // TODO: Replace this with a <Link /> component not <a />
                <SmallButton
                  className={"hidden lg:block"}
                  color={"primary"}
                  onClick={() => router.push("/login")}>
                  Sign in
                </SmallButton>
              )}
              
              
                <a
                  href="https://robins-perfect-health.cliniko.com/bookings"
                  target={"_blank"}
                  rel="noreferrer"
                  className="items-center justify-center hidden px-4 py-2 text-base font-medium text-center text-white border border-transparent rounded-full shadow-sm lg:flex bg-secondary">
                  Book an appointment
                </a>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 grid w-auto gap-2 py-4 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href={"/my-account"}>
                          <a
                            className={cn(
                              "px-2 py-1  hover:bg-gray-100 cursor-pointer",
                              { "bg-gray-300": active }
                            )}>
                            Account settings
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    {user.role.name === "Admin" && (
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={"/product-manager"}>
                            <a
                              className={cn(
                                "px-2 py-1  hover:bg-gray-100 cursor-pointer",
                                { "bg-gray-300": active }
                              )}>
                              Manage products
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <div
                        onClick={logout}
                        className={
                          "px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        }>
                        <div>Sign out</div>
                        <div className={"text-sm text-gray-400"}>
                          ({user.email})
                        </div>
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              )}
            </div>
          </div>
        )}
      </Popover>
    </div>
  );
};
