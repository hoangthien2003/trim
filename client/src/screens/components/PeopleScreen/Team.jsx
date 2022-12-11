import React from "react";
import TeamCard from "./TeamCard";
import Add from "../../../images/Add.svg";

function Team() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-white h-[11rem]
        rounded-[4px] border-outlineButton border-[1px] md:h-[13rem] md:hover:cursor-pointer"
      >
        <div className="rounded-[34px] mb-[7px] p-[12px] flex items-center justify-center bg-purple">
          <img src={Add} alt="" className="h-[18px] w-[18px]" />
        </div>
        <h2 className="md:hover:underline underline text-purple text-[14px]">
          Start a team
        </h2>
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
