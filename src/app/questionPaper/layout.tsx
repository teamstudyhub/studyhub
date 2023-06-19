"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../utils/hooks";

import { useEffect } from "react";
import { fetchQuestionpapers } from "@/store/questionpaper.slice";

interface props{
    children:React.ReactNode     
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchQuestionpapers())},[])
    return (
      
        <div>{children}</div>
   
    );
  }