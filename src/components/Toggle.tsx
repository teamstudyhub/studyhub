// import { useState } from "react";
// import { Switch } from "@headlessui/react";

// export default function Toggle(): JSX.Element {
//   const [enabled, setEnabled] = useState(false);
//   return (
//     <Switch.Group as="div" className="flex items-center space-x-4">
//       <Switch
//         checked={enabled}
//         onChange={setEnabled}
//         className={`${
//           enabled ? "bg-white-" : "bg-gray-200"
//         } relative inline-flex w-14 shrink-0 cursor-pointer rounded-full py-0.5 px-[3px] transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-80 border-green`}
//       >
//         <span
//           aria-hidden="true"
//           className={`${
//             enabled ? "translate-x-[26px]" : "translate-x-0"
//           } pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
//         />
//       </Switch>
//     </Switch.Group>
//   );
// }


import { useState } from "react";

export default function Toggle(): JSX.Element {
  const [enabled, setEnabled] = useState(false);

  return (
    <label htmlFor="toggleTwo" className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          id="toggleTwo"
          className="sr-only"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <div
          className={`block h-8 w-14 rounded-full border  border-emerald-400 ${enabled ? "bg-white" : "bg-gray-200"}`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-black transition ${
            enabled ? "translate-x-[26px]" : "translate-x-0"
          }`}
        ></div>
        {!enabled && (
          <div className="absolute top-0 right-0 bottom-0 left-0 border-[linear-gradient(to right, #84fab0, #8fd3f4)] rounded-full pointer-events-none"></div>
        )}
      </div>
    </label>
  );
}
