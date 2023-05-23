import React from 'react'

const FCard = () => {
  return (
    
    <div className="bg-white shadow-lg border border-gray-500  p-3 w-[199px] h-[260px]">
      <img className="mx-auto" src="https://media.istockphoto.com/id/1225433311/vector/student-studying-online.jpg?s=612x612&w=0&k=20&c=0BNXEH6v91IOz_cwgvut7nUMiwkC-Rn3QDcPxSOYkSQ=" alt="Card Image" />
      
      <p className="text-black text-center" style={{ fontSize: '14px' }}><b>Unlimited revision</b><br></br></p>
    
      <p className="text-gray-900 text-justify " style={{ fontSize: '12px' }}>
Revising and retaining concept is key to a better performance in test. You can revise the lessons as many times as you like.</p>
    </div>
    
  )
}

export default FCard