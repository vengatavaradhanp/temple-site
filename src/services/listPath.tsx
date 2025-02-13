import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface listpathContentState {
  data: any;
  header: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: listpathContentState = {
  data: [],
  header: "",
  status: "idle",
  error: null,
  loading: false,
};

export const listpathContent = createAsyncThunk(
  "listpath/listpathSlice",
  async () => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/article/all-articles`;

    console.log("url", url);
    const response = await callFetch(url, option);
    console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const listpathSlice = createSlice({
  name: "listpath",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listpathContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(listpathContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(listpathContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default listpathSlice.reducer;
