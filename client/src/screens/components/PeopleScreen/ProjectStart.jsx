import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChooseProjectSlice } from "../../../redux/slice/PeopleSlice";

function ProjectStart(props) {
  const dispatch = useDispatch();
  return (
    <label
      className="flex flex-row items-center w-full py-[6px] md:hover:cursor-pointer"
      onClick={() => {
        dispatch(ChooseProjectSlice.actions.setProject(props.nameProject));
      }}
    >
      <input
        type="radio"
        name="projectChoose"
        className={`h-[16px] w-[16px] md:hover:cursor-pointer dark:border-black-200`}
      />
      <p className="text-[14px] ml-[12px] text-black-200 dark:text-whitesmoke">
        {props.nameProject}
      </p>
    </label>
  );
}

export default ProjectStart;
