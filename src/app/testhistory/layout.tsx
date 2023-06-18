"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../hooks";
import { fetchTest } from "@/store/test.slice";
import { useEffect } from "react";
import { filter, listtests, studentsList } from "@/store/stafftesthistory1.slice";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(listtests())},[])
  useEffect(()=>{dispatch(studentsList())},[])
  useEffect(()=>{dispatch(filter())},[])

    return (
      
        <div>{children}</div>
   
    );
  }