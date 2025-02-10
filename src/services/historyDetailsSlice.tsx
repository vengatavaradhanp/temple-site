import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface HistoryDetailsState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: HistoryDetailsState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const getHistoryDetails = createAsyncThunk(
  "history/detailsSlice",
  async (params: any) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/history/history${params}`;
    const response = await callFetch(url, option);
    return response;
  }
);

// Create slice
const historyDetailsSlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryDetails.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(getHistoryDetails.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(getHistoryDetails.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default historyDetailsSlice.reducer;
