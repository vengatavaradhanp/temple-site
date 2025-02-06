import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface HeaderState {
  data: any;
  header:string,
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: HeaderState = {
  data: [],
  header:'',
  status: "idle",
  error: null,
  loading: false,
};

export const headerContent = createAsyncThunk(
  "header/headerSlice",
  async () => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/api/v1/menu-all`;
    console.log('urlurlurlurl',url)
    const response = await callFetch(url, option);
    return response;
  }
);

// Create slice
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(headerContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(headerContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(headerContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default headerSlice.reducer;
