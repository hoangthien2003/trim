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

export const EmailSignupSlice = createSlice({
  name: "emailSignup",
  initialState: {
    email: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    getEmail: (state, action) => state.email,
  },
});

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
