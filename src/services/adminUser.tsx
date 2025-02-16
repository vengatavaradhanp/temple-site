import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface adminuserContentState {
  data: any;
  header: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: adminuserContentState = {
  data: [],
  header: "",
  status: "idle",
  error: null,
  loading: false,
};

export const adminuserContent = createAsyncThunk(
  "contact/contactSlice",
  async (params: string) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/contact/${params}`;

    console.log("url", url);
    const response = await callFetch(url, option);
    console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const adminuserSlice = createSlice({
  name: "adminuser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminuserContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(adminuserContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(adminuserContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default adminuserSlice.reducer;
