"use client"
import React, { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { FaFilePdf } from 'react-icons/fa';

interface CardProps {
  title: string;
  likes: number;
  dislikes: number;
  comments: number;
}

const Card: React.FC<CardProps> = ({ title, likes, dislikes, comments }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <><div className='text-3xl px-16 p-10'><h1><b>Favourite Notes</b></h1></div>
    <div className='h-10 p-20 py-5'>
          <div className='mx-[20px] flex flex-col gap-3 items-center px-[10px] py-[20px] w-[600px] h-[700px] bg-white  border-[1px] border-gray-600 drop-shadow-xl rounded-lg'>
              <div className="bg-white rounded-md p-2  border-[1px] border-gray-300 shadow-lg w-96">
                  <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-4xl mr-2" />
                          <div>
                              <h3 className="text-black text-lg">{title}</h3>
                              <h5 className="text-base">Uploaded by Pankaja</h5>
                          </div>
                      </div>
                      <button onClick={handleHeartClick} className="outline-none mx-2">
                          {isHeartFilled ? (
                              <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
                          ) : (
                              <AiFillHeart className="text-gray-500 text-2xl cursor-pointer" />
                          )}
                      </button>
                  </div>
                  <div className="flex items-center mt-1">
                      <AiOutlineLike className="text-gray-500 text-base cursor-pointer mr-2 ml-11" />
                      <span className="text-black">{likes}</span>
                      <AiOutlineDislike className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{dislikes}</span>
                      <AiOutlineComment className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{comments}</span>
                  </div>
              </div>

              <div className="bg-white rounded-md p-2  border-[1px] border-gray-300 shadow-lg w-96">
                  <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-4xl mr-2" />
                          <div>
                              <h3 className="text-black text-lg">{title}</h3>
                              <h5 className="text-base">Uploaded by Pankaja</h5>
                          </div>
                      </div>
                      <button onClick={handleHeartClick} className="outline-none mx-2">
                          {isHeartFilled ? (
                              <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
                          ) : (
                              <AiFillHeart className="text-gray-500 text-2xl cursor-pointer" />
                          )}
                      </button>
                  </div>
                  <div className="flex items-center mt-1">
                      <AiOutlineLike className="text-gray-500 text-base cursor-pointer mr-2 ml-11" />
                      <span className="text-black">{likes}</span>
                      <AiOutlineDislike className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{dislikes}</span>
                      <AiOutlineComment className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{comments}</span>
                  </div>
              </div>

              <div className="bg-white rounded-md p-2  border-[1px] border-gray-300 shadow-lg w-96">
                  <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-4xl mr-2" />
                          <div>
                              <h3 className="text-black text-lg">{title}</h3>
                              <h5 className="text-base">Uploaded by Pankaja</h5>
                          </div>
                      </div>
                      <button onClick={handleHeartClick} className="outline-none mx-2">
                          {isHeartFilled ? (
                              <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
                          ) : (
                              <AiFillHeart className="text-gray-500 text-2xl cursor-pointer" />
                          )}
                      </button>
                  </div>
                  <div className="flex items-center mt-1">
                      <AiOutlineLike className="text-gray-500 text-base cursor-pointer mr-2 ml-11" />
                      <span className="text-black">{likes}</span>
                      <AiOutlineDislike className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{dislikes}</span>
                      <AiOutlineComment className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{comments}</span>
                  </div>
              </div>

              <div className="bg-white rounded-md p-2  border-[1px] border-gray-300 shadow-lg w-96">
                  <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-4xl mr-2" />
                          <div>
                              <h3 className="text-black text-lg">{title}</h3>
                              <h5 className="text-base">Uploaded by Pankaja</h5>
                          </div>
                      </div>
                      <button onClick={handleHeartClick} className="outline-none mx-2">
                          {isHeartFilled ? (
                              <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
                          ) : (
                              <AiFillHeart className="text-gray-500 text-2xl cursor-pointer" />
                          )}
                      </button>
                  </div>
                  <div className="flex items-center mt-1">
                      <AiOutlineLike className="text-gray-500 text-base cursor-pointer mr-2 ml-11" />
                      <span className="text-black">{likes}</span>
                      <AiOutlineDislike className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{dislikes}</span>
                      <AiOutlineComment className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{comments}</span>
                  </div>
              </div>

              <div className="bg-white rounded-md p-2  border-[1px] border-gray-300 shadow-lg w-96">
                  <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-4xl mr-2" />
                          <div>
                              <h3 className="text-black text-lg">{title}</h3>
                              <h5 className="text-base">Uploaded by Pankaja</h5>
                          </div>
                      </div>
                      <button onClick={handleHeartClick} className="outline-none mx-2">
                          {isHeartFilled ? (
                              <AiFillHeart className="text-red-500 text-2xl cursor-pointer" />
                          ) : (
                              <AiFillHeart className="text-gray-500 text-2xl cursor-pointer" />
                          )}
                      </button>
                  </div>
                  <div className="flex items-center mt-1">
                      <AiOutlineLike className="text-gray-500 text-base cursor-pointer mr-2 ml-11" />
                      <span className="text-black">{likes}</span>
                      <AiOutlineDislike className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{dislikes}</span>
                      <AiOutlineComment className="text-gray-500 text-base cursor-pointer mr-2 ml-3" />
                      <span className="text-black">{comments}</span>
                  </div>
              </div>

          </div>
      </div></>
  );
};

export default Card;

