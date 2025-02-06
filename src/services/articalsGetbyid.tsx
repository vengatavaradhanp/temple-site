import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface ArticalsState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: ArticalsState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const articalsbyID = createAsyncThunk(
  "articalsid/articalsIDSlice",
  async (params:number) => {
    const option = {
      method: "GET",
    };
    
    const url = `${API_URL}/article/article/${params}`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const articalsIDSlice = createSlice({
  name: "articalsid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(articalsbyID.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(articalsbyID.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(articalsbyID.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default articalsIDSlice.reducer;
