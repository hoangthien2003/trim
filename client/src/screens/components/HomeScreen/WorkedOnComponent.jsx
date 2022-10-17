import React from "react";
import BoxCheckIcon from "../../../images/BoxCheck.svg";
import "../../../styles/WorkedOn.css";

function WorkedOn(props) {
  return (
    <div className="grid grid-cols-12 w-full px-[20px] py-[15px] border-y-[2px] border-outlineButton border-solid">
      <div className="flex items-center justify-center col-span-1">
        <img
          src={BoxCheckIcon}
          alt="Box Check icon"
          className="h-[15px] w-[15px]"
        />
      </div>
      <div className="text-[13px] flex items-center font-medium col-span-4">
        <span className="truncate">Design Stage</span>
      </div>
      <div className="flex flex-row items-center col-span-4">
        <div className={`h-[6px] w-[9px] rounded-[2px] bg-red-50`}></div>
        <span className="text-[12px] text-black-100 whitespace-nowrap ml-[5px]">
          App Development
        </span>
      </div>
      <div className="flex text-[12px] text-black-100 items-center justify-center col-span-3">
        <span>Thursday</span>
      </div>
    </div>
  );
}

export default WorkedOn;
