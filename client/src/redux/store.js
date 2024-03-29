import { configureStore } from "@reduxjs/toolkit";
import { EmailSlice } from "./slice/SignupScreen";
import { ContinueSlice } from "./slice/SignupScreen";
import { EmailSignupSlice } from "./slice/SignupScreen";
import {
  ColorSlice,
  IDColorSlice,
  MemberSlice,
  IDMemberSlice,
} from "./slice/SetupScreen";
import {
  ChooseNavSlice,
  ColorLoadingSlice,
  DarkModeSlice,
  DisplayAddPopupSlice,
  DisplaySharePopupSlice,
  PopupAddPeopleSlice,
  PopupAddTeamSlice,
  ShowProfileModalSlice,
  TitleSlice,
  OpenSettingSlice,
} from "./slice/HomeSlice";
import { UserInfoCreateSlice } from "./slice/UserInfoCreateSlice";
import { ChooseProjectSlice } from "./slice/PeopleSlice";
import {
  ClickLanguaSlice,
  LanguageSlice,
  SettingDayNotiSlice,
} from "./slice/SettingSlice";

export const store = configureStore({
  reducer: {
    emailReducer: EmailSlice.reducer,
    continueReducer: ContinueSlice.reducer,
    emailSignupReducer: EmailSignupSlice.reducer,
    colorReducer: ColorSlice.reducer,
    IDColorReducer: IDColorSlice.reducer,
    memberReducer: MemberSlice.reducer,
    IDMemberReducer: IDMemberSlice.reducer,
    showProfileModalReducer: ShowProfileModalSlice.reducer,
    displayAddPopupReducer: DisplayAddPopupSlice.reducer,
    displaySharePopupReducer: DisplaySharePopupSlice.reducer,
    darkModeReducer: DarkModeSlice.reducer,
    colorLoadingReducer: ColorLoadingSlice.reducer,
    userInfoCreateReducer: UserInfoCreateSlice.reducer,
    chooseNavReducer: ChooseNavSlice.reducer,
    titleReducer: TitleSlice.reducer,
    popupAddPeopleReducer: PopupAddPeopleSlice.reducer,
    popupAddTeamReducer: PopupAddTeamSlice.reducer,
    chooseProjectReducer: ChooseProjectSlice.reducer,
    languageReducer: LanguageSlice.reducer,
    clickLanguaReducer: ClickLanguaSlice.reducer,
    openSettingReducer: OpenSettingSlice.reducer,
  },
});
