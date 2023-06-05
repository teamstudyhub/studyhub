"use client"
import { useAppSelector } from "../../store";
import {} from "../../store/questionpaper.slice"


export default function Page() {
    const Qu = useAppSelector((state) => state.Questionpapers.data) as [];
  return (<>
    <div className="w-1/2 h-full border border-slate-600 relative overflow-hidden">
    <h1>QuestionPapers</h1>
    </div>
    </>
  );
}
