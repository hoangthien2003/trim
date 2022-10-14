import React from "react";
import AppIcon from "../../../images/AppProject.svg";
import WebIcon from "../../../images/WebProject.svg";
import CreativeIcon from "../../../images/CreativeProject.svg";
import MarketIcon from "../../../images/MarketingProject.svg";
import HeartedIcon from "../../../images/Hearted.svg";
import HeartIcon from "../../../images/Heart.svg";
import OtherIcon from "../../../images/Other3dots.svg";

function ProjectCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isDisplayOther, setIsDisplayOther] = React.useState(false);

  var backgroundApp = "bg-backgroundAppIcon",
    backgroundWeb = "bg-backgroundWebIcon",
    backgroundCreative = "bg-backgroundCreateIcon",
    backgroundMarketing = "bg-backgroundMarketIcon";

  const handleClick = (e) => {
    setIsDisplayOther(!isDisplayOther);
    e.stopPropagation();
    document.addEventListener("click", closeModal);
  };

  const closeModal = () => {
    setIsDisplayOther(false);
    document.removeEventListener("click", closeModal);
  };

  return (
    <div className="px-[14px] py-[8px] relative border-outlineButton border-[1px] border-solid rounded-[8px] bg-white">
      {/**Header */}
      <div className="flex flex-row items-center justify-between">
        <div
          className={`w-[31px] h-[31px] ${
            props.type === "app"
              ? backgroundApp
              : props.type === "web"
              ? backgroundWeb
              : props.type === "marketing"
              ? backgroundMarketing
              : props.type === "creative" && backgroundCreative
          } rounded-[15px] flex items-center justify-center mr-[10px]`}
        >
          <img
            src={
              props.type === "app"
                ? AppIcon
                : props.type === "web"
                ? WebIcon
                : props.type === "creative"
                ? CreativeIcon
                : props.type === "marketing" && MarketIcon
            }
            alt=""
            className="w-[16px] h-[16px]"
          />
        </div>
        <div className="flex flex-row items-center">
          <img
            src={isLiked ? HeartedIcon : HeartIcon}
            alt=""
            className="h-[14px] w-[14px]"
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          />
          <img
            src={OtherIcon}
            alt=""
            className="ml-[10px]"
            onClick={handleClick}
          />
        </div>
      </div>
      {/**Popup Other */}
      <div
        className={`${
          isDisplayOther ? "absolute" : "hidden"
        } right-0 px-[6px] py-[8px] bg-white rounded-[7px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] z-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="textOther">Share</div>
        <div className="textOther">Rename project</div>
        <div className="textOther">Remove from favourites</div>
        <div className="textOther">Edit Project details</div>
        <div className="textOther">Copy project link</div>
      </div>

      {/**Title */}
      <div className="mt-[13px]">
        <h2 className="text-[13px] font-medium">{props.title}</h2>
        <p className="text-[11px] text-black-20 mt-[3px]">{`(${props.desc})`}</p>
      </div>

      {/**Tasks */}
      <div className="mt-[10px] flex justify-between">
        <span className="text-[12px]">Progress Task</span>
        <span className="text-[12px]">43</span>
      </div>
      <div className="mt-[10px] flex justify-between">
        <span className="text-[12px]">Complete Task</span>
        <span className="text-[12px]">16</span>
      </div>
    </div>
  );
}

export default ProjectCard;
