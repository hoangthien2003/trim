import React, { useState } from "react";

function ProjectStart(props) {
  return (
    <label className="flex flex-row items-center w-full py-[6px] md:hover:cursor-pointer">
      <input
        type="radio"
        name="projectChoose"
        className={`h-[15px] w-[15px] md:hover:cursor-pointer`}
      />
      <p className="text-[13px] ml-[12px] text-black-200">
        {props.nameProject}
      </p>
    </label>
  );
}

export default ProjectStart;
