import { useState } from "react";

        export default function Popup3() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./public/tailwind.css" />
    </head>
</html>

    <div className="flex items-center justify-center h-60">
                <button
                    className="px-6 py-3 text-purple-100 bg-emerald-600 rounded-md"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Submit
                </button>
            </div>
    
 {showModal ? (
                <><div
                    className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                    id="my-Sign up"
                    onClick={() => setShowModal(false)}
                ></div><div
                    className="relative top-40 mx-auto p-20 border w-96 shadow-lg rounded-md bg-white"
                >
                        <div className="mt-3 text-center">
                            <div
                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500"
                            >
                                <svg
                                    className="h-6 w-6 text-white-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Submitted Successfully</h3>     
                        </div>  
                    </div>
                    </>
 ) : null}
    
    </>
    )
}
