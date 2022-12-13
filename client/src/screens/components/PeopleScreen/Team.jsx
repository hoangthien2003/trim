import React from "react";
import { useDispatch } from "react-redux";
import TeamCard from "./TeamCard";
import Person from "../../../images/avatar.svg";
import Person2 from "../../../images/avatar-1.svg";
import Person3 from "../../../images/avatar-2.svg";
import { PopupAddTeamSlice } from "../../../redux/slice/HomeSlice";

function Team() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-white h-[11rem]
        rounded-[4px] border-outlineButton dark:bg-bgProjectCardDark border-[1px] md:h-[13rem] 
      dark:border-bgOtherPopup"
      >
        <div className="flex flex-row items-center">
          <img src={Person3} alt="" className="h-[32px] w-[32px]" />
          <img src={Person2} alt="" className="h-[32px] w-[32px]" />
          <img src={Person} alt="" className="h-[32px] w-[32px]" />
        </div>
        <h2 className="text-[14px] mt-[20px] dark:text-whitesmoke">
          Your new team!
        </h2>
        <button
          className="bg-[#25d9e2] text-white text-[13px] font-medium px-[18px] py-[7px] rounded-[6px]
        mt-[16px]"
          onClick={() => {
            dispatch(PopupAddTeamSlice.actions.open());
          }}
        >
          Start a team
        </button>
      </div>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </>
  );
}

export default Team;
