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
