import React from "react";
import { useDispatch } from "react-redux";
import Add from "../../../images/Add.svg";
import { PopupAddPeopleSlice } from "../../../redux/slice/HomeSlice";
import PeopleCard from "./PeopleCard";

function People() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-white h-[11rem]
      rounded-[4px] border-outlineButton border-[1px] md:h-[13rem] md:hover:cursor-pointer"
        onClick={() => {
          dispatch(PopupAddPeopleSlice.actions.open());
        }}
      >
        <div className="rounded-[34px] mb-[7px] p-[12px] flex items-center justify-center bg-purple">
          <img src={Add} alt="" className="h-[18px] w-[18px]" />
        </div>
        <h2 className="md:hover:underline underline text-purple text-[14px]">
          Add teammate
        </h2>
      </div>
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
      <PeopleCard />
    </>
  );
}

export default People;
