import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { SupaClient } from "../../utils/supabase";
import { Database } from "../../types/supabase";

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
        .select("*").eq('sub_code', '20CS21P')

      const data = response.data;
      console.log(data)
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue({ msg: "Something went wrong !" });
    }
  }
);
export const uploadnotes = createAsyncThunk<
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
  "/Displaynotes/uploadnotes",
  async (payload, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const response = await SupaClient.from("notes")
        .insert([
          { title: 'Python notes', dislikes: 10, likes: 20, limit_visibility: false, sem_no: '4', sub_code: '20CS24P', unit_name: 'Introduction to python', unit_no: '10', usersId: '430654c6-edcc-4fb9-81de-78b7ce600867', branch_name: 'CSE', file_url: 'https://drive.google.com/file/d/1BQuTqT0x_LO4ZPTr3eoEnrrqBr0LStsS/view?usp=drive_link' }
        ]).select("*");

      //.single();
      const data = response.data;
      dispatch(fetchDisplaynotes)
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
  isPosting: boolean;
}


type Note = Database["public"]["Tables"]["notes"]["Insert"];

const NotesEntityAdapter = createEntityAdapter<Note>({
  selectId: (note) => note.id!
})

export const DisplayNotesSlice = createSlice({
  name: "Displaynotes",
  initialState:NotesEntityAdapter.getInitialState<InitialStateProps>({
    isLoading:false,
    error:null,
    isPosting:false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDisplaynotes.fulfilled, (state, { payload }) => {
      NotesEntityAdapter.addMany(state,payload)
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
      NotesEntityAdapter.addMany(state,payload)
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
    builder.addCase(uploadnotes.fulfilled, (state, { payload }) => {
      state.isPosting = false;
      state.error = null;
      NotesEntityAdapter.upsertOne(state,payload)
    });
    builder.addCase(uploadnotes.pending, (state) => {
      state.isPosting = true;
      state.error = null;
    });
    builder.addCase(uploadnotes.rejected, (state, { payload }) => {
      state.isPosting = false;
      state.error = payload?.msg;
    });
  }
})
export default DisplayNotesSlice;

export const NotesSelector = NotesEntityAdapter.getSelectors()

