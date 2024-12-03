import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter-slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // wishlist,
    // cart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
