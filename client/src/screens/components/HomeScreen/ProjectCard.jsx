import React, { useLayoutEffect, useContext } from "react";
import HeartedIcon from "../../../images/Hearted.svg";
import HeartIcon from "../../../images/Heart.svg";
import OtherIcon from "../../../images/Other3dots.svg";
import { AuthContext } from "../../../contexts/AuthProvider.js";
import axios from "axios";
import {
  URL_BASE,
  LOCAL_STORAGE_TOKEN_NAME,
} from "../../../contexts/constants.js";
import { useDispatch } from "react-redux";
import { DisplaySharePopupSlice } from "../../../redux/slice/HomeSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function ProjectCard(props) {
  const {
    category,
    name,
    avatar,
    numberProgressTask,
    numberCompleteTask,
    lovers,
    _id,
  } = props.project;
  const [isLiked, setIsLiked] = React.useState();
  const [isDisplayOther, setIsDisplayOther] = React.useState(false);
  const { user, isLoaded } = useContext(AuthContext);
  const [members, setMembers] = React.useState(null);
  var dispatch = useDispatch();

  async function getMembers() {
    await axios
      .get(`${URL_BASE}/api/project/${_id}/members`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_NAME
          )}`,
        },
      })
      .then((res) => setMembers(res.data.members));
  }
  useLayoutEffect(() => {
    getMembers();
  }, []);

  useLayoutEffect(() => {
    lovers.forEach((member) => {
      if (member._id === user._id && member.isLove) {
        setIsLiked(true);
      }
    });
  }, [lovers, user]);

  const handleClick = async (e) => {
    setIsDisplayOther(!isDisplayOther);
    e.stopPropagation();
    document.addEventListener("click", closeModal);
  };

  async function handleChangeFavorite() {
    setIsLiked(!isLiked);
    await axios.patch(
      `${URL_BASE}/api/project/change-favorite`,
      { idProject: _id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_NAME
          )}`,
        },
      }
    );
  }

  const closeModal = () => {
    setIsDisplayOther(false);
    document.removeEventListener("click", closeModal);
  };

  return (
    <>
      <div
        className="px-[14px] py-[8px] relative border-outlineButton dark:border-black-50 border-[1px] 
    border-solid rounded-[8px] bg-white dark:bg-bgProjectCardDark"
      >
        {/**Header */}
        <div className="flex flex-row items-center justify-between">
          <div
            className={`w-[31px] h-[31px] rounded-[15px] flex items-center justify-center mr-[10px]`}
          >
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className="flex flex-row items-center">
            <img
              src={isLiked ? HeartedIcon : HeartIcon}
              alt=""
              className="h-[15px] w-[15px] md:cursor-pointer"
              onClick={handleChangeFavorite}
            />
            <img
              src={OtherIcon}
              alt=""
              className="ml-[10px] h-[14px] w-[14px] md:cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
        {/**Popup Other */}
        <div
          className={`${
            isDisplayOther ? "absolute" : "hidden"
          } right-0 px-[6px] py-[8px] bg-white dark:bg-bgOtherPopup rounded-[7px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] z-10`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="textOther"
            onClick={() => {
              dispatch(DisplaySharePopupSlice.actions.openSharePopup());
              setIsDisplayOther(false);
            }}
          >
            Share
          </div>
          <div className="textOther">Rename project</div>
          <div className="textOther">Remove from favourites</div>
          <div className="textOther">Edit Project details</div>
          <div className="textOther">Copy project link</div>
        </div>

        {/**Title */}
        <div className="mt-[13px]">
          <h2 className="text-[13px] dark:text-white font-medium">{name}</h2>
          <p className="text-[11px] text-black-20 dark:text-black-10 mt-[3px]">{`(${category})`}</p>
        </div>

        {/**Tasks */}
        <div className="mt-[10px] flex justify-between">
          <span className="text-[12px] dark:text-whitesmoke">
            Progress Task
          </span>
          <span className="text-[12px] dark:text-whitesmoke">
            {numberProgressTask}
          </span>
        </div>
        <div className="mt-[10px] flex justify-between">
          <span className="text-[12px] dark:text-whitesmoke">
            Complete Task
          </span>
          <span className="text-[12px] dark:text-whitesmoke">
            {numberCompleteTask}
          </span>
        </div>

        {/**Avatar member in project */}
        <div className="flex flex-row relative items-center mt-[15px] truncate">
          {members?.map((member) => {
            return (
              <img
                key={member._id}
                referrerPolicy="no-referrer"
                src={member.photoURL}
                alt=""
                className="h-[22px] w-[22px] rounded-full"
              />
            );
          }) || (
            <SkeletonTheme
              baseColor="#a09fa1"
              highlightColor="#c6c5c7"
              inline={true}
            >
              <Skeleton circle={true} count={3} height={25} width={25} />
            </SkeletonTheme>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
