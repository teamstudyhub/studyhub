import React from 'react'

interface tcardProps{
    title1:string,
    title2:string,
    staff:string,
    date:string,
    duration:string,
    
}


export default function Tcard({title1, title2, staff,date,duration}:tcardProps  )  {
  return (
    <div className="bg-white rounded-md flex flex-col gap-3 shadow-lg border border-gray-700 p-6 w-[340px] h-[300px] overflow-y-auto overflow-x-hidden">
   <div className="bg-white rounded-md  shadow-lg border border-gray-400 p-1 w-[285px] h-[128px]">
      <p className="text-black text-center mb-3 mt-1"style={{ fontSize: '17px' }}><b>{title1}</b></p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Created by - {staff} </p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Conduction date and time - {date}  </p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Duration - {duration}. </p>
    </div>

    <div className="bg-white rounded-md  shadow-lg border border-gray-400 p-1 w-[285px] h-[128px]">
      <p className="text-black text-center mb-3 mt-1"style={{ fontSize: '17px' }}><b>{title2}</b></p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Created by - {staff} </p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Conduction date and time - {date}  </p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Duration - {duration}. </p>
    </div>

    
    </div>
    
  )
}

