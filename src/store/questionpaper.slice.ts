import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchQuestionpapers = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Questionpapers/fetchQuestionpapers",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("question_papers")
        .select("*")
        
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
export  const QPSlice = createSlice({
    name: "Questionpapers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchQuestionpapers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchQuestionpapers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchQuestionpapers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    }})
    export default QPSlice