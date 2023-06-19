import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { Database } from "../../types/supabase";
import { SupaClient } from "../../utils/supabase";

export const getNotes = createAsyncThunk<any, void, { rejectValue: any }>(
  "/notes/getNotes",
  async (_payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("notes").select(
        "*,User(id,first_name,prof_image),subjects(sub_code,sub_name)"
      );
      const data = response.data;
      if (response.error) return rejectWithValue(response.error);
      return fulfillWithValue(data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const postNotes = createAsyncThunk<
  any,
  {
    title: string;
    unitNo: string;
    unitName: string;
    subCode: string;
    fileUrl: string;
    semester: string;
  },
  { rejectValue: any }
>(
  "/notes/postNotes",
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await SupaClient.from("notes").insert({
        title: payload.title,
        unit_no: payload.unitNo,
        unit_name: payload.unitNo,
        branch_name: "CSE",
        sem_no: payload.semester,
        usersId: "b03f5fb9-7892-42dd-af35-e67af6f4b51e",
        sub_code: payload.subCode,
        file_url: payload.fileUrl,
        dislikes: 0,
        likes: 0,
      });
      if (response.error) return rejectWithValue(response.error);
      return fulfillWithValue(true);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export type Notes = Database["public"]["Tables"]["notes"]["Row"] & {
  User: Pick<
    Database["public"]["Tables"]["User"]["Row"],
    "id" | "first_name" | "prof_image"
  >;
  subjects: Pick<
    Database["public"]["Tables"]["subjects"]["Row"],
    "sub_code" | "sub_name"
  >;
};

const NotesAdapter = createEntityAdapter<Notes>({
  selectId: (notes) => notes.id,
});

export const NotesSlice = createSlice({
  name: "notes",
  initialState: NotesAdapter.getInitialState({
    isPending: false,
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNotes.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        NotesAdapter.setMany(state, action.payload);
      });
  },
});

export const NotesSelector = NotesAdapter.getSelectors<RootState>(
  (state) => state.notes
);
