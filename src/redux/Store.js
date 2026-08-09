import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

export let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
