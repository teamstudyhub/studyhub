import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchDisplaytestsresults = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Displaytestsresults/fetchDisplaytestsresults",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("student_test_details")
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
export  const DisplaytestsresultsSlice = createSlice({
    name: "Displaytestsresults",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchDisplaytestsresults.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchDisplaytestsresults.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchDisplaytestsresults.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    }})
    export default DisplaytestsresultsSlice