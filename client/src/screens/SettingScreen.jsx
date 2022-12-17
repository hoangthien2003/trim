import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function SettingScreen() {
  const [isProfile, setChooseProfile] = useState(true);
  const [isNoti, setChooseNoti] = useState(false);
  const [isAccount, setChooseAcc] = useState(false);
  const [isDisplay, setChooseDisplay] = useState(false);
  const [choosing, setChoosing] = useState(1);

  return (
    <div className="overflow-auto">
      <div className="bg-whitesmoke h-screen dark:bg-bgProjectCardDark">
        {window.innerWidth < 768 ? (
          <h1 className="font-medium text-[16px] ml-[24px] py-[15px]">
            Settings
          </h1>
        ) : null}
        <div
          className="h-full w-screen bg-white rounded-t-[10px] 
          pt-[20px]"
        >
          {/**Header*/}
          <div
            className="flex flex-row items-center justify-around border-b-[1px] 
            border-outlineButton"
          >
            <div
              className={`pb-[5px] border-b-[2px] ${
                isProfile ? "border-purple" : "border-white"
              }`}
              onClick={() => {
                setChooseProfile(true);
                setChooseNoti(false);
                setChooseAcc(false);
                setChooseDisplay(false);
                setChoosing(1);
              }}
            >
              <h1
                className={`font-medium text-[14px] ${
                  isProfile ? "text-purple" : null
                }`}
              >
                Profile
              </h1>
            </div>
            <div
              className={`pb-[5px] border-b-[2px] ${
                isNoti ? "border-purple" : "border-white"
              }`}
              onClick={() => {
                setChooseProfile(false);
                setChooseNoti(true);
                setChooseAcc(false);
                setChooseDisplay(false);
                setChoosing(2);
              }}
            >
              <h1
                className={`font-medium text-[14px] ${
                  isNoti ? "text-purple" : null
                }`}
              >
                Notifications
              </h1>
            </div>
            <div
              className={`pb-[5px] border-b-[2px] ${
                isAccount ? "border-purple" : "border-white"
              }`}
              onClick={() => {
                setChooseProfile(false);
                setChooseNoti(false);
                setChooseAcc(true);
                setChooseDisplay(false);
                setChoosing(3);
              }}
            >
              <h1
                className={`text-[14px] font-medium ${
                  isAccount ? "text-purple" : null
                }`}
              >
                Account
              </h1>
            </div>
            <div
              className={`pb-[5px] border-b-[2px] ${
                isDisplay ? "border-purple" : "border-white"
              }`}
              onClick={() => {
                setChooseProfile(false);
                setChooseNoti(false);
                setChooseAcc(false);
                setChooseDisplay(true);
                setChoosing(4);
              }}
            >
              <h1
                className={`font-medium text-[14px] ${
                  isDisplay ? "text-purple" : null
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
