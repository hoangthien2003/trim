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
                <img
                  src={darkModeSelector ? NotiDark : NotiSvg}
                  alt=""
                  className={`${isClickNoti && "pointer-events-none"}`}
                  onClick={() => {
                    setIsClickNoti(true);
                    navigate("/noti");
                  }}
                />
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
