import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SupaClient } from "../../utils/supabase";

interface InitialStateProps {
  data: any[];
  isLoading: boolean;
  error: string | null | undefined;
}

interface Test {
  id: number;
}

const initialState: InitialStateProps = {
  data: [],
  isLoading: false,
  error: null,
};

export const searchSlice = createSlice({
    name: 'staffHistory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(listtests.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(listtests.fulfilled, (state, {payload}) => {
          
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(listtests.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });
        builder.addCase(studentsList.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(studentsList.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(studentsList.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });
        builder.addCase(filter.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        builder.addCase(filter.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.data = payload;
        })
        builder.addCase(filter.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload?.msg;
        });



    },
  });

  export const listtests = createAsyncThunk<
  any,
  void,
  //{staffid:string},
  {
    rejectValue: {
      msg: string;
    };
  }
>("/staffhistory/listtests",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('test_details')
        .select('*')
        .eq('usersId', `c839fbdd-f6dd-4d37-a3e5-313eb241bd51`); 

        const data = response.data;
        console.log("staff history",data)
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );
  export const studentsList = createAsyncThunk<
  any,
  void,
  //{testid: string},

  {
    rejectValue: {
      msg: string;
    };
  }
>("/staffhistory/studentsList",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('student_test_details')
        .select('*')
        .eq('test_id','9a38b3f8-7572-45fb-a7dc-2de7fb81a5fd'); 
        //.eq('test_id','{payload.testid}'); 
        const data = response.data;
        console.log('student list',data)
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );

  export const filter = createAsyncThunk<
  any,
  void,
  //{subcode:string, string, semester:string},

  {
    rejectValue: {
      msg: string;
    };
  }
>("/staffhistory/filter",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        const response = await SupaClient.from('test_details')
        .select('*')
        .or('sem_no.eq.6,sub_code.eq.20CS23P')//,'sub_code.eq.20CS23P')
      
        //.eq('sem','{payload.sem}').and('sub_code','{payload.subcode}'); 
        const data = response.data;
        console.log("filter", data)
        return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );
  /*("/searchSlice/testData",
    async ( payload, { fulfillWithValue, rejectWithValue } ) => {
      try {
        //USE GROUP BY QUERY, MANOJ SIR WILL HELP YOU HERE
        //const response = await SupaClient.from('student_test_details')
        //.select('*')
        //
        //const data = response.data;
        //return fulfillWithValue(data);
      } catch (e) {
        return rejectWithValue({ msg: "Something went wrong !" });
      }          
      }
  );
*/