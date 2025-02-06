import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface ContactState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: ContactState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const contactDetails = createAsyncThunk(
  "contact/contactSlice",
  async (params:string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/contact/${params}`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactDetails.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(contactDetails.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(contactDetails.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default contactSlice.reducer;
