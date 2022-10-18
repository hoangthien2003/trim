import React, { useEffect } from "react";
import LogoSvg from "../../../images/logo.svg";
import HomeLight from "../../../images/Home.svg";
import HomeDark from "../../../images/HomeBlack.svg";
import InboxLight from "../../../images/InboxLight.svg";
import InboxDark from "../../../images/Inbox.svg";
import PeopleLight from "../../../images/PeopleLight.svg";
import PeopleDark from "../../../images/People.svg";
import PlanLight from "../../../images/PlanLight.svg";
import PlanDark from "../../../images/Plan.svg";
import ReportDark from "../../../images/Report.svg";
import ReportLight from "../../../images/ReportLight.svg";
import TasksDark from "../../../images/Tasks.svg";
import TasksLight from "../../../images/TasksLight.svg";
import ExpandArrow from "../../../images/ExpandArrow.svg";
import AppProject from "../../../images/AppProject.svg";
import WebProject from "../../../images/WebProject.svg";
import CreativeProject from "../../../images/CreativeProject.svg";
import MarketingProject from "../../../images/MarketingProject.svg";
import SearchIcon from "../../../images/Search.svg";
import AddIcon from "../../../images/Add.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { LOCAL_STORAGE_TOKEN_NAME, URL_BASE } from "../../../contexts/constants.js"

function Navbar(props) {
  /** STATE ONCLICK NAVITEM **/
  const [isClickedHome, setIsClickedHome] = React.useState(true);
  const [isClickedTasks, setIsClickedTasks] = React.useState(false);
  const [isClickedPlan, setIsClickedPlan] = React.useState(false);
  const [isClickedInbox, setIsClickedInbox] = React.useState(false);
  const [isClickedPeople, setIsClickedPeople] = React.useState(false);
  const [isClickedReport, setIsClickedReport] = React.useState(false);

  const [isOpenFavourites, setIsOpenFavourites] = React.useState(false);
  const [isHideFavourProject, setIsHideFavourProject] = React.useState(false);
  const [isHideProject, setIsHideProject] = React.useState(false);
  const [valueSearchProject, setValueSearchProject] = React.useState("");

  const [recentProjects, setRecentProjects] = React.useState(null);

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
        <img className=" w-[24px] h-[24px] rounded-full mr-[10px]" src={avatar} alt="Project Icon" />
        <span className="text-[13px]">{name}</span>
      </div>
    );
  };

  return (
    <div
      className={`navBarContainer ${props.isHide ? "left-0" : "left-[-100%]"}`}
    >
      <div className="border-b-[1px] border-b-outlineButton w-full px-[10px] py-[20px]">
        <div className="flex flex-row items-center mx-[10px]">
          <img src={LogoSvg} alt="" className="h-[25px] w-[25px]" />
          <span className="ml-[5px] font-bold">Trim.</span>
        </div>
        <div className="mt-[25px]">
          <Link
            to="/"
            className={`flex flex-row items-center py-[5px] px-[10px] rounded-[7px] ${isClickedHome ? "bg-cyan" : "bg-white"
              }`}
            onClick={() => {
              setIsClickedHome(true);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <img
              src={isClickedHome ? HomeLight : HomeDark}
              alt=""
              className="h-[16px] w-[16px]"
            />
            <span
              className={`text-[13px] ${isClickedHome ? "text-white" : "text-black-20"
                } ml-[10px] mt-[1px]`}
            >
              Home
            </span>
          </Link>
          <Link
            to="/tasks"
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${isClickedTasks ? "bg-cyan" : "bg-white"
              }`}
            onClick={() => {
              setIsClickedHome(false);
              setIsClickedTasks(true);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <img
              src={isClickedTasks ? TasksLight : TasksDark}
              alt=""
              className="h-[16px] w-[16px]"
            />
            <span
              className={`text-[13px] ${isClickedTasks ? "text-white" : "text-black-20"
                } ml-[10px] mt-[1px]`}
            >
              My Tasks
            </span>
          </Link>
          <div
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${isClickedPlan ? "bg-cyan" : "bg-white"
              }`}
            onClick={() => {
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(true);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <img
              src={isClickedPlan ? PlanLight : PlanDark}
              alt=""
              className="h-[16px] w-[16px]"
            />
            <span
              className={`text-[13px] ${isClickedPlan ? "text-white" : "text-black-20"
                } ml-[10px] mt-[1px]`}
            >
              My Plan
            </span>
          </div>
          <div
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${isClickedInbox ? "bg-cyan" : "bg-white"
              }`}
            onClick={() => {
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(true);
              setIsClickedPeople(false);
              setIsClickedReport(false);
            }}
          >
            <img
              src={isClickedInbox ? InboxLight : InboxDark}
              alt=""
              className="h-[16px] w-[16px]"
            />
            <span
              className={`text-[13px] ${isClickedInbox ? "text-white" : "text-black-20"
                } ml-[10px] mt-[1px]`}
            >
              Inbox
            </span>
          </div>
          <div
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${isClickedPeople ? "bg-cyan" : "bg-white"
              }`}
            onClick={() => {
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(true);
              setIsClickedReport(false);
            }}
          >
            <img
              src={isClickedPeople ? PeopleLight : PeopleDark}
              alt=""
              className="h-[16px] w-[16px]"
            />
            <span
              className={`text-[13px] ${isClickedPeople ? "text-white" : "text-black-20"
                } ml-[10px] mt-[1px]`}
            >
              People
            </span>
          </div>
          <div
            className={`flex flex-row items-center mt-[5px] py-[5px] px-[10px] rounded-[7px] ${isClickedReport ? "bg-cyan" : "bg-white"
              }`}
            onClick={() => {
              setIsClickedHome(false);
              setIsClickedTasks(false);
              setIsClickedPlan(false);
              setIsClickedInbox(false);
              setIsClickedPeople(false);
              setIsClickedReport(true);
            }}
          >
            <img
              src={isClickedReport ? ReportLight : ReportDark}
              alt=""
              className="h-[16px] w-[16px]"
            />
            <span
              className={`text-[13px] ${isClickedReport ? "text-white" : "text-black-20"
                } ml-[10px] mt-[1px]`}
            >
              Reporting
            </span>
          </div>
        </div>

        {/* Favourite Component */}
        <div
          className="mt-[20px] w-full px-[10px] mb-[10px]"
          onClick={() => {
            setIsOpenFavourites(!isOpenFavourites);
            setIsHideFavourProject(!isHideFavourProject);
          }}
        >
          <div className="flex flex-row items-center justify-between">
            <span className="text-black-20 font-medium text-[15px]">
              Favourites
            </span>
            <img
              src={ExpandArrow}
              alt=""
              className={`ease-in duration-150 ${isOpenFavourites ? "rotate-0" : "rotate-180"
                }`}
            />
          </div>
          <div className="overflow-hidden">
            <div
              className={`${isHideFavourProject && "mt-[-100%]"
                } transition-all`}
            >
              {
                favoriteProjects?.map(project =>
                  <FavouritesProject key={project._id} project={project} />
                )
              }
            </div>
          </div>
        </div>
      </div>

      {/** List Project Component **/}
      <div className="px-[20px] mt-[10px] ">
        {/**Search Project */}
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center border-outlineButton border-[2px] px-[15px] py-[8px] rounded-[18px] w-[170px]">
            <img src={SearchIcon} alt="" />
            <input
              type="text"
              placeholder="Search Project"
              className="outline-none w-full text-[14px] font-medium text-black-20 ml-[5px]"
              value={valueSearchProject}
              onChange={(e) => {
                setValueSearchProject(e.target.value);
                if (e.target.value.length > 0) setIsHideProject(true);
                else setIsHideProject(false);
              }}
            />
          </div>
          <div className="bg-cyan ml-[10px] h-[36px] w-[38px] flex items-center justify-center rounded-[30px]">
            <img src={AddIcon} alt="" />
          </div>
        </div>
        {/**List Project */}
        <div className={`mt-[15px] ${isHideProject && "hidden"}`}>
          <span className="text-black-20 text-[15px] font-medium">
            Projects
          </span>
          {recentProjects?.map(project =>
            <FavouritesProject key={project._id} project={project} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
