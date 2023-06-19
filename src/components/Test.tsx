import { Tests } from "@/store/tests.slice";
import { Button } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function Test({ feed }: { feed: Tests }) {
  return (
    <div className="bg-white w-full h-full rounded-md overflow-hidden border border-slate-300 cursor-pointer transition-all duration-200 hover:shadow-md">
      <div className="relative w-full h-52">
        <Image src={"/default-book-icon.png"} fill alt="default-book-icon" />
      </div>
      <div className="p-3">
        <div className="flex gap-2 items-center">
          {feed.User.prof_image ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={feed.User.prof_image} fill alt="avatar" />
            </div>
          ) : (
            <div className="h-10 w-10 rounded-full bg-slate-300 p-2">
              <AiOutlineUser className="h-full w-full text-slate-500" />
            </div>
          )}

          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-sm whitespace-nowrap w-20 truncate text-slate-950 font-medium">
                {feed.test_title}
              </h1>{" "}
              <span className="text-slate-600">·</span>{" "}
              <span className="text-sm text-slate-500">
                {moment(new Date(Date.now())).fromNow(true)}
              </span>
            </div>
            <span className="text-sm text-slate-500">
              {feed.User.first_name}
            </span>
          </div>
        </div>
        <div className="flex items-center w-full py-3 px-2">
          <Button color="success" variant="outlined" fullWidth>Attend</Button>
        </div>
      </div>
    </div>
  );
}
