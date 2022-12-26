export const EmailSelector = (state) => state.emailReducer.emailValue;
export const ContinueSelector = (state) => state.continueReducer.isContinue;
export const EmailSignupSelector = (state) => state.emailSignupReducer.email;
export const ColorSelector = (state) => state.colorReducer.colorState;
export const IDColorSelector = (state) => state.IDColorReducer.IDState;
export const MemberSelector = (state) => state.memberReducer.memberAmount;
export const IDMemberSelector = (state) => state.IDMemberReducer.IDMemberState;
export const ShowProfileModalSelector = (state) =>
  state.showProfileModalReducer.isShowProfile;
export const DisplayAddPopupSelector = (state) =>
  state.displayAddPopupReducer.displayAddPopup;
export const DisplaySharePopupSelector = (state) =>
  state.displaySharePopupReducer.displaySharePopup;
export const DarkModeSelector = (state) => state.darkModeReducer.isDarkMode;
export const ColorLoadingSelector = (state) =>
  state.colorLoadingReducer.colorLoading;
export const UserInfoCreateSelector = (state) =>
  state.userInfoCreateReducer.userInfo;
export const ChooseNavSelector = (state) => state.chooseNavReducer.chooseNav;
export const TitleSelector = (state) => state.titleReducer.title;
export const PopupAddPeopleSelector = (state) =>
  state.popupAddPeopleReducer.popupAddPeople;
export const PopupAddTeamSelector = (state) =>
  state.popupAddTeamReducer.popupAddTeam;
export const ChooseProjectSelector = (state) =>
  state.chooseProjectReducer.chooseProject;
export const LanguageSelector = (state) => state.languageReducer.language;
export const ClickLanguaSelector = (state) => state.clickLanguaReducer.isClick;
export const ClickRegionSelector = (state) =>
  state.clickLanguaReducer.isClickRegion;
export const StartDaySelector = (state) => state.languageReducer.startDay;
export const OpenSettingSelector = (state) => state.openSettingReducer.isClick;
