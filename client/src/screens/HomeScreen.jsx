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
  ColorLoadingSlice,
  DarkModeSlice,
  DisplayAddPopupSlice,
  ShowProfileModalSlice,
} from "../redux/slice/HomeSlice";
import ModalProfile from "./components/HomeScreen/ModalProfile";
import { AuthContext } from "../contexts/AuthProvider";
import Add from "./components/HomeScreen/Add";
import {
  ColorLoadingSelector,
  DarkModeSelector,
  DisplayAddPopupSelector,
  DisplaySharePopupSelector,
  PopupAddPeopleSelector,
  PopupAddTeamSelector,
  TitleSelector,
} from "../redux/selector";
import Share from "./components/HomeScreen/Share";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddPeople from "./components/PeopleScreen/AddPeople";
import AddTeam from "./components/PeopleScreen/AddTeam";

function HomeScreen() {
  var openPopupSelector = useSelector(DisplayAddPopupSelector);
  var openSharePopupSelector = useSelector(DisplaySharePopupSelector);
  var openAddPeopleSelector = useSelector(PopupAddPeopleSelector);
  var openAddTeamSelector = useSelector(PopupAddTeamSelector);
  var darkModeSelector = useSelector(DarkModeSelector);
  const [showNav, setShowNav] = useState(true);
  const [showCloseNav, setShowCloseNav] = useState(false);
  const [isClickNoti, setIsClickNoti] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoaded } = React.useContext(AuthContext);
  const [valueSearchProject, setValueSearchProject] = useState("");
  const [isOpenAddPopup, setIsOpenAddPopup] = useState(false);
  const [isOpenSharePopup, setIsOpenSharePopup] = useState(false);
  const [displayHideModal, setDisplayHideModal] = useState(false);
  let htmlClasses = document.querySelector("html").classList;
  var colorLoading = useSelector(ColorLoadingSelector);
  var title = useSelector(TitleSelector);

  useEffect(() => {
    if (window.innerWidth <= 768) setShowNav(false);
    openPopupSelector ? setIsOpenAddPopup(true) : setIsOpenAddPopup(false);
    openSharePopupSelector
      ? setIsOpenSharePopup(true)
      : setIsOpenSharePopup(false);
    if (localStorage.getItem("theme") === "dark") {
      dispatch(ColorLoadingSlice.actions.dark());
    } else {
      dispatch(ColorLoadingSlice.actions.normal());
    }
  }, [
    setShowNav,
    setIsOpenAddPopup,
    openPopupSelector,
    openSharePopupSelector,
    htmlClasses,
  ]);

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
              <h1 className="text-[17px] dark:text-white font-medium">
                {title}
              </h1>
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
                src={darkModeSelector ? MenuDark : MenuSvg}
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
                <img src={darkModeSelector ? SearchDark : SearchSvg} alt="" />
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
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill={`${darkModeSelector ? "white" : "#848588"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${isClickNoti && "pointer-events-none"}`}
                  onClick={() => {
                    setIsClickNoti(true);
                    navigate("/noti");
                  }}
                >
                  <path d="M8 1.94904C5.51472 1.94904 3.5 3.95802 3.5 6.43622C3.5 8.24258 3.04914 10.0257 2.60987 11.3398C2.44192 11.8422 2.27392 12.2811 2.12992 12.6328H13.8701C13.7261 12.2811 13.5581 11.8422 13.3901 11.3398C12.9509 10.0257 12.5 8.24258 12.5 6.43622C12.5 3.95802 10.4853 1.94904 8 1.94904ZM15.4322 12.9873C15.5318 13.186 15.5211 13.4219 15.404 13.6108C15.2869 13.7998 15.0799 13.9149 14.8571 13.9149H11.2143V14.1285C11.2143 15.8987 9.7752 17.3337 8 17.3337C6.2248 17.3337 4.78572 15.8987 4.78572 14.1285V13.9149H1.14286C0.920059 13.9149 0.713145 13.7998 0.596012 13.6108C0.478936 13.4219 0.468239 13.1861 0.567723 12.9874C0.567726 12.9874 0.567729 12.9874 0.567732 12.9874L0.567755 12.9874L0.567761 12.9874L0.567777 12.9873C0.567808 12.9873 0.567839 12.9872 0.56787 12.9872L0.568209 12.9865L0.570968 12.9809L0.583437 12.9554C0.594736 12.9321 0.611857 12.8964 0.633973 12.8492C0.678217 12.7546 0.742377 12.6139 0.819837 12.4337C0.974895 12.0729 1.18248 11.5556 1.39013 10.9344C1.80801 9.68431 2.21429 8.04867 2.21429 6.43622C2.21429 3.24996 4.80464 0.666992 8 0.666992C11.1954 0.666992 13.7857 3.24996 13.7857 6.43622C13.7857 8.04867 14.192 9.68431 14.6099 10.9344C14.8175 11.5556 15.0251 12.0729 15.1802 12.4337C15.2576 12.6139 15.3218 12.7546 15.366 12.8492C15.3881 12.8964 15.4053 12.9321 15.4166 12.9554L15.429 12.9809L15.4318 12.9865L15.4321 12.9872C15.4322 12.9872 15.4322 12.9873 15.4322 12.9873ZM6.07143 13.9149V14.1285C6.07143 15.1906 6.93488 16.0516 8 16.0516C9.06512 16.0516 9.92857 15.1906 9.92857 14.1285V13.9149H6.07143Z" />
                </svg>
                <div className="animate-ping absolute h-[4px] w-[4px] rounded-full bg-red-100 top-0 right-[4px]"></div>
              </div>
              {isLoaded ? (
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
              ) : (
                <Skeleton
                  circle={true}
                  width={28}
                  height={28}
                  baseColor={colorLoading.baseColor}
                  highlightColor={colorLoading.highlightColor}
                />
              )}
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

      {isOpenAddPopup ? <Add /> : null}
      {isOpenSharePopup ? <Share /> : null}
      <ModalProfile />
      {openAddPeopleSelector ? <AddPeople /> : null}
      {openAddTeamSelector ? <AddTeam /> : null}
    </>
  );
}

export default HomeScreen;
