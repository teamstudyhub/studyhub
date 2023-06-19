"use client";
import { store } from "@/store/index";
import { useAppDispatch } from "../../../utils/hooks";

import { useEffect } from "react";
import {
  fetchDisplaynotes,
  filternotes,
  uploadnotes,
} from "@/store/displaynotes.slice";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDisplaynotes());
  }, []);
  // useEffect(() => {
  //   dispatch(filternotes());
  // }, []);
  // useEffect(() => {
  //   dispatch(uploadnotes());
  // }, []);
  return <div>{children}</div>;
}
