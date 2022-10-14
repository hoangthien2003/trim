import { createSlice } from "@reduxjs/toolkit";
export const EmailSlice = createSlice({
  name: "email",
  initialState: {
    emailValue: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.emailValue = action.payload;
    },
  },
});
