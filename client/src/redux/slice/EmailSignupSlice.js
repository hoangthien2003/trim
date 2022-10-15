import { createSlice } from "@reduxjs/toolkit";

export const EmailSignupSlice = createSlice({
  name: "emailSignup",
  initialState: {
    email: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    getEmail: (state, action) => state.email
  },
});
