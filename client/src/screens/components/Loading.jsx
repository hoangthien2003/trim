import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOCAL_STORAGE_TOKEN_NAME, URL_BASE } from "../../contexts/constants";
import {
  ChooseNavSlice,
  ColorLoadingSlice,
  DarkModeSlice,
  TitleSlice,
} from "../../redux/slice/HomeSlice";
import { useParams } from "react-router-dom";

export default function Loading() {
  const dispatch = useDispatch();
  let htmlClasses = document.querySelector("html").classList;
  let param = useParams();

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
      case "/tasks":
        dispatch(TitleSlice.actions.setTitle("Tasks"));
        break;
      case "/people":
        dispatch(TitleSlice.actions.setTitle("People"));
        break;
    }
  }

  useEffect(() => {
    getDarkMode();
    getParamToChangeNav();
    getParamToChangeTitle();
    console.log("Loading...");
  }, []);
  return <div className="bg-[#858484] dark:bg-bgDashboardDark"></div>;
}
