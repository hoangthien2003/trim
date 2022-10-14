import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice({
  name: "color",
  initialState: {
    colorState: "",
  },
  reducers: {
    setColor: (state, action) => {
      state.colorState = action.payload;
    },
  },
});
