import { createSlice } from "@reduxjs/toolkit";

export const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    enable: (state) => {
      state.isDarkMode = true;
    },
  },
});
