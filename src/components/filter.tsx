import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const Filter = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-black shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Filters
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%7%_/_35%)_0px_10px_38px-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px-15px] focus:outline-none">
        <Dialog.Title className="text-black m-0 text-[17px] font-medium">
         Filters
        </Dialog.Title>
        <Dialog.Description className="text-black mt-[10px] mb-5 text-[15px] leading-normal">
          Enter the subject name and subject code to apply filter.
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-black w-[90px] text-right text-[15px]" htmlFor="Subject">
            Subject_

          </label>
          <input
            className="text-black shadow-blackA9 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="Subject"
            defaultValue="operating System"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-black w-[90px] text-right text-[15px]" htmlFor="Subject_code">
            Subject_code
          </label>
          <input
            className="text-black shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="Subject_code"
            defaultValue="20CS40Tp"
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="text-black shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none  focus:shadow-[0_0_0_2px] focus:outline-none">
              Apply
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-black hover:bg-violet4  border-teal-400 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center hover:from-[#00E18F] hover:to-[#3EB489] hover:text-white"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Filter;
