import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuSvg from "../images/Menu.svg";
import SearchSvg from "../images/Search.svg";
import AddSvg from "../images/Add.svg";
import NotiSvg from "../images/Notification.svg";
import ArrowLeft from "../images/arrow-left-solid.svg";
import Navbar from "./components/HomeScreen/Navbar";
import { ShowProfileModalSlice } from "../redux/slice/HomeSlice";
import ModalProfile from "./components/HomeScreen/ModalProfile";
import { AuthContext } from "../contexts/AuthProvider";

function HomeScreen() {
  const [showNav, setShowNav] = React.useState(true);
  const [showCloseNav, setShowCloseNav] = React.useState(false);
  const [isClickNoti, setIsClickNoti] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);
  const [valueSearchProject, setValueSearchProject] = React.useState("");

  useEffect(() => {
    if (window.innerWidth <= 768) setShowNav(false);
  }, [setShowNav]);

  return (
    <div className="flex flex-col md:flex-row select-none">
      {window.innerWidth > 768 && <Navbar isShow={showNav} />}
      <div className="md:flex md:flex-col md:w-full">
        <div className="headerBar border-b-[1px] border-b-outlineButton border-solid">
          {window.innerWidth >= 768 ? (
            <h1 className="text-[17px] font-medium">Home</h1>
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
              src={MenuSvg}
              alt="Menu Icon"
              className="w-[17px] h-[22px] md:hidden"
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
                  className="outline-none w-full text-[13px] font-medium text-black-20 ml-[5px] truncate"
                  value={valueSearchProject}
                  onChange={(e) => {
                    setValueSearchProject(e.target.value);
                  }}
                />
              </div>
            ) : (
              <img src={SearchSvg} alt="" />
            )}
            <div className="p-[7px] bg-cyan rounded-[16px]">
              <img src={AddSvg} alt="" className="md:cursor-pointer" />
            </div>
            <div className="relative md:cursor-pointer">
              <img
                src={NotiSvg}
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
              className="h-[28px] w-[28px] rounded-full md:cursor-pointer"
              alt="Avatar"
              onClick={() => {
                dispatch(ShowProfileModalSlice.actions.toggleShow());
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
          <ModalProfile />
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
