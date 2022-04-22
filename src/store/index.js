import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import inventoryReducer from "./inventories/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inventories: inventoryReducer,
  },
});
