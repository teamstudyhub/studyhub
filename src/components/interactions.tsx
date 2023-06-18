import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";
import { AiFillHeart } from "react-icons/ai";

export default function Interactions() {
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  return (
    <div className="flex flex-col items-center py-16">
      <div className="h-52 w-52">
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="h-full w-full rounded-md bg-white shadow-lg flex flex-col justify-center items-center">
            <div className="border-2 border-solid border-black rounded-md shadow-lg w-48 h-48 flex flex-col items-center">
              <AiFillHeart className="text-teal-400 text-8xl" />
              <p className="mt-1 text-lg font-medium text-black">207</p>
              <p className="mt-1 text-sm text-center font-medium text-black">Students added your <br/> notes to favorites!</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}