import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface HomeBannerState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: HomeBannerState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const homeBanner = createAsyncThunk(
  "banner/homeSlice",
  async () => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/api/v1/banner-images`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const homeSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeBanner.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(homeBanner.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(homeBanner.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default homeSlice.reducer;
