import React from "react";
import Person from "../../../images/Person1.png";
import Trash from "../../../images/trash.svg";

function PeopleCard() {
  return (
    <div
      className="flex flex-col relative justify-center items-center bg-white dark:bg-bgProjectCardDark h-[11rem] md:h-[13rem] 
    rounded-[4px] border-outlineButton dark:border-bgOtherPopup border-[1px] md:hover:cursor-pointer"
      onClick={() => console.log("profile")}
    >
      <img
        src={Person}
        alt=""
        className="md:h-[64px] md:w-[64px] h-[56px] w-[56px]"
      />
      <span className="font-medium text-[15px] mt-[18px] dark:text-white">
        Michal Clark
      </span>
      <span className="text-[11px] text-black-50 dark:text-black-20">
        rickyponting@gmail.com
      </span>
      <span className="mt-[14px] font-medium text-[14px] dark:text-white">
        Marketing
      </span>
    </div>
  );
}

export default PeopleCard;
