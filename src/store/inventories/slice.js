import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: [],
};

export const inventorySlice = createSlice({
  name: "inventories",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRows: (state, action) => {
      console.log({ action });
      state.rows = action.payload;
    },
  },
});

export const { setRows } = inventorySlice.actions;

export const selectInventoryRows = (state) => state.inventories.rows;

export default inventorySlice.reducer;
