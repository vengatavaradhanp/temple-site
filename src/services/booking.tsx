// filepath: /temple-site/temple-site/src/services/Booking.tsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL } from "../_main/routeConstant";

// Define the state interface
interface BookingState {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: BookingState = {
  data: [],
  status: "idle",
  error: null,
};

// Fetch all data (READ operation)
export const fetchBooking = createAsyncThunk(
  "Booking/fetchBooking",
  async () => {
    const option = {
      method: "GET",
    };
    const url = `${API_URL}/booking/get-all`;
    const response = await callFetch(url, option);
    return response;
  }
);

// Delete an item (DELETE operation)
export const deleteBookingItem = createAsyncThunk(
  "Booking/deleteBookingItem",
  async (id: number, { rejectWithValue }) => {
    const option = {
      method: "DELETE",
    };
    const url = `${API_URL}/booking/delete-booking/${id}`;
    try {
      const response = await callFetch(url, option);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return id; // Return id to delete it from state
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create item (CREATE operation)
export const createBookingItem = createAsyncThunk(
  "Booking/createBookingItem",
  async (newItem: any) => {
    const option = {
      method: "POST",
      body: JSON.stringify(newItem),
    };
    const url = `${API_URL}/booking/new-booking`;
    const response = await callFetch(url, option);
    return response;
  }
);

// Update item (UPDATE operation)
export const updateBookingItem = createAsyncThunk(
  "Booking/updateBookingItem",
  async (updatedItem: any) => {
    const option = {
      method: "PUT",
      body: JSON.stringify(updatedItem),
    };
    const url = `${API_URL}/booking/update-booking/${updatedItem.id}`;
    const response = await callFetch(url, option);
    return response;
  }
);

// Create slice
const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooking.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch data";
      })
      .addCase(deleteBookingItem.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(createBookingItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateBookingItem.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});

export default BookingSlice.reducer;
