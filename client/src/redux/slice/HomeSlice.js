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
