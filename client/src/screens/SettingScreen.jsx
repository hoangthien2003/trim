import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function SettingScreen() {
  const [isProfile, setChooseProfile] = useState(true);
  const [isNoti, setChooseNoti] = useState(false);
  const [isAccount, setChooseAcc] = useState(false);
  const [isDisplay, setChooseDisplay] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="overflow-auto h-screen bg-bgProjectCardDark">
      <div className="bg-whitesmoke dark:bg-bgDashboardDark md:flex md:justify-center md:pb-[70px]">
        {window.innerWidth < 768 ? (
          <h1
            className="font-medium text-[16px] ml-[24px] py-[15px]
            dark:text-white"
          >
            Settings
          </h1>
        ) : null}
        <div
          className="h-full w-screen md:w-[60%] bg-white dark:bg-bgProjectCardDark rounded-t-[10px] 
          pt-[20px] md:mt-[30px] md:px-[30px] md:rounded-b-[10px]"
        >
          {/**Header*/}
          <div
            className="flex flex-row items-center justify-evenly pb-[2px] border-b-[1px] 
            border-outlineButton dark:border-bgOtherPopup"
          >
            <div
              className={`pb-[5px] border-b-[2px] ${
                isProfile
                  ? "border-purple dark:border-white"
                  : "border-white dark:border-bgProjectCardDark"
              } md:hover:cursor-pointer`}
              onClick={() => {
                setChooseProfile(true);
                setChooseNoti(false);
                setChooseAcc(false);
                setChooseDisplay(false);
                navigate("/setting");
              }}
            >
              <h1
                className={`font-medium text-[14px] ${
                  isProfile
                    ? "text-purple dark:text-white"
                    : "dark:text-black-20"
                }`}
              >
                Profile
              </h1>
            </div>
            <div
              className={`pb-[5px] border-b-[2px] ${
                isNoti
                  ? "border-purple dark:border-white"
                  : "border-white dark:border-bgProjectCardDark"
              } md:hover:cursor-pointer`}
              onClick={() => {
                setChooseProfile(false);
                setChooseNoti(true);
                setChooseAcc(false);
                setChooseDisplay(false);
                navigate("/setting/noti-setting");
              }}
            >
              <h1
                className={`font-medium text-[14px] ${
                  isNoti ? "text-purple dark:text-white" : "dark:text-black-20"
                }`}
              >
                Notifications
              </h1>
            </div>
            <div
              className={`pb-[5px] border-b-[2px] ${
                isAccount
                  ? "border-purple dark:border-white"
                  : "border-white dark:border-bgProjectCardDark"
              } md:hover:cursor-pointer`}
              onClick={() => {
                setChooseProfile(false);
                setChooseNoti(false);
                setChooseAcc(true);
                setChooseDisplay(false);
              }}
            >
              <h1
                className={`text-[14px] font-medium ${
                  isAccount
                    ? "text-purple dark:text-white"
                    : "dark:text-black-20"
                }`}
              >
                Account
              </h1>
            </div>
            <div
              className={`pb-[5px] border-b-[2px] ${
                isDisplay
                  ? "border-purple dark:border-white"
                  : "border-white dark:border-bgProjectCardDark"
              } md:hover:cursor-pointer`}
              onClick={() => {
                setChooseProfile(false);
                setChooseNoti(false);
                setChooseAcc(false);
                setChooseDisplay(true);
              }}
            >
              <h1
                className={`font-medium text-[14px] ${
                  isDisplay
                    ? "text-purple dark:text-white"
                    : "dark:text-black-20"
                }`}
              >
                Display
              </h1>
            </div>
          </div>

          {/**Body*/}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SettingScreen;
