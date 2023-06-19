"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../utils/hooks";

import { useEffect } from "react";
import { fetchReviews, postreview } from "@/store/reviews.slice";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchReviews())},[])
  useEffect(()=>{dispatch(postreview())},[])
    return (
      
        <div>{children}</div>
   
    );
  }