import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";

export const fetchFavourites = createAsyncThunk<
  any,
  void,
  {
    rejectValue: {
      msg: string;
    };
  }
>(
  "/Favourites/fetchFavourites",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("favourites")
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
export  const FavSlice = createSlice({
    name: "Favourites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchFavourites.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(fetchFavourites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchFavourites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.msg;
      });
    }})
    export default FavSlice