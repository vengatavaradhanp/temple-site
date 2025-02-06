import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface photoContentState {
  data: any;
  header:string,
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: photoContentState = {
  data: [],
  header:'',
  status: "idle",
  error: null,
  loading: false,
};

export const photoContent = createAsyncThunk(
  "photo/photoSlice",
  async (params:string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/api/v1/media-time/${params}`;
    console.log("url",url)
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(photoContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(photoContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(photoContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default photoSlice.reducer;
