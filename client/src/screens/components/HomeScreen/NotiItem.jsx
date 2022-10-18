import React from "react";
import Person01 from "../../../images/Person1.png";

function NotiItem() {
  return (
    <div className="flex flex-row mb-[15px]">
      <img src={Person01} alt="" className="w-[24px] h-[24px] rounded-full" />
      <div className="ml-[8px]">
        <div className="flex flex-row items-center">
          <div className="h-[5px] w-[6px] rounded-[12px] mr-[5px] bg-purple"></div>
          <span className="text-[11px] text-black-50">Marketing & sales</span>
        </div>
        <span className="text-[13px] font-medium text-black-100">
          Assignee you to the new task
        </span>
        <p className="text-black-20 mt-[8px] text-[11px]">3 min ago</p>
      </div>
    </div>
  );
}

export default NotiItem;
