import { configureStore } from "@reduxjs/toolkit";
import { EmailSlice } from "./slice/EmalSlice";
import { ContinueSlice } from "./slice/ContinueSlice";
import { EmailSignupSlice } from "./slice/EmailSignupSlice";
import { ColorSlice } from "./slice/ColorSlice";
import { IDColorSlice } from "./slice/IDColorSlice";
import { MemberSlice } from "./slice/MembersSlice";
import { IDMemberSlice } from "./slice/IDMemberSlice";
import { DisplayAddPopupSlice, ShowProfileModalSlice } from "./slice/HomeSlice";
import { DarkModeSlice } from "./slice/DarkModeSlice";

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
    darkModeReducer: DarkModeSlice.reducer,
  },
});
