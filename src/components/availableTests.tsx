"use client"
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from "react-use";
import { TbClipboardList } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci"
import Link from "next/link";

export default function Example() {
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  const handleButtonClick = () => {
  
  };

  return (
    <div className='flex flex-row mx-5  my-10 mb-14 h-[250px] text-black border-4 bg-white border-gray-400 px-4 py-4 overflow-scroll'> 
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
              <Link href={'/dashboard/attendTest/test'}><button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
                  onClick={handleButtonClick}
                >
                 Take Test
                </button></Link>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    <div className="">
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
                <TbClipboardList className="text-black text-6xl justify-center ml-10" />
                </div>
                <div className="flex justify-start items-center">
                <CiCircleInfo className="text-black text-2xl justify- left ml-2 mb-20" />
                
                </div>
              </div>
              <div className="  flex-row justify-center">
                <button
                  className="text-teal-400 w-full border-2 border-teal-400 bg-gradient-to-t transition-all duration-75 font-medium hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white rounded-[4px] mb-4  mr-4"
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
    </div>
  );
}