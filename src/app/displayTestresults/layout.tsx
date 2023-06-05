"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../hooks";

import { useEffect } from "react";
import { fetchDisplaytestsresults } from "@/store/displaytestresult.slice";

interface props{
    children:React.ReactNode     
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchDisplaytestsresults())},[])
    return (
      
        <div>{children}</div>
   
    );
  }