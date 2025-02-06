import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface AllVideosCollectionState {
  data: any;
  header:string,
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: AllVideosCollectionState = {
  data: [],
  header:'',  
  status: "idle",
  error: null,
  loading: false,
};

export const videosallCollection = createAsyncThunk(
  "allvideos/videosallSlice",
  async () => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/media/all-videos`;
    const response = await callFetch(url, option);
    // console.log("all-videos+++++++++", response);
    return response;
  }
);

// Create slice
const videosallSlice = createSlice({
  name: "allvideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(videosallCollection.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(videosallCollection.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(videosallCollection.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default videosallSlice.reducer;
