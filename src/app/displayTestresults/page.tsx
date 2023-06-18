"use client"
import { useAppSelector } from "../../store";

export default function Page() {
    const Displayresult = useAppSelector((state) => state.Displaytestsresults.data) as [];
  return (<>
    <div className="w-1/2 h-full border border-slate-600 relative overflow-hidden">
    <h1>Display test results</h1>
    </div>
    </>
  );
}
