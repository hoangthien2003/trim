import { createSlice } from "@reduxjs/toolkit";

export const UserInfoCreateSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: {
      name: "",
      email: "",
      password: "",
      project: "",
      category: "",
      membersCount: "",
    },
  },
  reducers: {
    setName: (state, action) => {
      state.userInfo.name = action.payload;
    },
    setEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
    setPassword: (state, action) => {
      state.userInfo.password = action.payload;
    },
    setProject: (state, action) => {
      state.userInfo.project = action.payload;
    },
    setCategory: (state, action) => {
      state.userInfo.category = action.payload;
    },
    setMembersCount: (state, action) => {
      state.userInfo.membersCount = action.payload;
    },
  },
});
