import { createSlice } from "@reduxjs/toolkit";

export const IDMemberSlice = createSlice({
  name: "IDMember",
  initialState: {
    IDMemberState: "1",
  },
  reducers: {
    setIDMember: (state, action) => {
      state.IDMemberState = action.payload;
    },
  },
});
