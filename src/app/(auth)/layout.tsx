"use client"

import React from 'react'
import login from '../../../public/loginbg.png' 

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
  
    return (
       
        
        <main className="w-full h-full flex gap-0">
            <section className=" flex flex-1 bg-[url('/leftsection.png')] bg-cover bg-no-repeat h-full w-1/2 shadow-sm"></section>
            <section className="flex flex-1 bg-[url('/rightsection.png')] bg-cover bg-no-repeat h-full w-full  items-center justify-center ">{children}</section></main>
       
    );
  }
  