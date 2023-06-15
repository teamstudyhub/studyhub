"use client"

import { useState } from "react";
import { AiFillDislike, AiFillHeart, AiFillLike, AiOutlineComment, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";


interface favcard {
  subject: string
  teacher: string
  likes: number
  dislikes: number
}




export default function Page({ subject, teacher, likes, dislikes }: favcard) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }

    }

  };

  const handleDislikeClick = () => {
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
    } else {
      setDislikeCount(dislikeCount + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    }
  };
  return (
    <>
      <div className="ml-[50px] mt-[50px] font-bold text-xl w-[400px] ">
        Notes
        <div className="flex flex-col px-[15px] py-[15px] bg-white">
          <div className="flex flex-row border-2 border-gray-300 px-[5px] py-[5px] mt-[3px]">
            <div className="bg-[url('/pdf.jpeg')] bg-cover h-[50px] w-[40px] "></div>
            <div className="flex flex-col gap-1 ml-[5px]">
              <div className="text-[15px] font-bold">{subject = "Data structure with python"}</div>
              <div className="text-[10px] text-gray-500 "> Uploaded by {teacher = "Pankaja"}</div>
              <div className="flex flex-row ">
                <button onClick={handleLikeClick} className="outline-none">
                  {isLiked ? (
                    <AiFillLike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineLike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{likeCount}</span>
                <button onClick={handleDislikeClick} className="outline-none">
                  {isDisliked ? (
                    <AiFillDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{dislikeCount}</span>
                <AiOutlineComment className="text-black text-base cursor-pointer mr-[5px]" />
                <span className="text-black text-sm font-sans ">5</span>

                
              </div>
              
            </div>
            <div className="flex flex-col gap-2 ml-[100px]">
                <AiFillHeart color="red" />
                <BiShareAlt color="#3EB489" />
            </div>
          </div>

          <div className="flex flex-row border-2 border-gray-300 px-[5px] py-[5px]">
            <div className="bg-[url('/pdf.jpeg')] bg-cover h-[50px] w-[40px] "></div>
            <div className="flex flex-col gap-1 ml-[5px]">
              <div className="text-[15px] font-bold">{subject = "Data structure with python"}</div>
              <div className="text-[10px] text-gray-500 "> Uploaded by {teacher = "Pankaja"}</div>
              <div className="flex flex-row ">
                <button onClick={handleLikeClick} className="outline-none">
                  {isLiked ? (
                    <AiFillLike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineLike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{likeCount}</span>
                <button onClick={handleDislikeClick} className="outline-none">
                  {isDisliked ? (
                    <AiFillDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{dislikeCount}</span>
                <AiOutlineComment className="text-black text-base cursor-pointer mr-[5px]" />
                <span className="text-black text-sm font-sans ">5</span>

                
              </div>
              
            </div>
            <div className="flex flex-col gap-2 ml-[100px]">
                <AiFillHeart color="red" />
                <BiShareAlt color="#3EB489" />
            </div>
          </div>

          <div className="flex flex-row border-2 border-gray-300 px-[5px] py-[5px]">
            <div className="bg-[url('/pdf.jpeg')] bg-cover h-[50px] w-[40px] "></div>
            <div className="flex flex-col gap-1 ml-[5px]">
              <div className="text-[15px] font-bold">{subject = "Data structure with python"}</div>
              <div className="text-[10px] text-gray-500 "> Uploaded by {teacher = "Pankaja"}</div>
              <div className="flex flex-row ">
                <button onClick={handleLikeClick} className="outline-none">
                  {isLiked ? (
                    <AiFillLike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineLike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{likeCount}</span>
                <button onClick={handleDislikeClick} className="outline-none">
                  {isDisliked ? (
                    <AiFillDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{dislikeCount}</span>
                <AiOutlineComment className="text-black text-base cursor-pointer mr-[5px]" />
                <span className="text-black text-sm font-sans ">5</span>

                
              </div>
              
            </div>
            <div className="flex flex-col gap-2 ml-[100px]">
                <AiFillHeart color="red" />
                <BiShareAlt color="#3EB489" />
            </div>
          </div>

          <div className="flex flex-row border-2 border-gray-300 px-[5px] py-[5px]">
            <div className="bg-[url('/pdf.jpeg')] bg-cover h-[50px] w-[40px] "></div>
            <div className="flex flex-col gap-1 ml-[5px]">
              <div className="text-[15px] font-bold">{subject = "Data structure with python"}</div>
              <div className="text-[10px] text-gray-500 "> Uploaded by {teacher = "Pankaja"}</div>
              <div className="flex flex-row ">
                <button onClick={handleLikeClick} className="outline-none">
                  {isLiked ? (
                    <AiFillLike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineLike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{likeCount}</span>
                <button onClick={handleDislikeClick} className="outline-none">
                  {isDisliked ? (
                    <AiFillDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{dislikeCount}</span>
                <AiOutlineComment className="text-black text-base cursor-pointer mr-[5px]" />
                <span className="text-black text-sm font-sans ">5</span>

                
              </div>
              
            </div>
            <div className="flex flex-col gap-2 ml-[100px]">
                <AiFillHeart color="red" />
                <BiShareAlt color="#3EB489" />
            </div>
          </div>

          <div className="flex flex-row border-2 border-gray-300 px-[5px] py-[5px]">
            <div className="bg-[url('/pdf.jpeg')] bg-cover h-[50px] w-[40px] "></div>
            <div className="flex flex-col gap-1 ml-[5px]">
              <div className="text-[15px] font-bold">{subject = "Data structure with python"}</div>
              <div className="text-[10px] text-gray-500 "> Uploaded by {teacher = "Pankaja"}</div>
              <div className="flex flex-row ">
                <button onClick={handleLikeClick} className="outline-none">
                  {isLiked ? (
                    <AiFillLike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineLike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{likeCount}</span>
                <button onClick={handleDislikeClick} className="outline-none">
                  {isDisliked ? (
                    <AiFillDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  ) : (
                    <AiOutlineDislike className="text-black text-base cursor-pointer mr-[5px]" />
                  )}
                </button>
                <span className="text-black text-sm mr-[5px] font-sans">{dislikeCount}</span>
                <AiOutlineComment className="text-black text-base cursor-pointer mr-[5px]" />
                <span className="text-black text-sm font-sans ">5</span>

                
              </div>
              
            </div>
            <div className="flex flex-col gap-2 ml-[100px]">
                <AiFillHeart color="red" />
                <BiShareAlt color="#3EB489" />
            </div>
          </div>


        </div>
      </div>
    </>
  )
}