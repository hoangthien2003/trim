import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { ShowProfileModalSelector } from "../../../redux/selector";
import { AuthContext } from "../../../contexts/AuthProvider.js";
import {
  LOCAL_STORAGE_TOKEN_NAME,
  URL_BASE,
} from "../../../contexts/constants.js";
import {
  ColorLoadingSlice,
  DarkModeSlice,
  ShowProfileModalSlice,
  OpenSettingSlice,
  ChooseNavSlice,
} from "../../../redux/slice/HomeSlice";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ModalProfile() {
  let isShowProfile = useSelector(ShowProfileModalSelector);
  const [toggleButtonActive, setToggleButtonActive] = React.useState(false);
  const [toggleButtonDarkMode, setToggleButtonDarkMode] = React.useState(null);
  const [requestLogOut, setRequestLogOut] = useState(false);
  const navigate = useNavigate();
  const { user, isLoaded } = React.useContext(AuthContext);
  const dispatch = useDispatch();
  let htmlClasses = document.querySelector("html").classList;

  function handelLogOut() {
    setRequestLogOut(true);
  }
  useEffect(() => {
    if (requestLogOut) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      dispatch(ShowProfileModalSlice.actions.setHide());
      auth.signOut();
      navigate("/login");
    }
    async function toggleDarkMode() {
      await axios
        .get(`${URL_BASE}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_TOKEN_NAME
            )}`,
          },
        })
        .then((res) => setToggleButtonDarkMode(res.data.user.isDarkMode))
        .catch((err) => console.log(err));
    }
    toggleDarkMode();
  }, [requestLogOut, navigate, dispatch, setToggleButtonDarkMode]);

  async function setDarkMode() {
    setToggleButtonDarkMode(!toggleButtonDarkMode);
    await axios
      .patch(
        `${URL_BASE}/api/auth/changeDarkMode`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_TOKEN_NAME
            )}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    if (toggleButtonDarkMode) {
      dispatch(DarkModeSlice.actions.disable());
      dispatch(ColorLoadingSlice.actions.normal());
      document.body.className = "light";
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      dispatch(DarkModeSlice.actions.enable());
      dispatch(ColorLoadingSlice.actions.dark());
      htmlClasses.add("dark");
      localStorage.theme = "dark";
    }
  }

  return (
    <div
      className={`${
        isShowProfile ? "absolute" : "hidden"
      } top-14 select-none bg-white dark:bg-bgHeaderBarDark rounded-[7px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] z-10 right-8`}
    >
      <div className=" py-[14px] px-[18px]">
        {isLoaded ? (
          <div className="flex flex-row items-center">
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt=""
              className="h-[30px] w-[30px] rounded-full"
            />
            <div className="flex flex-col ml-[9px]">
              <span className="text-[13px] dark:text-white font-medium whitespace-nowrap">
                {user.username}
              </span>
              <span className="text-[12px] text-black-20 dark:text-black-10">
                {user.email}
              </span>
            </div>
          </div>
        ) : (
          <SkeletonTheme baseColor="#c9c7c7">
            <Skeleton circle={true} height={30} width={30} />
            <div className="w-[80%] ml-[8%]">
              <Skeleton />
              <Skeleton />
            </div>
          </SkeletonTheme>
        )}
      </div>
      <div className="h-[1px] w-full bg-outlineButton"></div>
      <div className="mt-[15px] px-[18px]">
        <div className="flex flex-row w-full items-center justify-between mb-[10px] md:mb-[15px]">
          <span className="text-[11px] md:text-[13px] dark:text-whitesmoke">
            Active Status
          </span>
          <div
            className={`h-[13px] md:h-[17px] w-[26px] md:w-[32px] rounded-[10px] ${
              toggleButtonActive ? "bg-cyan" : "bg-outlineButton"
            } flex items-center px-[1px] md:px-[2px] md:cursor-pointer`}
            onClick={() => {
              setToggleButtonActive(!toggleButtonActive);
            }}
          >
            <div
              className={`h-[10px] md:h-[12px] w-[10px] md:w-[12px] bg-white rounded-[14px] ${
                toggleButtonActive
                  ? "translate-x-[14px] md:translate-x-[16px]"
                  : "translate-x-0"
              } transition ease-linear duration-250`}
            ></div>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-between pb-[15px]">
          <span className="text-[11px] md:text-[13px] dark:text-whitesmoke">
            Dark Mode
          </span>
          <div
            className={`h-[13px] md:h-[17px] w-[26px] md:w-[32px] rounded-[10px] ${
              toggleButtonDarkMode ? "bg-cyan" : "bg-outlineButton"
            } flex items-center px-[1px] md:px-[2px] md:cursor-pointer`}
            onClick={() => {
              setDarkMode();
            }}
          >
            <div
              className={`h-[10px] md:h-[12px] w-[10px] md:w-[12px] bg-white rounded-[14px] ${
                toggleButtonDarkMode
                  ? "translate-x-[14px] md:translate-x-[16px]"
                  : "translate-x-0"
              } transition ease-linear duration-250`}
            ></div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-outlineButton"></div>
      <div className="mt-[15px] px-[18px] md:mt-[10px] md:px-[10px] mb-[12px]">
        <p
          className="text-[11px] mb-[12px] md:mb-[4px] md:text-[13px] md:px-[8px] 
        md:py-[6px] rounded-[6px] hover:bg-whitesmoke dark:hover:bg-black-50 dark:text-whitesmoke md:cursor-pointer"
          onClick={() => {
            window.location.pathname = "/setting";
            dispatch(OpenSettingSlice.actions.setOpen(true));
            navigate("/setting", { replace: true });
            dispatch(ShowProfileModalSlice.actions.setHide());
          }}
        >
          Setting
        </p>
        <p
          className="text-[11px] md:text-[13px] md:px-[8px] md:py-[6px] rounded-[6px] hover:bg-whitesmoke dark:hover:bg-black-50 md:cursor-pointer dark:text-whitesmoke"
          onClick={handelLogOut}
        >
          Log out
        </p>
      </div>
    </div>
  );
}

export default ModalProfile;
