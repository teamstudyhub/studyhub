"use client"

import FrameComponent from "@/components/table";
import React from "react";


export default function Page() {
  

  return (
  <>
    <div className="text-center mt-4 font-bold text-[25px]">
    <h1>Test History</h1>
    </div>
    <div><h2 className="font-bold px-12 mt-8 text-[22px]">Test attempt details</h2></div>
    <div className="px-12"><FrameComponent/></div>
    </>
  );
}