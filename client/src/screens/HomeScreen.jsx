import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MenuSvg from "../images/Menu.svg";
import SearchSvg from "../images/Search.svg";
import AddSvg from "../images/Add.svg";
import NotiSvg from "../images/Notification.svg";
import AvatarPng from "../images/Avatar.png";
import ArrowLeft from "../images/arrow-left-solid.svg";
import Navbar from "./components/HomeScreen/Navbar";
import { ShowProfileModalSlice } from "../redux/slice/HomeSlice";
import ModalProfile from "./components/HomeScreen/ModalProfile";

function HomeScreen() {
  const [showNav, setShowNav] = React.useState(false);
  const [showCloseNav, setShowCloseNav] = React.useState(false);
  const [isClickNoti, setIsClickNoti] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="headerBar border-b-[1px] border-b-outlineButton border-solid">
        {isClickNoti ? (
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
            className="w-[17px] h-[22px]"
            onClick={() => {
              setShowNav(!showNav);
              setShowCloseNav(!showCloseNav);
            }}
          />
        )}
        <div className="flex items-center flex-row w-[130px] justify-around">
          <img src={SearchSvg} alt="" />
          <div className="p-[7px] bg-cyan rounded-[16px]">
            <img src={AddSvg} alt="" />
          </div>
          <img
            src={NotiSvg}
            alt=""
            className={`${isClickNoti && "pointer-events-none"}`}
            onClick={() => {
              setIsClickNoti(true);
              navigate("/noti");
            }}
          />
          <img
            src={AvatarPng}
            className="h-[28px] w-[28px] rounded-full"
            alt="Avatar"
            onClick={() => {
              dispatch(ShowProfileModalSlice.actions.toggleShow());
            }}
          />
        </div>
      </div>
      <div className="relative">
        <Navbar isHide={showNav} />
        <div
          className={`${
            showCloseNav ? "absolute" : "hidden"
          } h-full w-full z-10`}
          onClick={() => {
            setShowNav(false);
            setShowCloseNav(false);
          }}
        ></div>
        <ModalProfile />
        <Outlet />
      </div>
    </div>
  );
}

export default HomeScreen;
