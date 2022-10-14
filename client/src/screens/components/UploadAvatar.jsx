import React from "react";
import cameraSvg from "../../images/bxs-camera-2.svg";
import Color from "./Color";
import { useNavigate } from "react-router-dom";

function UploadAvatar() {
  const navigate = useNavigate();
  return (
    <div className="card md:items-start">
      <p className="setupTitle font-medium md:text-[24px]">
        Upload your project avatar
      </p>
      <div className="flex md:flex-row flex-col md:justify-center items-start mt-7">
        <button className="bg-black-50 ml-3 px-7 py-7 mb-5 md:mr-6 opacity-90 rounded-lg hover:opacity-100 transition-opacity">
          <img
            src={cameraSvg}
            alt="Upload Button"
            className="w-[25px] h-[25px]"
          />
        </button>
        <Color />
      </div>
      <div className="flex h-full items-center mt-3">
        <button className="buttonPurple w-[130px] px-7 mt-0 mr-4">Next</button>
        <p
          onClick={() => navigate("/setup/members")}
          className="text-purple text-[14px] w-[100px] font-medium select-none hover:underline hover:cursor-pointer"
        >
          Skip this
        </p>
      </div>
    </div>
  );
}

export default UploadAvatar;
