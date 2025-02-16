import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface deleteArticleState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: deleteArticleState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const deleteArticle = createAsyncThunk(
  "deleteArticle/deleteArticleSlice",
  async (params: string) => {
    const option = {
      method: "DELETE",
    };
    const url = `${API_URL}/article/article_delete/${params}`;
    const response = await callFetch(url, option);
    console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const deleteArticleSlice = createSlice({
  name: "deleteArticle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteArticle.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(deleteArticle.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default deleteArticleSlice.reducer;
