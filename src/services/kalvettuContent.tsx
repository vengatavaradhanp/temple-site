import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface kalvettuContentState {
  data: any;
  header:string,
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: kalvettuContentState = {
  data: [],
  header:'',
  status: "idle",
  error: null,
  loading: false,
};

export const kalvettuContent = createAsyncThunk(
  "kalvettu/kalvettuSlice",
  async (params:string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/history/page-type/${params}`;
    console.log("url",url)
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const kalvettuSlice = createSlice({
  name: "kalvettu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(kalvettuContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(kalvettuContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(kalvettuContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default kalvettuSlice.reducer;
