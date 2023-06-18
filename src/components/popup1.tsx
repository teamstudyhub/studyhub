import { useState } from "react";

        export default function Popup1() {
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
                    Sign up
                </button>
            </div>
    
 {showModal ? (
                <><div
                    className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                    id="my-Sign up"
                    onClick={() => setShowModal(false)}
                ></div><div
                    className="relative  mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
                >
                        <div className="mt-3 text-center">
                            <div
                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                            >
                                <svg
                                    className="h-6 w-6 text-emerald-600"
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
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Account Created Successfully!</h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    you may proceed to sign in
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">

                                <button
                                    id="Sign in-btn"
                                    className="px-4 py-2 bg-emerald-500 text-green text-base font-medium rounded-md w-full shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    onClick={() => setShowModal(false)}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div><div className="mt-3 text-center"></div><div
                        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                    >
                        <svg
                            className="h-6 w-6 text-emeralds-600"
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
                    </> 
 ) : null}
    
    </>
    )
}
