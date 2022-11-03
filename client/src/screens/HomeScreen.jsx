import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuSvg from "../images/Menu.svg";
import MenuDark from "../images/MenuDark.svg";
import SearchSvg from "../images/Search.svg";
import SearchDark from "../images/SearchDark.svg";
import AddSvg from "../images/Add.svg";
import NotiSvg from "../images/Notification.svg";
import NotiDark from "../images/NotiDark.svg";
import ArrowLeft from "../images/arrow-left-solid.svg";
import Navbar from "./components/HomeScreen/Navbar";
import {
  DisplayAddPopupSlice,
  ShowProfileModalSlice,
} from "../redux/slice/HomeSlice";
import ModalProfile from "./components/HomeScreen/ModalProfile";
import { AuthContext } from "../contexts/AuthProvider";
import Add from "./components/HomeScreen/Add";
import { DarkModeSelector, DisplayAddPopupSelector } from "../redux/selector";
import { LOCAL_STORAGE_TOKEN_NAME, URL_BASE } from "../contexts/constants";
import axios from "axios";
import { DarkModeSlice } from "../redux/slice/DarkModeSlice";

function HomeScreen() {
  var openPopupSelector = useSelector(DisplayAddPopupSelector);
  var isDarkMode = useSelector(DarkModeSelector);
  const [showNav, setShowNav] = React.useState(true);
  const [showCloseNav, setShowCloseNav] = React.useState(false);
  const [isClickNoti, setIsClickNoti] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);
  const [valueSearchProject, setValueSearchProject] = React.useState("");
  const [isOpenAddPopup, setIsOpenAddPopup] = React.useState(false);
  const [displayHideModal, setDisplayHideModal] = useState(false);
  let htmlClasses = document.querySelector("html").classList;

  useEffect(() => {
    if (window.innerWidth <= 768) setShowNav(false);
    openPopupSelector ? setIsOpenAddPopup(true) : setIsOpenAddPopup(false);
    async function getDarkMode() {
      const response = await axios
        .get(`${URL_BASE}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_TOKEN_NAME
            )}`,
          },
        })
        .catch((err) => console.log(err));
      if (response.data.success === true) {
        const dataUser = response.data.user;
        if (dataUser.isDarkMode) {
          htmlClasses.add("dark");
          localStorage.theme = "dark";
          dispatch(DarkModeSlice.actions.enable());
        } else {
          htmlClasses.remove("dark");
          localStorage.removeItem("theme");
        }
      }
    }
    getDarkMode();
  }, [setShowNav, setIsOpenAddPopup, openPopupSelector]);

  return (
    <>
      <div
        className="flex flex-col md:flex-row select-none overflow-hidden h-screen"
        onClick={(e) => {
          if (e.target.id !== "avatar")
            dispatch(ShowProfileModalSlice.actions.setHide());
        }}
      >
        {window.innerWidth > 768 && <Navbar isShow={showNav} />}
        <div className="md:flex md:flex-col md:w-full">
          <div
            className={`headerBar dark:bg-bgHeaderBarDark border-b-[1px] border-b-outlineButton
            dark:border-b-black-100 border-solid`}
          >
            {window.innerWidth >= 768 ? (
              <h1 className="text-[17px] dark:text-white font-medium">Home</h1>
            ) : isClickNoti ? (
              <img
                src={ArrowLeft}
                alt=""
                className="w-[17px] h-[22px]"
                onClick={() => {
                  setIsClickNoti(false);
                  navigate(-1);
                }}
              />
            ) : (
              <img
                src={isDarkMode ? MenuDark : MenuSvg}
                alt="Menu Icon"
                className="w-[17px] h-[22px] fill-white md:hidden"
                onClick={() => {
                  setShowNav(!showNav);
                  setShowCloseNav(!showCloseNav);
                }}
              />
            )}
            <div className="flex items-center flex-row w-[160px] md:w-[300px] justify-around md:justify-between">
              {window.innerWidth > 768 ? (
                <div className="flex flex-row items-center border-outlineButton border-[1px] px-[20px] py-[6px] rounded-[18px] w-[160px]">
                  <img src={SearchSvg} alt="" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none w-full text-[13px] font-medium text-black-20 bg-white dark:bg-bgHeaderBarDark dark:text-black-10 ml-[5px] truncate"
                    value={valueSearchProject}
                    onChange={(e) => {
                      setValueSearchProject(e.target.value);
                    }}
                  />
                </div>
              ) : (
                <img src={isDarkMode ? SearchDark : SearchSvg} alt="" />
              )}
              <div
                className="p-[7px] bg-cyan rounded-[16px] md:cursor-pointer"
                onClick={() => {
                  dispatch(DisplayAddPopupSlice.actions.openAddPopup());
                  setIsOpenAddPopup(true);
                }}
              >
                <img src={AddSvg} alt="" className="" />
              </div>
              <div className="relative md:cursor-pointer">
                <img
                  src={isDarkMode ? NotiDark : NotiSvg}
                  alt=""
                  className={`${isClickNoti && "pointer-events-none"}`}
                  onClick={() => {
                    setIsClickNoti(true);
                    navigate("/noti");
                  }}
                />
                <div className="animate-ping absolute h-[4px] w-[4px] rounded-full bg-red-100 top-0 right-[4px]"></div>
              </div>
              <img
                src={user.photoURL}
                id="avatar"
                className="h-[28px] w-[28px] rounded-full md:cursor-pointer"
                alt="Avatar"
                onClick={(e) => {
                  dispatch(ShowProfileModalSlice.actions.toggleShow());
                  setDisplayHideModal(!displayHideModal);
                }}
              />
            </div>
          </div>
          <div className="relative flex flex-row">
            {window.innerWidth <= 768 && <Navbar isShow={showNav} />}
            {window.innerWidth <= 768 && (
              <div
                className={`${
                  showCloseNav ? "absolute" : "hidden"
                } h-full w-full z-10`}
                onClick={() => {
                  setShowNav(false);
                  setShowCloseNav(false);
                }}
              ></div>
            )}
          </div>
          <Outlet />
        </div>
      </div>

      {isOpenAddPopup && <Add />}
      <ModalProfile />
    </>
  );
}

export default HomeScreen;
