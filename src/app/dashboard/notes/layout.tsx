"use client";
import { NotesSelector } from "@/store/displaynotes.slice";
import { useAppDispatch } from "../../../../utils/hooks";
import { useAppSelector } from "@/store/index";
import { getNotes } from "@/store/notes.slice";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const dispatch = useAppDispatch();
  const notesIds = useAppSelector((state) => state.notes.ids);

  if (notesIds.length == 0) dispatch(getNotes());

  return <div>{children}</div>;
}
