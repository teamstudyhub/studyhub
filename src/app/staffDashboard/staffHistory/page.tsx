"use client"

import Stcard from "@/components/Stcard";


export default function Page() {
  

  return (<>
    <div className="text-center mt-4 font-bold text-[25px]">
    <h1>Test History</h1>
    </div>
    <div><h2 className="font-bold px-12 mt-8 text-[22px]">Tests created by you</h2></div>
    <div className="px-12 mt-4"><Stcard title={"Data structures with python"} staff={"Pankaja"} date={"09/06/2023"} duration={"90 minutes"}/></div>
    </>
  );
}