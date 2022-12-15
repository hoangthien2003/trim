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

export const IDColorSlice = createSlice({
  name: "storeID",
  initialState: {
    IDState: "11",
  },
  reducers: {
    setID: (state, action) => {
      state.IDState = action.payload;
    },
  },
});

export const ColorSlice = createSlice({
  name: "color",
  initialState: {
    colorState: "#F24D16",
  },
  reducers: {
    setColor: (state, action) => {
      state.colorState = action.payload;
    },
  },
});

