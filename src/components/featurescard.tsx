import React from 'react'
interface FCardprops{
  content:string
  title:string
  image:string
}
const FCard = ({content,image,title}:FCardprops) => {
  return (
    
    <div className="bg-white drop-shadow-xl p-3 w-[199px] h-[320px] flex flex-col gap-2">
      <div className='h-[350px] '><img className="mx-auto my-auto h-full" src={image} alt="Card Image"  /></div>
      
      <div><p className="text-black text-center py-3" style={{ fontSize: '14px' }}><b>{title}</b><br></br></p></div>
    
      <p className="text-gray-900 text-justify " style={{ fontSize: '12px' }}>
       {content}</p>
    </div>
    
  )
}

export default FCard