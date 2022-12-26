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
import { useRef } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoaded } = useContext(AuthContext);
  const [emailVal, setEmailVal] = useState("");
  const [usernameVal, setUsernameVal] = useState("");
  const [aboutVal, setAboutVal] = useState(
    "Clay is a new type of tool that brings together the best parts of spreadsheets, coding & simple automation. Quickly connect your apps and code into automated workflows, build useful tools, enrich data sets and more!"
  );
  const fullNameRef = useRef("");
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const aboutRef = useRef("");

  const [isHoverEdit, setHoverEdit] = useState(null);
  const [isEdit, setEdit] = useState(null);
  const [isChangeEdit, setChangeEdit] = useState(null);
  const [isHoverCamera, setHoverCamera] = useState(null);

  var colorLoading = useSelector(ColorLoadingSelector);
  var darkModeSelector = useSelector(DarkModeSelector);
  var languageSelector = useSelector(LanguageSelector);
  var startDaySelector = useSelector(StartDaySelector);
  var clickLanguaSelector = useSelector(ClickLanguaSelector);
  var clickRegionSelector = useSelector(ClickRegionSelector);

  useEffect(() => {
    fullNameRef.current = "Hoang Dang Bao Thien";
    setEmailVal("hoangthiennt2003@gmail.com");
    setUsernameVal("hoangthien2003");
    document.getElementById("male").checked = true;
    dispatch(LanguageSlice.actions.setLanguage("United State (English)"));
    dispatch(LanguageSlice.actions.setStartDay("Monday"));
  }, [setEmailVal, setUsernameVal, dispatch]);

  return (
    <div
      className={`px-[30px] ${
        clickLanguaSelector || clickRegionSelector
          ? "pb-[250px] md:pb-0"
          : "pb-[150px] md:pb-[30px]"
      }`}
    >
      {/**Avatar*/}
      <div className="flex flex-row items-center justify-center md:mt-0 mt-[20px]">
        <div className="relative flex justify-center">
          {window.innerWidth > 768 ? (
            <div
              className={`absolute bg-white dark:bg-bgOtherPopup 
          ${
            isHoverCamera ? "z-0 translate-y-0" : "-z-10 translate-y-[30px]"
          } w-[120px] py-[2px] rounded-[6px] ease-in-out duration-300 text-center`}
            >
              <p className="text-black dark:text-whitesmoke font-medium text-[14px]">
                Change Avatar
              </p>
            </div>
          ) : null}
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hover:cursor-pointer md:mt-[29px]"
            onMouseEnter={() => {
              setHoverCamera(true);
            }}
            onMouseLeave={() => {
              setHoverCamera(false);
            }}
          >
            <path
              d="M10 7.36538C10.8264 7.36538 11.533 7.65314 12.1198 8.22867C12.7066 8.80419 13 9.4972 13 10.3077C13 11.1182 12.7066 11.8112 12.1198 12.3867C11.533 12.9622 10.8264 13.25 10 13.25C9.17361 13.25 8.46701 12.9622 7.88021 12.3867C7.2934 11.8112 7 11.1182 7 10.3077C7 9.4972 7.2934 8.80419 7.88021 8.22867C8.46701 7.65314 9.17361 7.36538 10 7.36538ZM17.3333 3.11538C18.0694 3.11538 18.6979 3.37079 19.2188 3.88161C19.7396 4.39243 20 5.00881 20 5.73077V14.8846C20 15.6066 19.7396 16.223 19.2188 16.7338C18.6979 17.2446 18.0694 17.5 17.3333 17.5H2.66667C1.93056 17.5 1.30208 17.2446 0.78125 16.7338C0.260417 16.223 0 15.6066 0 14.8846V5.73077C0 5.00881 0.260417 4.39243 0.78125 3.88161C1.30208 3.37079 1.93056 3.11538 2.66667 3.11538H5L5.53125 1.72596C5.66319 1.39223 5.90451 1.10447 6.25521 0.86268C6.6059 0.620893 6.96528 0.5 7.33333 0.5H12.6667C13.0347 0.5 13.3941 0.620893 13.7448 0.86268C14.0955 1.10447 14.3368 1.39223 14.4688 1.72596L15 3.11538H17.3333ZM10 14.8846C11.2847 14.8846 12.3837 14.4368 13.2969 13.5412C14.2101 12.6455 14.6667 11.5677 14.6667 10.3077C14.6667 9.04768 14.2101 7.96985 13.2969 7.07422C12.3837 6.17859 11.2847 5.73077 10 5.73077C8.71528 5.73077 7.61632 6.17859 6.70312 7.07422C5.78993 7.96985 5.33333 9.04768 5.33333 10.3077C5.33333 11.5677 5.78993 12.6455 6.70312 13.5412C7.61632 14.4368 8.71528 14.8846 10 14.8846Z"
              fill="#848588"
            />
          </svg>
        </div>
        <div className="mx-[40px] md:mt-[30px]">
          {isLoaded ? (
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt=""
              className="h-[72px] w-[72px] md:h-[97px] md:w-[97px] border-[1px] border-bgOtherPopup rounded-full"
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
        <div className="relative flex justify-center">
          {window.innerWidth > 768 ? (
            <div
              className={`absolute bg-white dark:bg-bgOtherPopup 
          ${
            isHoverEdit ? "z-0 translate-y-0" : "-z-10 translate-y-[30px]"
          } px-[12px] py-[2px] rounded-[6px] ease-in-out duration-300`}
            >
              <p className="text-black dark:text-whitesmoke font-medium text-[14px]">
                Edit
              </p>
            </div>
          ) : null}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="fill-[#848588] h-[19px] w-[19px] md:hover:cursor-pointer z-20 md:mt-[30px]"
            onMouseEnter={() => {
              setHoverEdit(true);
            }}
            onMouseLeave={() => {
              setHoverEdit(false);
            }}
            onClick={() => {
              setEdit(true);
              document.querySelector('input[name="fullName"]').focus();
            }}
          >
            <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
          </svg>
        </div>
      </div>

      {/**Gender*/}
      <div className="flex mt-[18px] flex-row items-center justify-center">
        <label
          id="labelMale"
          className="flex flex-row items-center"
          onClick={() => {
            setChangeEdit(true);
          }}
        >
          <input id="male" type="radio" name="gender" value="Male" />
          <label
            htmlFor="male"
            className="ml-[8px] font-medium text-[14px] dark:text-whitesmoke text-black-100"
          >
            Male
          </label>
        </label>
        <label
          id="labelFemale"
          className="flex flex-row items-center mx-[40px]"
          onClick={() => {
            setChangeEdit(true);
          }}
        >
          <input id="female" value="Female" type="radio" name="gender" />
          <label
            htmlFor="female"
            className="ml-[8px] font-medium text-[14px] dark:text-whitesmoke text-black-100"
          >
            Female
          </label>
        </label>
        <label
          id="labelOther"
          className="flex flex-row items-center"
          onClick={() => {
            setChangeEdit(true);
          }}
        >
          <input id="other" value="Other" type="radio" name="gender" />
          <label
            htmlFor="other"
            className="ml-[8px] font-medium text-[14px] dark:text-whitesmoke text-black-100"
          >
            Other
          </label>
        </label>
      </div>

      {/**Personal Info*/}
      <div className="mt-[30px] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-5">
        {/**Full name*/}
        <div>
          <label htmlFor="fullName" className="formLabel">
            Your full name
          </label>
          <div className="border-[2px] border-outlineButton dark:border-bgOtherPopup rounded-[8px]">
            <input
              name="fullName"
              id="fullName"
              readOnly={isEdit ? false : true}
              value={fullNameRef.current}
              placeholder="Full name"
              className={`formInput py-[9px] text-[13px] w-full ${
                isEdit ? "cursor-text" : "cursor-default"
              }`}
            />
          </div>
        </div>

        {/**Role*/}
        <div className="mt-[15px] md:mt-0">
          <label htmlFor="role" className="formLabel">
            Role
          </label>
          <div className="border-[2px] border-outlineButton dark:border-bgOtherPopup rounded-[8px]">
            <input
              name="role"
              id="role"
              value="Owner"
              readOnly={true}
              placeholder="Role"
              className={`formInput py-[9px] text-[13px] w-full ${
                isEdit ? "cursor-text" : "cursor-default"
              }`}
            />
          </div>
        </div>

        {/**Email*/}
        <div className="mt-[15px]">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <div className="border-[2px] border-outlineButton dark:border-bgOtherPopup rounded-[8px]">
            <input
              name="email"
              id="email"
              readOnly={isEdit ? false : true}
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              placeholder="Email"
              className={`formInput py-[9px] text-[13px] w-full ${
                isEdit ? "cursor-text" : "cursor-default"
              }`}
            />
          </div>
        </div>

        {/**Username*/}
        <div className="mt-[15px]">
          <label htmlFor="email" className="formLabel">
            Username
          </label>
          <div className="border-[2px] border-outlineButton dark:border-bgOtherPopup rounded-[8px]">
            <input
              name="username"
              id="username"
              readOnly={isEdit ? false : true}
              value={usernameVal}
              onChange={(e) => e.target.value}
              placeholder="Username"
              className={`formInput py-[9px] text-[13px] w-full ${
                isEdit ? "cursor-text" : "cursor-default"
              }`}
            />
          </div>
        </div>
      </div>
      {/**About*/}
      <div className="mt-[15px]">
        <label htmlFor="about" className="formLabel">
          About
        </label>
        <div className="border-[2px] border-outlineButton dark:border-bgOtherPopup p-[8px] rounded-[8px]">
          <textarea
            id="about"
            name="about"
            placeholder="About"
            readOnly={isEdit ? false : true}
            value={aboutVal}
            onChange={(e) => setAboutVal(e.target.value)}
            className={`outline-none w-full text-[13px] text-black-100 h-[100px]
              dark:bg-bgProjectCardDark dark:text-whitesmoke ${
                isEdit ? "cursor-text" : "cursor-default"
              }`}
          />
        </div>
      </div>

      {/**Language & Workday Setting*/}
      <div className="mt-[40px]">
        <h2 className="font-medium mb-[12px] dark:text-white">
          Language & Region Setting
        </h2>
        {/**Language*/}
        <div className="md:grid md:grid-cols-2 md:gap-x-5 md:mb-[10px]">
          <div className="relative">
            <label htmlFor="language" className="formLabel">
              Language
            </label>
            <div
              id="language"
              className={`w-full border-[2px] rounded-[8px] flex flex-row items-center
              justify-between px-3 py-2
              border-outlineButton dark:border-bgOtherPopup dark:text-whitesmoke
              text-[13px] ${isEdit ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={() => {
                if (isEdit) {
                  dispatch(ClickLanguaSlice.actions.toggleClick());
                }
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
          </div>

          {/*Region*/}
          <div className="mt-[15px] md:mt-0 relative">
            <label className="formLabel">Week start on</label>
            <div
              id="language"
              className={`w-full border-[2px] rounded-[8px] flex flex-row items-center
              justify-between px-3 py-2
              border-outlineButton dark:border-bgOtherPopup dark:text-whitesmoke
              text-[13px] ${isEdit ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={() => {
                if (isEdit) {
                  dispatch(ClickLanguaSlice.actions.toggleClickRegion());
                }
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
          </div>
        </div>

        {/*Time & Date format*/}
        <div className="mt-[20px] md:mt-0">
          <label
            htmlFor="time"
            className="font-medium text-[13px] text-black-20"
          >
            Time Format
          </label>
          <div id="time" className="flex flex-row items-center">
            <label className="flex flex-row items-center mr-[30px]">
              <input
                type="radio"
                defaultChecked={true}
                name="time"
                id="12"
                className="mr-[7px]"
              />
              <p className="text-[14px] dark:text-whitesmoke">12 Hour</p>
            </label>
            <label className="flex flex-row items-center">
              <input type="radio" name="time" id="24" className="mr-[7px]" />
              <p className="text-[14px] dark:text-whitesmoke">24 Hour</p>
            </label>
          </div>
        </div>
        <div className="mt-[10px]">
          <label
            htmlFor="date"
            className="font-medium text-[13px] text-black-20"
          >
            Date Format
          </label>
          <div id="date" className="flex flex-row items-center">
            <label className="flex flex-row items-center mr-[15px]">
              <input
                type="radio"
                defaultChecked={true}
                name="date"
                id="DD"
                className="mr-[7px]"
              />
              <p className="text-[14px] dark:text-whitesmoke">DD/MM/YY</p>
            </label>
            <label className="flex flex-row items-center mr-[15px]">
              <input type="radio" name="date" id="MM" className="mr-[7px]" />
              <p className="text-[14px] dark:text-whitesmoke">MM/DD/YY</p>
            </label>
            <label className="flex flex-row items-center">
              <input type="radio" name="date" id="YY" className="mr-[7px]" />
              <p className="text-[14px] dark:text-whitesmoke">YY/MM/DD</p>
            </label>
          </div>
        </div>

        {/**Footer */}
        <button
          className={`float-right my-[20px] bg-cyan px-[22px] py-[8px] text-white
        text-[14px] rounded-[7px] ${
          isChangeEdit
            ? "opacity-100 cursor-pointer"
            : "opacity-70 cursor-not-allowed"
        }`}
          onClick={(e) => {
            e.preventDefault();
            if (isChangeEdit) window.location.reload();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
