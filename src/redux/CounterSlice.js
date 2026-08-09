import { createSlice } from "@reduxjs/toolkit";

let counterOfNumber = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export let { increament, decreament, reset, increamentByAmount } =
  counterOfNumber.actions;

export default counterOfNumber.reducer;
