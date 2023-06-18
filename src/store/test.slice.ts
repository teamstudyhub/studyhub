import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchTest = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Tests/fetchTest",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("test_details")
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
export  const TestsSlice = createSlice({
    name: "Tests",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchTest.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchTest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchTest.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    }})
    export default TestsSlice