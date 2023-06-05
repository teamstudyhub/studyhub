"use client"
import { useAppSelector } from "../../store";

export default function Page() {
    const DNotes = useAppSelector((state) => state.Displaynotes.data) as [];
  return (<>
    <div className="w-1/2 h-full border border-slate-600 relative overflow-hidden">
    <h1>Display notes</h1>
    </div>
    </>
  );
}
