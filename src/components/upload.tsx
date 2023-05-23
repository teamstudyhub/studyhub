"use client"
import React, { useState } from 'react'
import { HiOutlineUpload } from 'react-icons/hi';

const Unotescard = () => {
    return (
      

<div className=" flex justify-center items-center text-black bg-white rounded-md  shadow-lg border border-gray-700 p-2 w-[140px] h-[150px]">
<div className="w-48 h-48" style={{ width: '7rem', height: '6rem' }}>
<div className="flex justify-center h-12  ">
        <HiOutlineUpload className="text-teal-400 cursor-pointer text-4xl"   />
        
    </div>
    <p className="items-center text-center text-gray-600  " style={{ fontSize: '10px' }}>Drag and drop file here to upload</p>
    <p className="items-center text-center text-gray-600  " style={{ fontSize: '10px' }}>or</p>
    <p className="items-center text-center text-gray-600  " style={{ fontSize: '10px' }}>Click here to browse files</p>
        </div>
      
        
</div>
   
   
   )
}
export default Unotescard