/* eslint-disable @next/next/no-img-element */
import React from "react";

const options = [
  {
    name: "Ningappa",
    avatar: "/assets/avatars/saul-tran.png",
    timestamp: "10 mins ago", // Add a timestamp property
  },
  {
    name: "Raksha",
    avatar: "/assets/avatars/dianne-russell.png",
    timestamp: "1 hour ago", // Add a timestamp property
  },
  {
    name: "Rajath",
    avatar: "/assets/avatars/cedric-green.png",
    timestamp: "2 days ago", // Add a timestamp property
  },
  {
    name: "Manoj",
    avatar: "/assets/avatars/cedric-green.png",
    timestamp: "3 days ago", // Add a timestamp property
  },
  {
    name: "Aka",
    avatar: "/assets/avatars/cedric-green.png",
    timestamp: "5 mins ago", // Add a timestamp property
  },
];

export default function Page() {
  return (
    <><>
    <h1 className="text-black font-bold">Comments</h1>
      </><div className="w-full max-w-lg bg-white border-2 border-gray-400  p-4 rounded-md">
              {options.map((user) => (
                  <div key={user.name} className="flex space-x-4 py-4">
                      <img
                          className="h-14 w-14 shrink-0 border border-gray-400 rounded-full"
                          src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png" />
                      <div>
                          <h4 className="text-black font-bold">
                              {user.name}
                              <span className="text-sm font-medium text-gray-400 ml-4">
                                  {user.timestamp}
                              </span>
                          </h4>


                          <p className="mt-2 text-sm font-medium text-black">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
                              hac porttitor.
                          </p>
                      </div>
                  </div>
              ))}
          </div></>
  );
}
