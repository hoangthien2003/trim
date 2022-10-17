export const EmailSelector = (state) => state.emailReducer.emailValue;
export const ContinueSelector = (state) => state.continueReducer.isContinue;
export const EmailSignupSelector = (state) => state.emailSignupReducer.email;
export const ColorSelector = (state) => state.colorReducer.colorState;
export const IDColorSelector = (state) => state.IDColorReducer.IDState;
export const MemberSelector = (state) => state.memberReducer.memberAmount;
export const IDMemberSelector = (state) => state.IDMemberReducer.IDMemberState;
export const ShowProfileModalSelector = (state) =>
  state.showProfileModalReducer.isShowProfile;
