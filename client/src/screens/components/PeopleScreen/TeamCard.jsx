import React from "react";
import People from "../../../images/People.svg";

function TeamCard() {
  return (
    <div
      className="flex flex-col relative justify-center items-center bg-white dark:bg-bgProjectCardDark h-[11rem] md:h-[13rem] 
    rounded-[4px] border-outlineButton dark:border-bgOtherPopup border-[1px]"
    >
      <div className="md:w-[64px] md:h-[64px] w-[56px] h-[56px] flex justify-center items-center bg-[#069FB3] rounded-full">
        <span className="font-medium md:text-[26px] text-[22px] text-white">
          P
        </span>
      </div>
      <div className="flex flex-row items-center md:mt-[22px] mt-[14px]">
        <img src={People} alt="" />
        <img src={People} alt="" />
        <img src={People} alt="" />
      </div>
      <span className="md:mt-[28px] mt-[20px] dark:text-white font-medium text-[14px]">
        Marketing
      </span>
    </div>
  );
}

export default TeamCard;
