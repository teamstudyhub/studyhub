import { Notes } from "@/store/notes.slice";
import Image from "next/image";
import React from "react";
import {
  AiOutlineComment,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineUser,
} from "react-icons/ai";
import moment from "moment";

export default function NotesCard({ feed }: { feed: Notes }) {
  return (
    <div className="bg-white w-full h-full rounded-md overflow-hidden border border-slate-300 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md">
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
                {feed.title}
              </h1>{" "}
              <span className="text-slate-600">·</span>{" "}
              <span className="text-sm text-slate-500">
                {moment(new Date(feed.uploaded_date!)).fromNow()}
              </span>
            </div>
            <span className="text-sm text-slate-500">
              {feed.User.first_name}
            </span>
          </div>
        </div>
        <div className="flex justify-between py-3 px-2">
          <div className="flex gap-1 items-center">
            <button className="flex justify-center items-center h-8 w-8 transition-all duration-300 hover:bg-slate-200 rounded-full">
              <AiOutlineLike className="text-xl text-slate-800" />
            </button>
            <span className="font-medium text-slate-500">0</span>
          </div>
          <div className="flex gap-1 items-center">
            <button className="flex justify-center items-center h-8 w-8 transition-all duration-300 hover:bg-slate-200 rounded-full">
              <AiOutlineDislike className="text-xl text-slate-800" />
            </button>
            <span className="font-medium text-slate-500">0</span>
          </div>
          <div className="flex gap-1 items-center">
            <button className="flex justify-center items-center h-8 w-8 transition-all duration-300 hover:bg-slate-200 rounded-full">
              <AiOutlineComment className="text-xl text-slate-800" />
            </button>
            <span className="font-medium text-slate-500">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
