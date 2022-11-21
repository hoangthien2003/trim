import { createSlice } from "@reduxjs/toolkit";

export const ShowProfileModalSlice = createSlice({
  name: "showProfileModal",
  initialState: {
    isShowProfile: false,
  },
  reducers: {
    toggleShow: (state) => {
      state.isShowProfile = !state.isShowProfile;
    },
    setHide: (state) => {
      state.isShowProfile = false;
    },
  },
});

export const DisplayAddPopupSlice = createSlice({
  name: "displayAddPopup",
  initialState: {
    displayAddPopup: false,
  },
  reducers: {
    closeAddPopup: (state) => {
      state.displayAddPopup = false;
    },
    openAddPopup: (state) => {
      state.displayAddPopup = true;
    },
  },
});

export const DisplaySharePopupSlice = createSlice({
  name: "displaySharePopup",
  initialState: {
    displaySharePopup: false,
  },
  reducers: {
    openSharePopup: (state) => {
      state.displaySharePopup = true;
    },
    closeSharePopup: (state) => {
      state.displaySharePopup = false;
    },
  },
});

export const DarkModeSlice = createSlice({
  name: "isDarkMode",
  initialState: {
    isDarkMode: null,
  },
  reducers: {
    enable: (state) => {
      state.isDarkMode = true;
    },
    disable: (state) => {
      state.isDarkMode = false;
    },
  },
});
