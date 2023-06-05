import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchDisplaynotes = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Displaynotes/fetchDisplaynotes",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("notes")
        .select("*")
        
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
export const filternotes = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Displaynotes/filternotes",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("notes")
        .select("*").eq('sub_code','20CS21P')
        
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
interface InitialStateProps {
    isLoading: boolean;
    error: null | string | undefined;
    data: any[];
   
  }
  
  const initialState: InitialStateProps = {
    data: [],
    isLoading: false,
    error: null,
    
  };
export  const DisplayNotesSlice = createSlice({
    name: "Displaynotes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchDisplaynotes.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchDisplaynotes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchDisplaynotes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
      builder.addCase(filternotes.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(filternotes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(filternotes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    }})
    export default DisplayNotesSlice