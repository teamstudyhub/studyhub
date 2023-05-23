import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";
import { TbClipboardList } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci"

export default function Example() {
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  const handleButtonClick = () => {
    // Add your button click logic here
  };

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
            <div className="border-2 border-solid border-black rounded-md shadow-lg w-48 h-48 flex flex-col items-center justify-center">
              <p className="mt-1 text-lg font-medium text-black border-b-2 border-b-gray-500 w-44">
                Operating System
              </p>
              <div className="flex flex-grow justify-center items-center">
              <div className="flex justify-center grow items-center mr-2 ">
                <TbClipboardList className="text-black text-6xl justify- left ml-20" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="">
                <button
                  className="text-teal-400 border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4 ml-4"
                  onClick={handleButtonClick}
                >
                 Take Test
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}