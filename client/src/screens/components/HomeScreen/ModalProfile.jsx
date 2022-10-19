import React, { useState, useEffect } from "react";
import AvtIcon from "../../../images/Avatar.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { ShowProfileModalSelector } from "../../../redux/selector";
import { AuthContext } from "../../../contexts/AuthProvider.js";
import {
  LOCAL_STORAGE_TOKEN_NAME,
  URL_BASE,
} from "../../../contexts/constants.js";
import { ShowProfileModalSlice } from "../../../redux/slice/HomeSlice";

function ModalProfile() {
  var isShowProfile = useSelector(ShowProfileModalSelector);
  const [toggleButtonActive, setToggleButtonActive] = React.useState(false);
  const [toggleButtonDarkMode, setToggleButtonDarkMode] = React.useState(false);
  const [requestLogOut, setRequestLogOut] = useState(false);
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);
  const dispatch = useDispatch();

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
  }, [requestLogOut, navigate, dispatch]);

  return (
    <div
      className={`${
        isShowProfile ? "absolute" : "hidden"
      } top-1 bg-white rounded-[7px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] z-10 right-8`}
    >
      <div className="flex flex-row items-center py-[14px] px-[18px]">
        <img
          src={user.photoURL}
          referrerPolicy="no-referrer"
          alt=""
          className="h-[30px] w-[30px] rounded-full"
        />
        <div className="flex flex-col ml-[9px]">
          <span className="text-[13px] font-medium whitespace-nowrap">
            {user.username}
          </span>
          <span className="text-[12px] text-black-20">{user.email}</span>
        </div>
      </div>
      <div className="h-[1px] w-full bg-outlineButton"></div>
      <div className="mt-[15px] px-[18px]">
        <div
          className="flex flex-row w-full items-center justify-between mb-[10px] md:mb-[15px]"
          onClick={() => {
            setToggleButtonActive(!toggleButtonActive);
          }}
        >
          <span className="text-[11px] md:text-[13px]">Active Status</span>
          <div
            className={`h-[13px] md:h-[17px] w-[26px] md:w-[32px] rounded-[10px] ${
              toggleButtonActive ? "bg-cyan" : "bg-outlineButton"
            } flex items-center px-[1px]`}
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
        <div
          className="flex flex-row w-full items-center justify-between pb-[15px]"
          onClick={() => {
            setToggleButtonDarkMode(!toggleButtonDarkMode);
          }}
        >
          <span className="text-[11px] md:text-[13px]">Dark Mode</span>
          <div
            className={`h-[13px] md:h-[17px] w-[26px] md:w-[32px] rounded-[10px] ${
              toggleButtonDarkMode ? "bg-cyan" : "bg-outlineButton"
            } flex items-center px-[1px] md:px-[2px]`}
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
        <p className="text-[11px] mb-[12px] md:mb-[4px] md:text-[13px] md:px-[8px] md:py-[6px] rounded-[6px] hover:bg-whitesmoke">
          Setting
        </p>
        <p
          className="text-[11px] md:text-[13px] md:px-[8px] md:py-[6px] rounded-[6px] hover:bg-whitesmoke"
          onClick={handelLogOut}
        >
          Log out
        </p>
      </div>
    </div>
  );
}

export default ModalProfile;
