"use client"
import { useAppSelector } from "../../store";


export default function Page() {
  const Fav = useAppSelector((state) => state.Favourites.data) as [];
  return (<>
    <div className="w-1/2 h-full border border-slate-400 relative overflow-hidden">
    <h1>Favourites</h1>
    </div>
    </>
  );
}
