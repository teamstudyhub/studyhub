"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../hooks";

import { useEffect } from "react";
import { fetchReviews } from "@/store/reviews.slice";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchReviews())},[])
    return (
      
        <div>{children}</div>
   
    );
  }