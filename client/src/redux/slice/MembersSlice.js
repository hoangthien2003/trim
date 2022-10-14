import { createSlice } from "@reduxjs/toolkit";

export const MemberSlice = createSlice({
  name: "member",
  initialState: {
    memberAmount: "",
  },
  reducers: {
    setMemberAmount: (state, action) => {
      state.memberAmount = action.payload;
    },
  },
});
