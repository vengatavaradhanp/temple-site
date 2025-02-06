import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface AnandhanamState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: AnandhanamState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const anandhanam = createAsyncThunk(
  "anandhanam/anandhanamSlice",
  async (params:string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/api/v1/event/${params}`;
    const response = await callFetch(url, option);
    console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const anandhanamSlice = createSlice({
  name: "anandhanam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(anandhanam.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(anandhanam.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(anandhanam.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default anandhanamSlice.reducer;
