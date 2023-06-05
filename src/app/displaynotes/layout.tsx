"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../hooks";

import { useEffect } from "react";
import { fetchDisplaynotes, filternotes } from "@/store/displaynotes.slice";

interface props{
    children:React.ReactNode     
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchDisplaynotes())},[])
  useEffect(()=>{dispatch(filternotes())},[])
    return (
      
        <div>{children}</div>
   
    );
  }