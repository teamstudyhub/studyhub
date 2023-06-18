"use client"
import { useAppSelector } from "../../store";


export default function Page() {
    const Tests = useAppSelector((state) => state.staffHistory.data) as [];

  return (<>
    <div className="w-1/2 h-full border border-slate-400 relative overflow-hidden">
    <h1> staff test history</h1>
    </div>
    </>
  );
}
