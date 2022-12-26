import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoSvg from "../../../images/logo.svg";
import ExpandArrow from "../../../images/ExpandArrow.svg";
import SearchIcon from "../../../images/Search.svg";
import AddIcon from "../../../images/Add.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  LOCAL_STORAGE_TOKEN_NAME,
  URL_BASE,
} from "../../../contexts/constants.js";
import {
  DisplayAddPopupSlice,
  TitleSlice,
} from "../../../redux/slice/HomeSlice";
import SkeletonHorizon from "../SkeletonLoading/SkeletonHorizon";
import {
  ChooseNavSelector,
  OpenSettingSelector,
} from "../../../redux/selector";

function Navbar(props) {
  /** STATE ONCLICK NAVITEM **/
  var chooseNav = useSelector(ChooseNavSelector);
  const [isClickedHome, setIsClickedHome] = useState(chooseNav.home);
  const [isClickedTasks, setIsClickedTasks] = useState(chooseNav.tasks);
  const [isClickedPlan, setIsClickedPlan] = useState(chooseNav.plan);
  const [isClickedInbox, setIsClickedInbox] = useState(chooseNav.inbox);
  const [isClickedPeople, setIsClickedPeople] = useState(chooseNav.people);
  const [isClickedReport, setIsClickedReport] = useState(chooseNav.report);
  const [isOpenFavourites, setIsOpenFavourites] = useState(false);
  const [isHideFavourProject, setIsHideFavourProject] = useState(false);
  const [isHideProject, setIsHideProject] = useState(false);
  const [valueSearchProject, setValueSearchProject] = useState("");

  const [recentProjects, setRecentProjects] = useState(null);
  const [hideDisplayNav, setHideDisplayNav] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.isShow) {
      getFavoriteProjects();
      setHideDisplayNav(false);
    }
  }, []);

  const getRecentProjects = async () => {
    const response = await axios
      .get(`${URL_BASE}/api/project/recent`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_NAME
          )}`,
        },
      })
      .catch((err) => console.log(err));
    if (response.data.success) {
      setRecentProjects(response.data.projects);
    }
  };

  useEffect(() => {
    getRecentProjects();
  }, []);

  const [favoriteProjects, setFavoriteProjects] = React.useState(null);
  const getFavoriteProjects = async () => {
    const response = await axios
      .get(`${URL_BASE}/api/project/favorite`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_TOKEN_NAME
          )}`,
        },
      })
      .catch((err) => console.log(err));
    if (response.data.success) {
      setFavoriteProjects(response.data.projects);
    }
  };

  useEffect(() => {
    getFavoriteProjects();
  }, []);

  /** Favourites project component **/
  const FavouritesProject = (props) => {
    const { name, avatar } = props.project;
    return (
      <div className="flex flex-row items-center mt-[10px]">
        <img
          className=" w-[24px] h-[24px] rounded-full mr-[10px]"
          src={avatar}
          alt="Project Icon"
        />
        <span className="text-[13px] dark:text-black-10">{name}</span>
      </div>
    );
  };

  return (
    <div
      className={`navBarContainer dark:bg-bgHeaderBarDark ${
        props.isShow ? "left-0" : "left-[-100%]"
      } ${
        hideDisplayNav ? "hidden left-[-100%]" : "flex flex-col"
      } select-none`}
    >
      <div className="border-b-[1px] border-b-outlineButton dark:border-b-black-50 w-full px-[10px] py-[20px]">
        <div className="flex flex-row items-center mx-[10px]">
          <img src={LogoSvg} alt="" className="h-[25px] w-[25px]" />
          <span className="ml-[5px] font-bold dark:text-white">Trim.</span>
        </div>
        <div className="mt-[25px]">
          <Link
            to="/"
            className={`flex flex-row items-center py-[5px] px-[10px] rounded-[7px] ${
              isClickedHome ? "bg-cyan" : "bg-white dark:bg-bgHeaderBarDark"
            }`}
            onClick={() => {
              dispatch(TitleSlice.actions.setTitle("Home"));
              setIsClickedHome(true);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.375 13.9604V6.7317C14.375 6.61157 14.3204 6.49833 14.2273 6.42553L8.22727 1.73343C8.09302 1.62845 7.90698 1.62845 7.77273 1.73343L1.77273 6.42553C1.67964 6.49833 1.625 6.61157 1.625 6.7317V13.9604C1.625 14.173 1.79289 14.3453 2 14.3453H14C14.2071 14.3453 14.375 14.173 14.375 13.9604ZM1.09094 5.50705C0.718563 5.79825 0.5 6.2512 0.5 6.7317V13.9604C0.5 14.8107 1.17157 15.5 2 15.5H14C14.8284 15.5 15.5 14.8107 15.5 13.9604V6.7317C15.5 6.2512 15.2814 5.79825 14.9091 5.50705L8.90907 0.814952C8.37207 0.395016 7.62793 0.395016 7.09093 0.814953L1.09094 5.50705Z"
                fill={`${isClickedHome ? "white" : "#7D838E"}`}
              />
              <path
                d="M3.875 11.5625C3.875 11.2518 4.12684 11 4.4375 11H11.5625C11.8732 11 12.125 11.2518 12.125 11.5625C12.125 11.8732 11.8732 12.125 11.5625 12.125H4.4375C4.12684 12.125 3.875 11.8732 3.875 11.5625Z"
                fill={`${isClickedHome ? "white" : "#7D838E"}`}
              />
            </svg>

            <span
              className={`text-[13px] ${
                isClickedHome
                  ? "text-white"
                  : "text-black-20 dark:text-black-10"
              } ml-[10px] mt-[1px]`}
            >
              Home
            </span>
          </Link>
          <Link
            to="/tasks"
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${
              isClickedTasks ? "bg-cyan" : "bg-white dark:bg-bgHeaderBarDark"
            }`}
            onClick={() => {
              dispatch(TitleSlice.actions.setTitle("Tasks"));
              setIsClickedHome(false);
              setIsClickedTasks(true);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3601 5.31789C11.5988 5.51677 11.631 5.87146 11.4321 6.11012L7.63831 10.6627C7.45009 10.8886 7.10855 10.9041 6.90065 10.6962L4.60225 8.39776C4.38258 8.17809 4.38258 7.82194 4.60225 7.60227C4.82192 7.3826 5.17808 7.3826 5.39775 7.60227L7.2122 9.41672L10.5679 5.38991C10.7668 5.15125 11.1214 5.11901 11.3601 5.31789Z"
                fill={`${isClickedTasks ? "white" : "#7D838E"}`}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 1.625H2C1.79289 1.625 1.625 1.79289 1.625 2V14C1.625 14.2071 1.79289 14.375 2 14.375H14C14.2071 14.375 14.375 14.2071 14.375 14V2C14.375 1.79289 14.2071 1.625 14 1.625ZM2 0.5C1.17157 0.5 0.5 1.17157 0.5 2V14C0.5 14.8284 1.17157 15.5 2 15.5H14C14.8284 15.5 15.5 14.8284 15.5 14V2C15.5 1.17157 14.8284 0.5 14 0.5H2Z"
                fill={`${isClickedTasks ? "white" : "#7D838E"}`}
              />
            </svg>

            <span
              className={`text-[13px] ${
                isClickedTasks
                  ? "text-white"
                  : "text-black-20 dark:text-black-10"
              } ml-[10px] mt-[1px]`}
            >
              My Tasks
            </span>
          </Link>
          <Link
            to="/"
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${
              isClickedPlan ? "bg-cyan" : "bg-white dark:bg-bgHeaderBarDark"
            }`}
            onClick={() => {
              dispatch(TitleSlice.actions.setTitle("Plan"));
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(true);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.68571 0.5C5.00525 0.5 5.26429 0.758297 5.26429 1.07692V2.03846H8.73571V1.07692C8.73571 0.758297 8.99475 0.5 9.31429 0.5C9.63382 0.5 9.89286 0.758297 9.89286 1.07692V2.03846H11.6286C12.8002 2.03846 13.75 2.98555 13.75 4.15385V13.3846C13.75 14.5529 12.8002 15.5 11.6286 15.5H2.37143C1.1998 15.5 0.25 14.5529 0.25 13.3846V4.15385C0.25 2.98555 1.1998 2.03846 2.37143 2.03846H4.10714V1.07692C4.10714 0.758297 4.36618 0.5 4.68571 0.5ZM4.10714 3.19231H2.37143C1.83887 3.19231 1.40714 3.6228 1.40714 4.15385V6.65385H12.5929V4.15385C12.5929 3.6228 12.1611 3.19231 11.6286 3.19231H9.89286V4.15385C9.89286 4.47247 9.63382 4.73077 9.31429 4.73077C8.99475 4.73077 8.73571 4.47247 8.73571 4.15385V3.19231H5.26429V4.15385C5.26429 4.47247 5.00525 4.73077 4.68571 4.73077C4.36618 4.73077 4.10714 4.47247 4.10714 4.15385V3.19231ZM12.5929 7.80769H1.40714V13.3846C1.40714 13.9157 1.83887 14.3462 2.37143 14.3462H11.6286C12.1611 14.3462 12.5929 13.9157 12.5929 13.3846V7.80769Z"
                fill={`${isClickedPlan ? "white" : "#7D838E"}`}
              />
            </svg>
            <span
              className={`text-[13px] ${
                isClickedPlan
                  ? "text-white"
                  : "text-black-20 dark:text-black-10"
              } ml-[10px] mt-[1px]`}
            >
              My Plan
            </span>
          </Link>
          <Link
            to="/"
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${
              isClickedInbox ? "bg-cyan" : "bg-white dark:bg-bgHeaderBarDark"
            }`}
            onClick={() => {
              dispatch(TitleSlice.actions.setTitle("Inbox"));
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(true);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 1.625H2C1.79289 1.625 1.625 1.79289 1.625 2V11.75C1.625 11.9571 1.79289 12.125 2 12.125H11.3345C11.8103 12.125 12.2771 12.2543 12.6851 12.4991L14.375 13.513V2C14.375 1.79289 14.2071 1.625 14 1.625ZM15.5 2C15.5 1.17157 14.8284 0.5 14 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V11.75C0.5 12.5784 1.17157 13.25 2 13.25H11.3345C11.6064 13.25 11.8731 13.3239 12.1063 13.4638L15.5 15.5V2Z"
                fill={`${isClickedInbox ? "white" : "#7D838E"}`}
              />
              <path
                d="M5 6.5H6.5V8H5V6.5Z"
                fill={`${isClickedInbox ? "white" : "#7D838E"}`}
              />
              <path
                d="M9.5 6.5H11V8H9.5V6.5Z"
                fill={`${isClickedInbox ? "white" : "#7D838E"}`}
              />
            </svg>
            <span
              className={`text-[13px] ${
                isClickedInbox
                  ? "text-white"
                  : "text-black-20 dark:text-black-10"
              } ml-[10px] mt-[1px]`}
            >
              Inbox
            </span>
          </Link>
          <Link
            to="/people"
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${
              isClickedPeople ? "bg-cyan" : "bg-white dark:bg-bgHeaderBarDark"
            }`}
            onClick={() => {
              dispatch(TitleSlice.actions.setTitle("People"));
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(true);
              setIsClickedReport(false);
            }}
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.11189 1.16129C5.01227 1.16129 4.17133 2.00705 4.17133 2.98925C4.17133 3.97144 5.01227 4.8172 6.11189 4.8172C7.21151 4.8172 8.05245 3.97144 8.05245 2.98925C8.05245 2.00705 7.21151 1.16129 6.11189 1.16129ZM3.01748 2.98925C3.01748 1.31097 4.43078 0 6.11189 0C7.793 0 9.20629 1.31097 9.20629 2.98925C9.20629 4.66752 7.793 5.97849 6.11189 5.97849C4.43078 5.97849 3.01748 4.66752 3.01748 2.98925ZM9.31119 0.580645C9.31119 0.259964 9.56949 0 9.88811 0C11.5692 0 12.9825 1.31097 12.9825 2.98925C12.9825 4.66752 11.5692 5.97849 9.88811 5.97849C9.56949 5.97849 9.31119 5.71853 9.31119 5.39785C9.31119 5.07717 9.56949 4.8172 9.88811 4.8172C10.9877 4.8172 11.8287 3.97144 11.8287 2.98925C11.8287 2.00705 10.9877 1.16129 9.88811 1.16129C9.56949 1.16129 9.31119 0.901327 9.31119 0.580645ZM0.5 10.2151C0.5 8.53678 1.91329 7.22581 3.59441 7.22581H8.62937C10.3105 7.22581 11.7238 8.53678 11.7238 10.2151V11.4194C11.7238 11.74 11.4655 12 11.1469 12C10.8282 12 10.5699 11.74 10.5699 11.4194V10.2151C10.5699 9.23286 9.72899 8.3871 8.62937 8.3871H3.59441C2.49478 8.3871 1.65385 9.23286 1.65385 10.2151V11.4194C1.65385 11.74 1.39555 12 1.07692 12C0.758297 12 0.5 11.74 0.5 11.4194V10.2151ZM11.514 7.80645C11.514 7.48577 11.7723 7.22581 12.0909 7.22581H12.4056C14.0867 7.22581 15.5 8.53678 15.5 10.2151V11.4194C15.5 11.74 15.2417 12 14.9231 12C14.6045 12 14.3462 11.74 14.3462 11.4194V10.2151C14.3462 9.23286 13.5052 8.3871 12.4056 8.3871H12.0909C11.7723 8.3871 11.514 8.12713 11.514 7.80645Z"
                fill={`${isClickedPeople ? "white" : "#7D838E"}`}
              />
            </svg>
            <span
              className={`text-[13px] ${
                isClickedPeople
                  ? "text-white"
                  : "text-black-20 dark:text-black-10"
              } ml-[10px] mt-[1px]`}
            >
              People
            </span>
          </Link>
          <Link
            to="/"
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${
              isClickedReport ? "bg-cyan" : "bg-white dark:bg-bgHeaderBarDark"
            }`}
            onClick={() => {
              dispatch(TitleSlice.actions.setTitle("Report"));
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(true);
            }}
          >
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 12.3125C2.25 12.0018 2.50184 11.75 2.8125 11.75H9.1875C9.49816 11.75 9.75 12.0018 9.75 12.3125C9.75 12.6232 9.49816 12.875 9.1875 12.875H2.8125C2.50184 12.875 2.25 12.6232 2.25 12.3125Z"
                fill={`${isClickedReport ? "white" : "#7D838E"}`}
              />
              <path
                d="M2.25 9.3125C2.25 9.00184 2.50184 8.75 2.8125 8.75H7.6875C7.99816 8.75 8.25 9.00184 8.25 9.3125C8.25 9.62316 7.99816 9.875 7.6875 9.875H2.8125C2.50184 9.875 2.25 9.62316 2.25 9.3125Z"
                fill={`${isClickedReport ? "white" : "#7D838E"}`}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.9375 3.5V1.625H1.5C1.29289 1.625 1.125 1.79289 1.125 2V14C1.125 14.2071 1.29289 14.375 1.5 14.375H10.5C10.7071 14.375 10.875 14.2071 10.875 14V5.5625H9C7.86091 5.5625 6.9375 4.63909 6.9375 3.5ZM12 14C12 14.8284 11.3284 15.5 10.5 15.5H1.5C0.671573 15.5 0 14.8284 0 14V2C0 1.17157 0.671573 0.5 1.5 0.5H8.25L12 4.25V14ZM10.5965 4.4375L8.0625 1.90349V3.5C8.0625 4.01777 8.48223 4.4375 9 4.4375H10.5965Z"
                fill={`${isClickedReport ? "white" : "#7D838E"}`}
              />
            </svg>

            <span
              className={`text-[13px] ${
                isClickedReport
                  ? "text-white"
                  : "text-black-20 dark:text-black-10"
              } ml-[10px] mt-[1px]`}
            >
              Reporting
            </span>
          </Link>
        </div>

        {/* Favourite Component */}
        <div
          className="mt-[20px] w-full px-[10px] mb-[10px]"
          onClick={() => {
            getFavoriteProjects();
            setIsOpenFavourites(!isOpenFavourites);
            setIsHideFavourProject(!isHideFavourProject);
          }}
        >
          <div className="flex flex-row items-center justify-between md:cursor-pointer mb-[10px]">
            <span className="text-black-20 dark:text-black-10 font-medium text-[14px]">
              Favourites
            </span>
            <img
              src={ExpandArrow}
              alt=""
              className={`ease-in duration-150 ${
                isOpenFavourites ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>
          <div className="overflow-hidden">
            <div
              className={`${
                isHideFavourProject && "mt-[-100%]"
              } transition-all`}
            >
              {favoriteProjects?.map((project) => (
                <FavouritesProject key={project._id} project={project} />
              )) || <SkeletonHorizon />}
            </div>
          </div>
        </div>
      </div>

      {/** List Project Component **/}
      <div className="px-[20px] mt-[10px] ">
        {/**Search Project */}
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center border-outlineButton dark:border-black-50 border-[2px] px-[15px] py-[8px] rounded-[18px] w-[170px] md:px-[17px] md:py-[6px]">
            <img src={SearchIcon} alt="" />
            <input
              type="text"
              placeholder="Search Project"
              className="outline-none dark:bg-bgHeaderBarDark dark:text-black-10 w-full text-[14px] md:text-[12px] font-medium text-black-20 ml-[5px]"
              value={valueSearchProject}
              onChange={(e) => {
                setValueSearchProject(e.target.value);
                if (e.target.value.length > 0) setIsHideProject(true);
                else setIsHideProject(false);
              }}
            />
          </div>
          <div
            className="bg-cyan ml-[10px] h-[36px] w-[38px] flex items-center justify-center rounded-[30px]
            md:cursor-pointer"
            onClick={() => {
              dispatch(DisplayAddPopupSlice.actions.openAddPopup());
            }}
          >
            <img src={AddIcon} alt="" />
          </div>
        </div>
        {/**List Project */}
        <div className={`mt-[15px] ${isHideProject && "hidden"}`}>
          <p className="text-black-20 dark:text-black-10 text-[14px] mb-[10px] font-medium">
            Projects
          </p>
          {recentProjects?.map((project) => (
            <FavouritesProject key={project._id} project={project} />
          )) || <SkeletonHorizon />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
