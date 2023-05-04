import { configureStore } from "@reduxjs/toolkit";
import { useSelector,useDispatch } from "react-redux";

export const store =configureStore({
    reducer:{}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector= useSelector<RootState>

type DispatchFunc = () => AppDispatch;
export const useAppDispatch:DispatchFunc= useDispatch;
