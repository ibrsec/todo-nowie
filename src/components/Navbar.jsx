"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthProvider";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

let navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Old Todos", href: "/oldtodos", current: false },
  { name: "Big Todos", href: "/bigtodos", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
 
export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const { currentUser, logOutGoogle } = useAuthContext();
  // console.log("currentUser", currentUser);
  // console.log("currentUser?.apiKey", currentUser?.apiKey);

const [activePath,setActivePath] = useState(pathName);

 
useEffect(()=> {
  setActivePath(pathName);
})
// console.log(activePath);
navigation = navigation.map(item => {

  if(item.href === activePath) {
    item.current = true;
  }else{
    item.current = false;
  }
  return item;


})


  return (
    <Disclosure as="nav" className="bg-violet-600" data-test="navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}

                {
              currentUser &&
              
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                data-test="navlinks-hamburger">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={()=>router.push("/")}>
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt="Your Company"
                    data-test="navbar-logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {currentUser &&
                      navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          data-test={"navbar-links-"+item.name}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <p>{currentUser && currentUser?.displayName}</p>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" data-test="navbar-profile">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={
                          currentUser?.photoURL || "/images/mockprofile.jpeg"
                        }
                        alt=""
                        width={40}
                        height={40}
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* {!JSON.parse(sessionStorage.getItem("nowieUser")) && ( */}
                      {!currentUser && (
                        <>
                          <MenuItem>
                            {({ focus }) => (
                              <Link
                                href="/login"
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                data-test="login-link"
                              >
                                Login
                              </Link>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ focus }) => (
                              <Link
                                href="/register"
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                data-test="register-link"
                              >
                                Register
                              </Link>
                            )}
                          </MenuItem>
                        </>
                      )}

                      {/* {JSON.parse(sessionStorage.getItem("nowieUser")) && ( */}
                      {currentUser && (
                        <MenuItem>
                          {({ focus }) => (
                            <p
                              className={classNames(
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={logOutGoogle}
                            >
                              Log out
                            </p>
                          )}
                        </MenuItem>
                      )}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {currentUser &&
                navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
