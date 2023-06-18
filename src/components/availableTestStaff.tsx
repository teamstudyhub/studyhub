import React from 'react'

interface tcardProps{
    title1:string,
    Conducted_on:string,
    Remaining_days:string,
    Students_attempted: string,
    
    
}


export default function Availabe_Test({title1, Conducted_on , Remaining_days,Students_attempted}:tcardProps  )  {
  return (
    <div className="bg-white rounded-md flex flex-col gap-3 shadow-lg border border-gray-700 p-6 w-[340px] h-[300px] overflow-y-auto overflow-x-hidden">
   <div className="bg-white rounded-md shadow-lg border border-gray-400 p-1 w-[285px] h-[133px]">
      <p className="text-black text-center mb-3 mt-1"style={{ fontSize: '17px' }}><b>{title1}</b></p>
      <p className="text-black  px-2 mt-1"style={{ fontSize: '13px' }}>Conducted on - {Conducted_on} </p>
      <p className="text-black  px-2 mt-1"style={{ fontSize: '13px' }}>Remaining days - { Remaining_days}  </p>
      <p className="text-black text-right font-bold  mt-1"style={{ fontSize: '14px' }}>Students attempted - {Students_attempted} </p>
    </div>

    <div className="bg-white rounded-md shadow-lg border border-gray-400 p-1 w-[285px] h-[133px]">
      <p className="text-black text-center mb-3 mt-1"style={{ fontSize: '17px' }}><b>{title1}</b></p>
      <p className="text-black  px-2 mt-1"style={{ fontSize: '13px' }}>Conducted on - {Conducted_on} </p>
      <p className="text-black  px-2 mt-1"style={{ fontSize: '13px' }}>Remaining days - { Remaining_days}  </p>
      <p className="text-black text-right font-bold  mt-1"style={{ fontSize: '14px' }}>Students attempted - {Students_attempted} </p>
    </div>

    
    </div>
    
  )
}

