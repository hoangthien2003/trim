import { createSlice } from "@reduxjs/toolkit";

export const IDColorSlice = createSlice({
  name: "storeID",
  initialState: {
    IDState: "",
  },
  reducers: {
    setID: (state, action) => {
      state.IDState = action.payload;
    },
  },
});
