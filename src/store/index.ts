import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { NotesSlice } from "./notes.slice";
import { TestsSlice } from "./tests.slice";

export const store = configureStore({
  reducer: {
    // [TestsSlice.name]: TestsSlice.reducer,
    // [FavSlice.name]: FavSlice.reducer,
    // [QPSlice.name]: QPSlice.reducer,
    // [DisplayNotesSlice.name]: DisplayNotesSlice.reducer,
    // [ReviewSlice.name]: DisplayNotesSlice.reducer,
    // [searchSlice.name]: searchSlice.reducer,
    // [DisplaytestsresultsSlice.name]: DisplaytestsresultsSlice.reducer,
    [NotesSlice.name]: NotesSlice.reducer,
    [TestsSlice.name]: TestsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;