import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ColorSelector,
  DarkModeSelector,
  PopupAddTeamSelector,
} from "../../../redux/selector";
import { PopupAddTeamSlice } from "../../../redux/slice/HomeSlice";
import Color from "../SetupScreen/Color";

function AddTeam() {
  const dispatch = useDispatch();
  var displayPopupSelector = useSelector(PopupAddTeamSelector);
  var darkModeSelector = useSelector(DarkModeSelector);
  const [isHoverClose, setHoverClose] = useState(null);
  var colorSelector = useSelector(ColorSelector);
  const [nameVal, setName] = useState(null);
  const [inviteVal, setInvite] = useState(null)
  const [isInviteErr, setInviteErr] = useState(null)

  return (
    <div
      className={`${displayPopupSelector ? "visible" : "hidden"} absolute 
    md:select-none z-30 flex justify-center items-center
    inset-0 bg-[rgba(168,167,167,0.5)] dark:bg-[rgba(225,223,223,0.2)]`}
    >
      <div
        className="bg-white dark:bg-bgProjectCardDark w-full md:w-[580px] 
      rounded-[9px] md:shadow-2xl"
      >
        {/**Header */}
        <div
          className="flex flex-row items-center justify-between pl-[35px]
        border-b-outlineButton dark:border-b-[1px] dark:border-bgOtherPopup border-b-[2px] h-[55px]"
        >
          <div>
            <h1 className="font-medium text-black-100 dark:text-white text-[15px] md:text-[17px]">
              Start a new team
            </h1>
          </div>
          <div
            className="md:hover:bg-red-100 inset-0 h-full px-[35px] rounded-tr-[8px] flex items-center justify-center transition-colors"
            onClick={() => {
              dispatch(PopupAddTeamSlice.actions.close());
            }}
            onMouseEnter={() => {
              setHoverClose(true);
            }}
            onMouseLeave={() => {
              setHoverClose(false);
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.92101 1.0791C9.13755 1.29564 9.13755 1.64674 8.92101 1.86328L5.78427 5.00002L8.92101 8.13676C9.13755 8.35331 9.13755 8.7044 8.92101 8.92095C8.70446 9.13749 8.35337 9.13749 8.13682 8.92095L5.00008 5.78421L1.86334 8.92095C1.6468 9.13749 1.2957 9.13749 1.07916 8.92095C0.862611 8.7044 0.862611 8.35331 1.07916 8.13676L4.2159 5.00002L1.07916 1.86328C0.862611 1.64674 0.862611 1.29564 1.07916 1.0791C1.2957 0.862551 1.6468 0.862551 1.86334 1.0791L5.00008 4.21584L8.13682 1.0791C8.35337 0.86255 8.70446 0.86255 8.92101 1.0791Z"
                fill={`${
                  isHoverClose || darkModeSelector ? "white" : "#323338"
                }`}
              />
            </svg>
          </div>
        </div>

        {/**Body */}
        <div className="md:mx-[35px] md:my-[20px] relative">
          <p className="md:text-[13px] text-black-200 dark:text-whitesmoke">
            Get everyone working in one place by adding them to a team. Stay
            connected with @mentions, collaborate on work together, and
            efficiently manage everything from the team profile page.
          </p>
          <div className="flex flex-row items-center justify-between md:mt-[24px]">
            <div
              className={`md:w-[86px] md:h-[86px] w-[56px] h-[56px] flex justify-center 
            items-center bg-[${colorSelector}] rounded-full transition-colors`}
            >
              <span className="font-medium md:text-[34px] text-[22px] text-white">
                P
              </span>
            </div>
            <Color />
          </div>
          <div className="mt-[30px]">
            <label htmlFor="name" className="formLabel">
              Team name
            </label>
            <div
              className={`relative border-[2px] border-outlineButton dark:border-bgOtherPopup rounded-[8px]`}
            >
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="formInput"
                value={nameVal}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <label htmlFor="name" className="formLabel">
              Invite people to your team
            </label>
            <div
              className={`relative border-[2px] border-outlineButton dark:border-bgOtherPopup rounded-[8px]`}
            >
              <input
                type="text"
                id="name"
                placeholder="Their email or @mention"
                className="formInput"
                value={inviteVal}
                onChange={(e) => setInvite(e.target.value)}
              />
            </div>
            <p className={`${isInviteErr ? "visible" : "hidden"} text-red-50`}>
              Invalid email 
            </p>
          </div>

          {/**Footer */}
          <div className="w-full mt-[30px] flex flex-row items-center justify-end">
            <button
              className="px-[28px] py-[10px] rounded-[8px] font-medium md:text-[18px] text-black-50
              md:hover:bg-whitesmoke md:dark:hover:bg-[#1d252b] dark:text-white dark:font-normal
              transition-colors mr-[8px]"
              onClick={() => {
                dispatch(PopupAddTeamSlice.actions.close());
              }}
            >
              Cancel
            </button>
            <button
              className={`bg-cyan px-[28px] py-[10px] rounded-[8px] font md:text-[16px] 
            transition-opacity text-white 
            ${nameVal && inviteVal ? "opacity-100" : "opacity-60 cursor-not-allowed"}`}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeam;
