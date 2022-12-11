import React from "react";
import Person from "../../../images/Person1.png";
import Trash from "../../../images/trash.svg";

function PeopleCard() {
  return (
    <div
      className="flex flex-col relative justify-center items-center bg-white h-[11rem] md:h-[13rem] 
    rounded-[4px] border-outlineButton border-[1px]"
    >
      <div className="w-full h-full absolute">
        <img
          src={Trash}
          alt=""
          className="float-right h-[17px] w-[17px] m-[12px] md:hover:cursor-pointer"
        />
      </div>
      <img
        src={Person}
        alt=""
        className="md:h-[64px] md:w-[64px] h-[56px] w-[56px]"
      />
      <span className="font-medium text-[14px] mt-[18px]">Michal Clark</span>
      <span className="text-[11px] text-black-50">rickyponting@gmail.com</span>
      <span className="mt-[14px] font-medium text-[13px]">Marketing</span>
    </div>
  );
}

export default PeopleCard;
