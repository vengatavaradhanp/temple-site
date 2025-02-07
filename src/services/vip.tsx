import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface VipState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: VipState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const vip = createAsyncThunk(
  "vip/vipSlice",
  async (params: string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/contact/${params}`;
    const response = await callFetch(url, option);
    console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const vipSlice = createSlice({
  name: "vip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(vip.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(vip.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(vip.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default vipSlice.reducer;
