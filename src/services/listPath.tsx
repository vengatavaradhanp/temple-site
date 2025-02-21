// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import callFetch from "../_main/fetch";
// import { API_URL, AUTH_TOKEN, TOKEN } from "../_main/routeConstant";

// // Define the state interface
// interface listpathContentState {
//   data: any;
//   header: string;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
//   loading: boolean;
// }

// // Initial state
// const initialState: listpathContentState = {
//   data: [],
//   header: "",
//   status: "idle",
//   error: null,
//   loading: false,
// };

// // Fetch all data (READ operation)
// export const listpathContent = createAsyncThunk(
//   "listpath/listpathSlice",
//   async () => {
//     const option = {
//       method: "GET",
//     };
//     const url = `${API_URL}/article/all-articles`;
//     const response = await callFetch(url, option);
//     return response;
//   }
// );

// // Delete an item (DELETE operation)
// export const deleteItem = createAsyncThunk(
//   "listpath/deleteItem",
//   async (id: number, { rejectWithValue }) => {
    
//      const formData: any = new FormData();
//      formData.append("article_id", id);
//     const option = {
//       method: "DELETE",
//       body: JSON.stringify({ article_id : id}),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: AUTH_TOKEN,
//       },
//     };
//     const url = `${API_URL}/article/article_delete`;
//     try {
//       const response = await callFetch(url, option);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
//       console.log("response", response);
//       return id; // Return id to delete it from state
//     } catch (error) {
//       console.error("Delete Error:", (error as Error).message);
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// // Create item (CREATE operation)
// export const createItem = createAsyncThunk(
//   "listpath/createItem",
//   async (newItem: any) => {
//     const option = {
//       method: "POST",
//       body: JSON.stringify(newItem),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: AUTH_TOKEN,
//       },
//     };
//     const url = `${API_URL}/article/article_create/`;
//     const response = await callFetch(url, option);
//     console.log("response", response);
//     return response;
//   }
// );

// // Update item (UPDATE operation)
// export const updateItem = createAsyncThunk(
//   "listpath/updateItem",
//   async (updatedItem: any) => {
//     debugger
//     const option = {
//       method: "PUT",
//       body: JSON.stringify(updatedItem),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: AUTH_TOKEN,
//       },
//     };
//     const url = `${API_URL}/article/update/${updatedItem.id}`;
//     const response = await callFetch(url, option);
//     console.log("response", response);
//     return response;
//   }
// );

// // Create slice
// const listpathSlice = createSlice({
//   name: "listpath",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(listpathContent.pending, (state) => {
//         state.loading = true;
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(listpathContent.fulfilled, (state, action: any) => {
//         state.data = action.payload?.data || action.payload;
//         state.header = action.payload?.header || action.payload;
//         state.loading = false;
//         state.status = "succeeded";
//       })
//       .addCase(listpathContent.rejected, (state, action: any) => {
//         state.loading = false;
//         state.status = "failed";
//         state.error = action.payload || "Failed to fetch data";
//       })
//       .addCase(deleteItem.fulfilled, (state, action: any) => {
//         state.data = state.data.filter(
//           (item: { id: any }) => item.id !== action.payload
//         );
//       })
//       .addCase(deleteItem.rejected, (state, action: any) => {
//         state.error = action.payload;
//       })
//       .addCase(createItem.fulfilled, (state, action: any) => {
//         state.data.push(action.payload);
//       })
//       .addCase(updateItem.fulfilled, (state, action: any) => {
//         const index = state.data.findIndex(
//           (item: { id: any }) => item.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.data[index] = action.payload;
//         }
//       });
//   },
// });

// export default listpathSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callFetch from "../_main/fetch";
import { API_URL, AUTH_TOKEN } from "../_main/routeConstant";

// Define the state interface
interface ListpathContentState {
  data: any[];
  header: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: boolean;
}

// Initial state
const initialState: ListpathContentState = {
  data: [],
  header: "",
  status: "idle",
  error: null,
  loading: false,
};

// Fetch all data (READ operation)
export const listpathContent = createAsyncThunk(
  "listpath/listpathContent",
  async (_, { rejectWithValue }) => {
    try {
      const option = { method: "GET" };
      const url = `${API_URL}/article/all-articles`;
      const response = await callFetch(url, option);

      if (!response) {
        throw new Error("Failed to fetch articles");
      }
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Delete an item (DELETE operation)
export const deleteItem = createAsyncThunk(
  "listpath/deleteItem",
  async (id: number, { rejectWithValue }) => {
    try {
      const option = {
        method: "DELETE",
        body: JSON.stringify({ article_id: id }),
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
      };
      const url = `${API_URL}/article/article_delete/${id}`;
      const response = await callFetch(url, option);

      if (!response || !response.ok) {
        throw new Error(`Error deleting item: ${response.status}`);
      }

      return id; // Return ID to remove it from state
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create item (CREATE operation)
export const createItem = createAsyncThunk(
  "listpath/createItem",
  async (newItem: any, { rejectWithValue }) => {
    // debugger
    try {
      const option = {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
      };
      const url = `${API_URL}/article/article_create/`;
      const response = await callFetch(url, option);

      if (!response) {
        throw new Error("Failed to create item");
      }

      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
export const createFile = createAsyncThunk(
  "listpath/createItem",
  async (newItem: any, { rejectWithValue }) => {
    debugger
    try {
      const option = {
        method: "POST",
        body: newItem,
        headers: {
          // "Content-Type": "multipart/formdata",
          Authorization: AUTH_TOKEN,
        },
      };
      const url = `${API_URL}/file/upload`;
      const response = await callFetch(url, option);

      if (!response) {
        throw new Error("Failed to create item");
      }

      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Update item (UPDATE operation)
export const updateItem = createAsyncThunk(
  "listpath/updateItem",
  async (updatedItem: any, { rejectWithValue }) => {
    try {
      const option = {
        method: "PUT",
        body: JSON.stringify(updatedItem),
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
      };
      const url = `${API_URL}/article/update/${updatedItem.id}`;
      const response = await callFetch(url, option);

      if (!response) {
        throw new Error("Failed to update item");
      }

      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create slice
const listpathSlice = createSlice({
  name: "listpath",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all data
      .addCase(listpathContent.pending, (state) => {
        state.loading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(listpathContent.fulfilled, (state, action) => {
        state.data = action.payload?.data || action.payload || [];
        state.header = action.payload?.header || "";
        state.loading = false;
        state.status = "succeeded";
      })
      .addCase(listpathContent.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload as string;
      })

      // Delete an item
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // Create an item
      .addCase(createItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(createItem.rejected, (state, action) => {
        state.error = action.payload as string;
      })

      // Update an item
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default listpathSlice.reducer;
