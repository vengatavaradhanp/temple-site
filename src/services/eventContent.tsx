import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface EventContentState {
  data: any;
  header:string,
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: EventContentState = {
  data: [],
  header:'',
  status: "idle",
  error: null,
  loading: false,
};

export const eventContent = createAsyncThunk(
  "event/eventSlice",
  async (params:string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/api/v1/event/${params}`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(eventContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(eventContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        // state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(eventContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default eventSlice.reducer;
