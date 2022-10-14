import { createSlice } from "@reduxjs/toolkit";

export const HideOtherPopupSlice = createSlice({
  name: "hideOtherPopup",
  initialState: {
    isHideState: false,
  },
  reducers: {
    setIsHide: (state, action) => {
      state.isHideState = action.payload;
    },
  },
});
