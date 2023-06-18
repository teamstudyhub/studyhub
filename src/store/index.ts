import { configureStore } from "@reduxjs/toolkit";
import { useSelector,useDispatch } from "react-redux";
import { TestsSlice } from "./test.slice";
import FavSlice from "./favourites.slice";
import QPSlice from "./questionpaper.slice";
import DisplayNotesSlice from "./displaynotes.slice";
import ReviewSlice from "./reviews.slice";
import { searchSlice } from "./stafftesthistory1.slice";
import DisplaytestsresultsSlice from "./displaytestresult.slice";

export const store =configureStore({
    reducer:{
        [TestsSlice.name]: TestsSlice.reducer,
        [FavSlice.name]: FavSlice.reducer,
        [QPSlice.name]:QPSlice.reducer,
        [DisplayNotesSlice.name]:DisplayNotesSlice.reducer,
        [ReviewSlice.name]:DisplayNotesSlice.reducer,
        [searchSlice.name]:searchSlice.reducer,
        [DisplaytestsresultsSlice.name]:DisplaytestsresultsSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector= useSelector<RootState>

type DispatchFunc = () => AppDispatch;
export const useAppDispatch:DispatchFunc= useDispatch;
