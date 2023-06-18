/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="fixed top-16 w-56  text-right">
      <Menu as="div" className="relative inline-block text-left items-center justify-center">
        <div>
          <Menu.Button className="inline-flex w-12 h-12  justify-center rounded-full bg-black bg-opacity-20  text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img
            className="h-full w-full rounded-full"
              src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="border rounded border-solid border-[#00E18F]"
              style={{ borderTopWidth: "10px" }}
            >
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-900 text-sm  border-b-2 border-b-[#00E18F] w-full`}
                  >
                    My Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-900 text-sm border-b-2 border-b-[#00E18F] w-full`}
                  >
                    Reset Password
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-900 text-sm border-b-2 border-b-[#00E18F] w-full`}
                  >
                    Help
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-900 text-sm  w-full`}
                  >
                    Delete Account
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}