import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";


// Define the state interface
interface NoticeContentState {
  data: any;
  header:string,
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: NoticeContentState = {
  data: [],
  header:'',
  status: "idle",
  error: null,
  loading: false,
};

export const noticeContent = createAsyncThunk(
  "notice/noticeSlice",
  async () => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/contact/notice-board`;
    const response = await callFetch(url, option);
    // console.log("+++++++++", response);
    return response;
  }
);

// Create slice
const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(noticeContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(noticeContent.fulfilled, (state, action: any) => {
        state.data = action.payload?.data || action.payload;
        state.header = action.payload?.header || action.payload;
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(noticeContent.rejected, (state, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload || "Failed to fetch patient data";
      });
  },
});

export default noticeSlice.reducer;
