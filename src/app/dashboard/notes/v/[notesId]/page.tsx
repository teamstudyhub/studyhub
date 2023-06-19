"use client";
import { RootState, useAppSelector } from "@/store/index";
import { NotesSelector } from "@/store/notes.slice";
import moment from "moment";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  AiOutlineArrowLeft,
  AiOutlineComment,
  AiOutlineDislike,
  AiOutlineHeart,
  AiOutlineLike,
  AiOutlineUser,
} from "react-icons/ai";

export default function ViewNotesPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.notesId;
  const feed = useAppSelector((state) => NotesSelector.selectById(state, id));

  return (
    <div className="flex p-10 justify-center">
      <div className="bg-white shadow-md flex flex-col w-2/3">
        <div className="w-full px-10 flex border-b border-gray-300 py-4 items-center gap-3">
          <AiOutlineArrowLeft
            className="text-xl"
            onClick={() => router.back()}
          />{" "}
          <span className="text-xl">Notes</span>
        </div>
        <div>
          <div className="relative w-full h-[700px_!important]">
            <Image
              src={"/default-book-icon.png"}
              fill
              alt="default-book-icon"
            />
          </div>
          <div className="p-3">
            <div className="flex gap-2 items-center">
              {feed?.User.prof_image ? (
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
                  <h1 className="text-sm whitespace-nowrap text-slate-950 font-medium">
                    {feed?.title}
                  </h1>{" "}
                  <span className="text-slate-600">·</span>{" "}
                  <span className="text-sm text-slate-500">
                    {moment(new Date(feed?.uploaded_date!)).fromNow()}
                  </span>
                </div>
                <span className="text-sm text-slate-500">
                  {feed?.User.first_name}
                </span>
              </div>
            </div>
            <div className="py-2 px-5 flex items-center gap-3">
              <span className="bg-green-200 text-green-500 rounded-full px-2 py-1">Branch - {feed?.branch_name}</span>
              <span className="bg-green-200 text-green-500 rounded-full px-2 py-1">Sem - {feed?.sem_no}</span>
              <span className="bg-green-200 text-green-500 rounded-full px-2 py-1">Subject Code - {feed?.subjects.sub_code}</span>
              <span className="bg-green-200 text-green-500 rounded-full px-2 py-1">Subject - {feed?.subjects.sub_name}</span>
            </div>
            <div className="flex justify-end gap-5 py-3 px-2">
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
              <div className="flex gap-1 items-center">
                <button className="flex justify-center items-center h-8 w-8 transition-all duration-300 hover:bg-slate-200 rounded-full">
                  <AiOutlineHeart className="text-xl text-slate-800" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-row gap-[80px] ml-[50px] mt-[20px]">
        <div className="flex flex-col gap-3">
          <div className=" bg-[url('/os.png')] bg-cover bg-no-repeat h-[250px] px-[10px] border-2 border-gray-400 ">
            {" "}
            <FaShareAltSquare size="1.5rem" />{" "}
          </div>
          <div className="flex flex-row justify-between ">
            <h1 className="text-[20px]">OS Week 1 - 2022</h1>
            <h1 className="text-[10px] text-gray-500">
              {" "}
              Uploaded 1 month ago{" "}
            </h1>
          </div>

          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row gap-1 text-lg">
              <CgProfile size="2rem" /> Pankaja
            </div>
            <div className="flex flex-row gap-2">
              <AiFillLike size="1.5rem" color="#3EB489" />
              58
            </div>
            <div className="flex flex-row gap-2">
              <BiDislike size="1.5rem" />
              01
            </div>
            <div className="flex flex-row gap-2 text-lg items-center">
              <AiOutlineHeart size="1.5rem" color="#3EB489" />
              Add to favourites
            </div>
          </div>

          <div className="border-2 border-gray-700"></div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[15px]">04 comments</h1>
            <div className="border-2 border-gray-500 text-[15px] py-[10px] pl-[5px] bg-white">
              Add a comment
            </div>
          </div>
        </div>

        <div>
          <Comments />
        </div>
      </div> */
}
