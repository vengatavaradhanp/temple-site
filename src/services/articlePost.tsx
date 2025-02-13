import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface ArticalPostState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: ArticalPostState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const ArticalPostbyID = createAsyncThunk(
  "ArticalPostid/ArticalPostIDSlice",
  async (params: number) => {
    const option = {
      method: "POST",
    };

    const url = `${API_URL}/article/article_create/${params}`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const articalPost = createSlice({
  name: "articalsid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ArticalPostbyID.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(ArticalPostbyID.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(ArticalPostbyID.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default articalPost.reducer;
