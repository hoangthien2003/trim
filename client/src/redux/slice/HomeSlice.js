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
    colorLoading: {
      baseColor: null,
      detailColor: null,
      highlightColor: null,
    },
  },
  reducers: {
    normal: (state) => {
      state.colorLoading.baseColor = null;
      state.colorLoading.detailColor = null;
      state.colorLoading.highlightColor = null;
    },
    dark: (state) => {
      state.colorLoading.baseColor = "#27343d";
      state.colorLoading.detailColor = "#202a30";
      state.colorLoading.highlightColor = "#34444f";
    },
  },
});

export const ChooseNavSlice = createSlice({
  name: "chooseNav",
  initialState: {
    chooseNav: {
      home: null,
      tasks: null,
      plan: null,
      inbox: null,
      people: null,
      report: null,
    },
  },
  reducers: {
    setChooseNav: (state, action) => {
      let param = action.payload;
      switch (param) {
        case "/":
          state.chooseNav.home = true;
          state.chooseNav.tasks = false;
          state.chooseNav.plan = false;
          state.chooseNav.inbox = false;
          state.chooseNav.people = false;
          state.chooseNav.report = false;
          break;
        case "/people":
          state.chooseNav.home = false;
          state.chooseNav.tasks = false;
          state.chooseNav.plan = false;
          state.chooseNav.inbox = false;
          state.chooseNav.people = true;
          state.chooseNav.report = false;
          break;
      }
    },
  },
});

export const TitleSlice = createSlice({
  name: "title",
  initialState: {
    title: null,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const PopupAddPeopleSlice = createSlice({
  name: "popupAddPeople",
  initialState: {
    popupAddPeople: null,
  },
  reducers: {
    open: (state) => {
      state.popupAddPeople = true;
    },
    close: (state) => {
      state.popupAddPeople = false;
    },
  },
});

export const PopupAddTeamSlice = createSlice({
  name: "popupAddTeam",
  initialState: {
    popupAddTeam: null,
  },
  reducers: {
    open: (state) => {
      state.popupAddTeam = true;
    },
    close: (state) => {
      state.popupAddTeam = false;
    },
  },
});

export const OpenSettingSlice = createSlice({
  name: "openSetting",
  initialState: {
    isClick: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.isClick = action.payload;
    },
  },
});
