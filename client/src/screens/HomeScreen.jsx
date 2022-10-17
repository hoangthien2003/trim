import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoSvg from "../images/logo.svg";
import HomeSvg from "../images/Home.svg";
import InboxSvg from "../images/Inbox.svg";
import PeopleSvg from "../images/People.svg";
import PlanSvg from "../images/Plan.svg";
import ReportSvg from "../images/Report.svg";
import TasksSvg from "../images/Tasks.svg";
import MenuSvg from "../images/Menu.svg";
import SearchSvg from "../images/Search.svg";
import AddSvg from "../images/Add.svg";
import NotiSvg from "../images/Notification.svg";
import AvatarPng from "../images/Avatar.png";
import Navbar from "./components/HomeScreen/Navbar";
import { ShowProfileModalSlice } from "../redux/slice/HomeSlice";

function HomeScreen() {
  const [showNav, setShowNav] = React.useState(false);
  const [showCloseNav, setShowCloseNav] = React.useState(false);
  const [requestLogOut, setRequestLogOut] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="headerBar border-b-[1px] border-b-outlineButton border-solid">
        <img
          src={MenuSvg}
          alt="Menu Icon"
          className="w-[17px] h-[22px]"
          onClick={() => {
            setShowNav(!showNav);
            setShowCloseNav(!showCloseNav);
          }}
        />
        <div className="flex items-center flex-row w-[130px] justify-around">
          <img src={SearchSvg} alt="" />
          <div className="p-[7px] bg-cyan rounded-[16px]">
            <img src={AddSvg} alt="" />
          </div>
          <img src={NotiSvg} alt="" />
          <img
            src={AvatarPng}
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
        <Outlet />
      </div>
    </div>
  );
}

export default HomeScreen;
