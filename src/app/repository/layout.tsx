"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../utils/hooks";
import { fetchTest } from "@/store/test.slice";
import { useEffect } from "react";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchTest())},[])
    return (
      
        <div>{children}</div>
   
    );
  }