import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LOCAL_STORAGE_TOKEN_NAME, URL_BASE } from "../../contexts/constants";
import {
  ChooseNavSlice,
  ColorLoadingSlice,
  DarkModeSlice,
  OpenSettingSlice,
  TitleSlice,
} from "../../redux/slice/HomeSlice";
import { OpenSettingSelector } from "../../redux/selector";
import logo from "../../images/logo.svg";

export default function Loading() {
  const dispatch = useDispatch();
  let htmlClasses = document.querySelector("html").classList;
  var isClickSetting = useSelector(OpenSettingSelector);

  async function getDarkMode() {
    await axios
      .get(`${URL_BASE}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_NAME
          )}`,
        },
      })
      .then((res) => {
        var dataDarkMode = res.data.user.isDarkMode;
        if (dataDarkMode) {
          dispatch(DarkModeSlice.actions.enable());
          dispatch(ColorLoadingSlice.actions.dark());
          htmlClasses.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          dispatch(DarkModeSlice.actions.disable());
          dispatch(ColorLoadingSlice.actions.normal());
          htmlClasses.remove("dark");
          localStorage.removeItem("theme");
        }
      })
      .catch((err) => console.log(err));
  }

  function getParamToChangeNav() {
    let param = window.location.pathname;
    dispatch(ChooseNavSlice.actions.setChooseNav(param));
  }

  function getParamToChangeTitle() {
    let param = window.location.pathname;
    switch (param) {
      case "/":
        dispatch(TitleSlice.actions.setTitle("Home"));
        break;
      case "/setting":
        dispatch(TitleSlice.actions.setTitle("Setting"));
        break;
      case "/tasks":
        dispatch(TitleSlice.actions.setTitle("Tasks"));
        break;
      case "/people":
        dispatch(TitleSlice.actions.setTitle("People"));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getDarkMode();
    getParamToChangeNav();
    getParamToChangeTitle();
    console.log("Loading...");
  }, []);
  return (
    <div className="bg-white dark:bg-bgDashboardDark h-screen w-screen flex items-center justify-center">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="h-[64px] w-[64px]" />
        <p className="ml-[10px] text-[16px] font-bold text-black-200 dark:text-white">
          Trim
        </p>
      </div>
    </div>
  );
}
