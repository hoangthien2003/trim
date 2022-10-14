import { createSlice } from "@reduxjs/toolkit";

export const ContinueSlice = createSlice({
  name: "continue",
  initialState: {
    isContinue: false,
  },
  reducers: {
    setContinue: (state, action) => {
      state.isContinue = action.payload;
    },
  },
});
