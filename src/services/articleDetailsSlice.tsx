import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface ArticleDetailsState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: ArticleDetailsState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

export const getArticleDetails = createAsyncThunk(
  "article/detailsSlice",
  async (params: any) => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/article${params}`;
    const response = await callFetch(url, option);
    return response;
  }
);

// Create slice
const articleDetailsSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticleDetails.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(getArticleDetails.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(getArticleDetails.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default articleDetailsSlice.reducer;
