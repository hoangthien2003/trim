import React from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  OpenDayModalSelector,
  SettingNotiDaySelector,
} from "../../../redux/selector";
import { SettingDayNotiSlice } from "../../../redux/slice/SettingSlice";
import DayModal from "./DayModal";
import TimeSelect from "./TimeSelect";

const Notification = () => {
  const dispatch = useDispatch();
  const [isOpenDayModal, setOpenDayModal] = useState(null);

  const notiRef = useRef("Everyday");

  const handleChangeDay = (notiDay) => {
    notiRef.current = notiDay;
  };

  return (
    <div className="h-screen dark:bg-bgProjectCardDark pt-[20px] px-[20px]">
      {/**Allow Notification */}
      <div>
        <h3 className="text-[14px] font-medium text-black-200 dark:text-white">
          Allow Notification
        </h3>

        {/**Day */}
        <div className="relative">
          <div
            className="flex flex-row items-center border-[1px] border-outlineButton rounded-[6px] w-[112px] h-[36px]
        justify-evenly mt-[15px] md:hover:cursor-pointer"
            onClick={() => {
              setOpenDayModal(!isOpenDayModal);
            }}
          >
            <p className="text-[14px]">{notiRef.current}</p>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64637 6.97986L0.186805 1.5203C-0.128177 1.20532 0.0949049 0.666748 0.540357 0.666748H11.4595C11.9049 0.666748 12.128 1.20532 11.813 1.5203L6.35347 6.97986C6.15821 7.17512 5.84163 7.17512 5.64637 6.97986Z"
                fill="#848588"
              />
            </svg>
          </div>

          {/**Day Modal */}
          <div
            className={`absolute ${
              isOpenDayModal ? "visible" : "hidden"
            } z-20 bg-white dark:bg-bgOtherPopup rounded-[12px] mt-[2px] 
            shadow-xl border-[1px] border-outlineButton dark:border-none px-[10px] py-[6px]
            `}
          >
            <DayModal
              handleChangeDay={handleChangeDay}
              setOpenDay={setOpenDayModal}
            />
          </div>
        </div>

        {notiRef.current === "Custom" ? (
          <div></div>
        ) : (
          <div>
            {/** Time */}
            <div className="mt-[15px] flex flex-row items-center">
              <TimeSelect isStart={true} />
              <span className="text-[12px] text-black-50 mx-[15px]">To</span>
              <TimeSelect isEnd={true} />
            </div>

            {/**Weekend Noti */}
            <div
              className={`${
                notiRef.current === "Weekend" ? "visible" : "hidden"
              } mt-[10px]`}
            >
              <p className="text-[12px] text-black-100">
                You won't receive notifications on Saturday or Sunday.
              </p>
            </div>
          </div>
        )}

        {/**E-mail Noti */}
        <div></div>
      </div>
    </div>
  );
};

export default Notification;
