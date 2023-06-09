import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchReviews = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Reviews/fetchReviews",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("review")
        .select("*")
        
      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
export const postreview= createAsyncThunk<
  any,
  void,
 /* {
    id: string;
    content: string;
  },*/
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Reviews/postreview",
  async (payload, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const response = await SupaClient.from("review")
        .insert([
          {review_content:'very nice quality',user_id:'b8aad5e9-142b-4827-a281-501cb37832e0',notes_id:'8733aad3-0b83-43db-9e84-37b096d56dc2'}
        ]).select("*");
       
        //.single();
      const data = response.data;
      dispatch(postreview)
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
export  const ReviewSlice = createSlice({
    name: "Reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchReviews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    }})
    export default ReviewSlice