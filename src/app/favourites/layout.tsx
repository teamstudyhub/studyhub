"use client"
import { store } from "@/store/index";
import { useAppDispatch } from "../../../utils/hooks";

import { useEffect } from "react";
import { fetchFavourites } from "@/store/favourites.slice";

interface props{
    children:React.ReactNode
}

export default function RootLayout({ children }:props) {
  
  const dispatch= useAppDispatch()
  useEffect(()=>{dispatch(fetchFavourites())},[])
    return (
      
        <div>{children}</div>
   
    );
  }