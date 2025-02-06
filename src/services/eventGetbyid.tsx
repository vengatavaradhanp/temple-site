import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface EventState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: EventState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const eventbyID = createAsyncThunk(
  "eventid/eventIDSlice",
  async (params:number) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/events/event/${params}`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const eventIDSlice = createSlice({
  name: "eventid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(eventbyID.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(eventbyID.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(eventbyID.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default eventIDSlice.reducer;
