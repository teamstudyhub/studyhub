"use client"
import { NotesSelector, uploadnotes } from "@/store/displaynotes.slice";
import { useAppDispatch } from "../../../utils/hooks";
import { useAppSelector } from "../../store";

export default function Page() {
  const dispatch = useAppDispatch();
    const DNotes = useAppSelector((state)=>NotesSelector.selectAll) as [];
  return (
    <div className="w-1/2 h-full border border-slate-600 relative overflow-hidden">
    <button onClick={()=>{
      dispatch(uploadnotes())
    }}>Load note</button>
    {
      DNotes?.map((note:any)=>{
        return (
          <div key={note.id}>
            {note.title}
          </div>
        )
      })
    }
    </div>
  );
}
