import { createSlice } from "@reduxjs/toolkit";

export const LanguageSlice = createSlice({
  name: "language",
  initialState: {
    language: null,
    startDay: null,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setStartDay: (state, action) => {
      state.startDay = action.payload;
    },
  },
});

export const ClickLanguaSlice = createSlice({
  name: "clickLangua",
  initialState: {
    isClick: false,
    isClickRegion: false,
  },
  reducers: {
    setClick: (state, action) => {
      state.isClick = action.payload;
    },
    toggleClick: (state) => {
      state.isClick = !state.isClick;
    },
    toggleClickRegion: (state) => {
      state.isClickRegion = !state.isClickRegion;
    },
  },
});
