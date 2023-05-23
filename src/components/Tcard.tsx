import React from 'react'

interface tcardProps{
    title:string,
    staff:string,
    date:string,
    duration:string,
    
}


export default function Tcard({title,staff,date,duration}:tcardProps  )  {
  return (
    <div className="bg-white rounded-md flex shadow-lg border border-gray-700 p-6 w-[340px] h-[458px] overflow-y-auto overflow-x-hidden">
   <div className="bg-white rounded-md  shadow-lg border border-gray-400 p-1 w-[285px] h-[128px]">
      <p className="text-black text-center mb-3 mt-1"style={{ fontSize: '17px' }}><b>{title}</b></p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Created by - {staff} </p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Conduction date and time - {date}  </p>
      <p className="text-black px-2 mt-1"style={{ fontSize: '11px' }}>Duration - {duration}. </p>
    </div>
    </div>
    
  )
}

