"use client"
import { useAppSelector } from "../../store";
import { TestsSlice, fetchTest } from "../../store/test.slice";
import { useCallback, useEffect, useState } from "react";
import { SupaClient } from "./../../../utils/supabase";
import { useParams } from "next/navigation";
import { useAppDispatch } from "./../../../hooks";
import { useSelector } from "react-redux";

export default function Page() {
    const Tests = useAppSelector((state) => state.Tests.data) as [];

  return (<>
    <div className="w-1/2 h-full border border-slate-400 relative overflow-hidden">
    <h1>repository</h1>
    </div>
    </>
  );
}
