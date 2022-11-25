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
    isDarkMode: true,
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

export const ColorLoadingSlice = createSlice({
  name: "colorLoading",
  initialState: {
    colorLoading: [],
  },
  reducers: {
    dark: (state) => {
      state.colorLoading = ["#27343d", "#202a30", "#34444f"]; //1: baseColor, 2: detailColor, 3:highlightColor
    },
  },
});
