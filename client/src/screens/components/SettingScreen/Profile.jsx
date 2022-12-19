import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import {
  ClickLanguaSelector,
  ClickRegionSelector,
  ColorLoadingSelector,
  DarkModeSelector,
  LanguageSelector,
  StartDaySelector,
} from "../../../redux/selector";
import CountryModal from "./CountryModal";
import {
  ClickLanguaSlice,
  LanguageSlice,
} from "../../../redux/slice/SettingSlice";
import RegionModal from "./RegionModal";

const Profile = () => {
  const { user, isLoaded } = useContext(AuthContext);
  const [fullNameVal, setFullNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [usernameVal, setUsernameVal] = useState("");
  const [gender, setGender] = useState("");
  const [aboutVal, setAboutVal] = useState(
    "Clay is a new type of tool that brings together the best parts of spreadsheets, coding & simple automation. Quickly connect your apps and code into automated workflows, build useful tools, enrich data sets and more!"
  );
  var colorLoading = useSelector(ColorLoadingSelector);
  var darkModeSelector = useSelector(DarkModeSelector);
  var languageSelector = useSelector(LanguageSelector);
  var startDaySelector = useSelector(StartDaySelector);
  var clickLanguaSelector = useSelector(ClickLanguaSelector);
  var clickRegionSelector = useSelector(ClickRegionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setFullNameVal("Hoang Dang Bao Thien");
    setEmailVal("hoangthiennt2003@gmail.com");
    setUsernameVal("hoangthien2003");
    document.querySelector("#labelMale").click();
    dispatch(LanguageSlice.actions.setLanguage("United State (English)"));
    document.querySelector("#Monday").click();
    document.querySelector("#shortTime").click()
    document.querySelector("#DD").click()
  }, [setFullNameVal, setEmailVal, setUsernameVal, dispatch]);

  return (
    <div className="px-[30px]">
      {/**Avatar*/}
      <div className="flex flex-row items-center justify-center pt-[20px]">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 7.36538C10.8264 7.36538 11.533 7.65314 12.1198 8.22867C12.7066 8.80419 13 9.4972 13 10.3077C13 11.1182 12.7066 11.8112 12.1198 12.3867C11.533 12.9622 10.8264 13.25 10 13.25C9.17361 13.25 8.46701 12.9622 7.88021 12.3867C7.2934 11.8112 7 11.1182 7 10.3077C7 9.4972 7.2934 8.80419 7.88021 8.22867C8.46701 7.65314 9.17361 7.36538 10 7.36538ZM17.3333 3.11538C18.0694 3.11538 18.6979 3.37079 19.2188 3.88161C19.7396 4.39243 20 5.00881 20 5.73077V14.8846C20 15.6066 19.7396 16.223 19.2188 16.7338C18.6979 17.2446 18.0694 17.5 17.3333 17.5H2.66667C1.93056 17.5 1.30208 17.2446 0.78125 16.7338C0.260417 16.223 0 15.6066 0 14.8846V5.73077C0 5.00881 0.260417 4.39243 0.78125 3.88161C1.30208 3.37079 1.93056 3.11538 2.66667 3.11538H5L5.53125 1.72596C5.66319 1.39223 5.90451 1.10447 6.25521 0.86268C6.6059 0.620893 6.96528 0.5 7.33333 0.5H12.6667C13.0347 0.5 13.3941 0.620893 13.7448 0.86268C14.0955 1.10447 14.3368 1.39223 14.4688 1.72596L15 3.11538H17.3333ZM10 14.8846C11.2847 14.8846 12.3837 14.4368 13.2969 13.5412C14.2101 12.6455 14.6667 11.5677 14.6667 10.3077C14.6667 9.04768 14.2101 7.96985 13.2969 7.07422C12.3837 6.17859 11.2847 5.73077 10 5.73077C8.71528 5.73077 7.61632 6.17859 6.70312 7.07422C5.78993 7.96985 5.33333 9.04768 5.33333 10.3077C5.33333 11.5677 5.78993 12.6455 6.70312 13.5412C7.61632 14.4368 8.71528 14.8846 10 14.8846Z"
            fill="#848588"
          />
        </svg>
        <div className="mx-[40px]">
          {isLoaded ? (
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt=""
              className="h-[72px] w-[72px] rounded-full"
            />
          ) : (
            <Skeleton
              circle={true}
              width={72}
              height={72}
              baseColor={colorLoading.baseColor}
              highlightColor={colorLoading.highlightColor}
            />
          )}
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.1948 2.27503C4.1948 1.17524 5.13307 0.333374 6.22732 0.333374H7.77203C8.86628 0.333374 9.80455 1.17524 9.80455 2.27503V2.51415H13.1785C13.4479 2.51415 13.6663 2.73255 13.6663 3.00195C13.6663 3.27136 13.4479 3.48976 13.1785 3.48976H12.1216V11.7251C12.1216 12.8248 11.1834 13.6667 10.0891 13.6667H3.91024C2.816 13.6667 1.87772 12.8248 1.87772 11.7251V3.48976H0.820813C0.551406 3.48976 0.333008 3.27136 0.333008 3.00195C0.333008 2.73255 0.551406 2.51415 0.820813 2.51415H4.1948V2.27503ZM2.85333 3.48976V11.7251C2.85333 12.2311 3.29825 12.6911 3.91024 12.6911H10.0891C10.7011 12.6911 11.146 12.2311 11.146 11.7251V3.48976H2.85333ZM8.82894 2.51415H5.17041V2.27503C5.17041 1.76894 5.61532 1.30898 6.22732 1.30898H7.77203C8.38403 1.30898 8.82894 1.76894 8.82894 2.27503V2.51415ZM5.45496 5.42185C5.72437 5.42185 5.94276 5.64025 5.94276 5.90965V10.2712C5.94276 10.5406 5.72437 10.759 5.45496 10.759C5.18555 10.759 4.96715 10.5406 4.96715 10.2712V5.90965C4.96715 5.64025 5.18555 5.42185 5.45496 5.42185ZM8.54439 5.42185C8.8138 5.42185 9.0322 5.64025 9.0322 5.90965V10.2712C9.0322 10.5406 8.8138 10.759 8.54439 10.759C8.27498 10.759 8.05659 10.5406 8.05659 10.2712V5.90965C8.05659 5.64025 8.27498 5.42185 8.54439 5.42185Z"
            fill="#848588"
          />
        </svg>
      </div>

      {/**Gender*/}
      <div className="flex mt-[18px] flex-row items-center justify-evenly">
        <label id="labelMale" className="flex flex-row items-center">
          <input id="male" type="radio" name="gender" value="Male" />
          <label
            htmlFor="male"
            className="ml-[8px] font-medium text-[14px] text-black-100"
          >
            Male
          </label>
        </label>
        <label id="labelFemale" className="flex flex-row items-center">
          <input id="female" value="Female" type="radio" name="gender" />
          <label
            htmlFor="female"
            className="ml-[8px] font-medium text-[14px] text-black-100"
          >
            Female
          </label>
        </label>
        <label id="labelOther" className="flex flex-row items-center">
          <input id="other" value="Other" type="radio" name="gender" />
          <label
            htmlFor="other"
            className="ml-[8px] font-medium text-[14px] text-black-100"
          >
            Other
          </label>
        </label>
      </div>

      {/**Personal Info*/}
      <div className="mt-[30px]">
        {/**Full name*/}
        <label htmlFor="fullName" className="formLabel">
          Your full name
        </label>
        <div className="border-[2px] border-outlineButton rounded-[8px]">
          <input
            name="fullName"
            id="fullName"
            value={fullNameVal}
            onChange={(e) => setFullNameVal(e.target.value)}
            placeholder="Full name"
            className="formInput py-[9px] text-[13px]"
          />
        </div>

        {/**Role*/}
        <div className="mt-[15px]">
          <label htmlFor="role" className="formLabel">
            Role
          </label>
          <div className="border-[2px] border-outlineButton rounded-[8px]">
            <input
              name="role"
              id="role"
              value="Owner"
              readOnly={true}
              placeholder="Role"
              className="formInput py-[9px] text-[13px]"
            />
          </div>
        </div>

        {/**Email*/}
        <div className="mt-[15px]">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <div className="border-[2px] border-outlineButton rounded-[8px]">
            <input
              name="email"
              id="email"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              placeholder="Email"
              className="formInput py-[9px] text-[13px]"
            />
          </div>
        </div>

        {/**Username*/}
        <div className="mt-[15px]">
          <label htmlFor="email" className="formLabel">
            Username
          </label>
          <div className="border-[2px] border-outlineButton rounded-[8px]">
            <input
              name="username"
              id="username"
              value={usernameVal}
              onChange={(e) => e.target.value}
              placeholder="Username"
              className="formInput py-[9px] text-[13px]"
            />
          </div>
        </div>

        {/**About*/}
        <div className="mt-[15px]">
          <label htmlFor="about" className="formLabel">
            About
          </label>
          <div className="border-[2px] border-outlineButton rounded-[8px]">
            <textarea
              id="about"
              name="about"
              placeholder="About"
              value={aboutVal}
              onChange={(e) => setAboutVal(e.target.value)}
              className="outline-none w-full text-[13px] text-black-100 h-[100px]
              dark:bg-bgProjectCardDark dark:text-whitesmoke p-[8px]"
            />
          </div>
        </div>
      </div>

      {/**Language & Region Setting*/}
      <div className="mt-[40px] relative">
        <h2 className="font-medium mb-[12px]">Language & Region Setting</h2>
        {/**Language*/}
        <label htmlFor="language" className="formLabel">
          Language
        </label>
        <div
          id="language"
          className={`w-full border-[2px] rounded-[8px] flex flex-row items-center
              justify-between px-3 py-2 md:hover:cursor-pointer 
              border-outlineButton dark:border-bgOtherPopup
              text-[13px]`}
          onClick={() => {
            dispatch(ClickLanguaSlice.actions.toggleClick());
          }}
        >
          <p>{languageSelector}</p>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64637 6.97986L0.186805 1.5203C-0.128177 1.20532 0.0949049 0.666748 0.540357 0.666748H11.4595C11.9049 0.666748 12.128 1.20532 11.813 1.5203L6.35347 6.97986C6.15821 7.17512 5.84163 7.17512 5.64637 6.97986Z"
              fill="#848588"
            />
          </svg>
        </div>
        {/*Language Modal*/}
        <div
          className={`absolute ${
            clickLanguaSelector ? "visible" : "hidden"
          } z-40 bg-white dark:bg-bgOtherPopup w-full rounded-[12px] mt-[2px] 
            shadow-xl border-[1px] border-outlineButton dark:border-none
            px-[25px] py-[20px]`}
        >
          <CountryModal />
        </div>

        {/*Region*/}
        <div className="mt-[15px]">
          <label className="formLabel">Week start on</label>
          <div
            id="language"
            className={`w-full border-[2px] rounded-[8px] flex flex-row items-center
              justify-between px-3 py-2 md:hover:cursor-pointer 
              border-outlineButton dark:border-bgOtherPopup
              text-[13px]`}
            onClick={() => {
              dispatch(ClickLanguaSlice.actions.toggleClickRegion());
            }}
          >
            <p>{startDaySelector}</p>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64637 6.97986L0.186805 1.5203C-0.128177 1.20532 0.0949049 0.666748 0.540357 0.666748H11.4595C11.9049 0.666748 12.128 1.20532 11.813 1.5203L6.35347 6.97986C6.15821 7.17512 5.84163 7.17512 5.64637 6.97986Z"
                fill="#848588"
              />
            </svg>
          </div>
        </div>
        {/*Region Modal*/}
        <div
          className={`absolute ${
            clickRegionSelector ? "visible" : "hidden"
          } z-40 bg-white dark:bg-bgOtherPopup w-full rounded-[12px] mt-[2px] 
            shadow-xl border-[1px] border-outlineButton dark:border-none
            px-[25px] py-[20px]`}
        >
          <RegionModal />
        </div>

        {/*Time & Date format*/}
        <div className="mt-[20px]">
          <label htmlFor="time" className="font-medium text-[13px] text-black-20">
            Time Format
          </label>
          <div id="time" className="flex flex-row items-center">
            <label id="shortTime" className="flex flex-row items-center mr-[30px]">
              <input type="radio" name="time" id="12" className="mr-[7px]" />
              <p className="text-[14px]">12 Hour</p>
            </label>
            <label id="fullTime" className="flex flex-row items-center">
              <input type="radio" name="time" id="24" className="mr-[7px]" />
              <p className="text-[14px]">24 Hour</p>
            </label>
          </div>
        </div>
        <div className="mt-[10px]">
          <label htmlFor="date" className="font-medium text-[13px] text-black-20">
            Date Format
          </label>
          <div id="date" className="flex flex-row items-center">
            <label id="DD" className="flex flex-row items-center mr-[15px]">
              <input type="radio" name="date" id="DD" className="mr-[7px]" />
              <p className="text-[14px]">DD/MM/YY</p>
            </label>
            <label id="MM" className="flex flex-row items-center mr-[15px]">
              <input type="radio" name="date" id="MM" className="mr-[7px]" />
              <p className="text-[14px]">MM/DD/YY</p>
            </label>
            <label id="YY" className="flex flex-row items-center">
              <input type="radio" name="date" id="YY" className="mr-[7px]"/>
              <p className="text-[14px]">YY/MM/DD</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
