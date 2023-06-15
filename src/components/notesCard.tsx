"use client"
import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment, AiFillLike, AiFillDislike } from 'react-icons/ai'

 
interface notesprops{ 
  title1:string,  title2:string,  title3:string,  title4:string,  title5:string,   title6:string,  likes:number,dislikes:number
}

export default function Ncard({title1, title2, title3, title4, title5, title6, likes,dislikes}:notesprops)  {
  
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
    <div className="bg-white rounded-md flex shadow-lg border border-gray-700 p-6 w-[1000px] h-[140px] overflow-y-hidden overflow-x-auto">
      <div className="px-4">
        <div className="bg-white rounded-md shadow-lg border border-gray-300 p-1 w-[167px] h-[78px]">
          <p className="text-black text-center mt-1" style={{ fontSize: '17px' }}><b>{title1}</b></p>
          <div className="border-b border-gray-400 w-25 mx-auto mb-2 mt-2"></div>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleLikeClick} className="outline-none">
              {isLiked ? (
                <AiFillLike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineLike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{likeCount}</span>
            <button onClick={handleDislikeClick} className="outline-none">
              {isDisliked ? (
                <AiFillDislike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineDislike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{dislikeCount}</span>
            <AiOutlineComment className="text-black text-base cursor-pointer mr-2" />
            <span className="text-black text-sm font-sans ">5</span>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-md shadow-lg border border-gray-300 p-1 w-[167px] h-[78px]">
          <p className="text-black text-center mt-1" style={{ fontSize: '17px' }}><b>{title2}</b></p>
          <div className="border-b border-gray-400 w-25 mx-auto mb-2 mt-2"></div>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleLikeClick} className="outline-none">
              {isLiked ? (
                <AiFillLike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineLike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{likeCount}</span>
            <button onClick={handleDislikeClick} className="outline-none">
              {isDisliked ? (
                <AiFillDislike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineDislike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{dislikeCount}</span>
            <AiOutlineComment className="text-black text-base cursor-pointer mr-2" />
            <span className="text-black text-sm font-sans ">5</span>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-md shadow-lg border border-gray-300 p-1 w-[167px] h-[78px]">
          <p className="text-black text-center mt-1" style={{ fontSize: '17px' }}><b>{title3}</b></p>
          <div className="border-b border-gray-400 w-25 mx-auto mb-2 mt-2"></div>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleLikeClick} className="outline-none">
              {isLiked ? (
                <AiFillLike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineLike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{likeCount}</span>
            <button onClick={handleDislikeClick} className="outline-none">
              {isDisliked ? (
                <AiFillDislike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineDislike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{dislikeCount}</span>
            <AiOutlineComment className="text-black text-base cursor-pointer mr-2" />
            <span className="text-black text-sm font-sans ">5</span>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-md shadow-lg border border-gray-300 p-1 w-[167px] h-[78px]">
          <p className="text-black text-center mt-1" style={{ fontSize: '17px' }}><b>{title4}</b></p>
          <div className="border-b border-gray-400 w-25 mx-auto mb-2 mt-2"></div>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleLikeClick} className="outline-none">
              {isLiked ? (
                <AiFillLike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineLike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{likeCount}</span>
            <button onClick={handleDislikeClick} className="outline-none">
              {isDisliked ? (
                <AiFillDislike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineDislike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{dislikeCount}</span>
            <AiOutlineComment className="text-black text-base cursor-pointer mr-2" />
            <span className="text-black text-sm font-sans ">5</span>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-md shadow-lg border border-gray-300 p-1 w-[167px] h-[78px]">
          <p className="text-black text-center mt-1" style={{ fontSize: '17px' }}><b>{title5}</b></p>
          <div className="border-b border-gray-400 w-25 mx-auto mb-2 mt-2"></div>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleLikeClick} className="outline-none">
              {isLiked ? (
                <AiFillLike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineLike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{likeCount}</span>
            <button onClick={handleDislikeClick} className="outline-none">
              {isDisliked ? (
                <AiFillDislike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineDislike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{dislikeCount}</span>
            <AiOutlineComment className="text-black text-base cursor-pointer mr-2" />
            <span className="text-black text-sm font-sans ">5</span>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-md shadow-lg border border-gray-300 p-1 w-[167px] h-[78px]">
          <p className="text-black text-center mt-1" style={{ fontSize: '17px' }}><b>{title6}</b></p>
          <div className="border-b border-gray-400 w-25 mx-auto mb-2 mt-2"></div>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleLikeClick} className="outline-none">
              {isLiked ? (
                <AiFillLike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineLike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{likeCount}</span>
            <button onClick={handleDislikeClick} className="outline-none">
              {isDisliked ? (
                <AiFillDislike className="text-black text-base cursor-pointer mr-2" />
              ) : (
                <AiOutlineDislike className="text-black text-base cursor-pointer mr-2" />
              )}
            </button>
            <span className="text-black text-sm mr-4 font-sans">{dislikeCount}</span>
            <AiOutlineComment className="text-black text-base cursor-pointer mr-2" />
            <span className="text-black text-sm font-sans ">5</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

