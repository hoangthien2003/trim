import { createSlice } from "@reduxjs/toolkit";

export const ChooseProjectSlice = createSlice({
  name: "chooseProject",
  initialState: {
    chooseProject: {
      name: "Start typing to add a project",
      isChoose: false,
    },
  },
  reducers: {
    setProject: (state, action) => {
      state.chooseProject.name = action.payload;
      state.chooseProject.isChoose = true;
    },
    close: (state) => {
      state.chooseProject.name = "Start typing to add a project";
      state.chooseProject.isChoose = false;
    },
  },
});
