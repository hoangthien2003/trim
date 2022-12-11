import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import BoxCheckIcon from "../../../images/BoxCheck.svg";
import {
  LOCAL_STORAGE_TOKEN_NAME,
  URL_BASE,
} from "../../../contexts/constants.js";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../SkeletonLoading/SkeletonCard";
import { useDispatch, useSelector } from "react-redux";
import { ColorLoadingSelector } from "../../../redux/selector";

function Home() {
  const dispatch = useDispatch();
  var colorLoading = useSelector(ColorLoadingSelector);
  const [spanColor01, setSpanColor01] = useState("text-purple dark:text-white");
  const [spanColor02, setSpanColor02] = useState(
    "text-black-200 dark:text-black-10"
  );
  const [spanColor03, setSpanColor03] = useState(
    "text-black-200 dark:text-black-10"
  );
  const [recentBottomBarColor, setRecentBottomBarColor] = useState(
    "border-b-purple dark:border-b-white"
  );
  const [favourBottomBarColor, setFavourBottomBarColor] = useState(
    "border-b-[#FBFBFB] dark:border-b-bgDashboardDark"
  );
  const [workedOnBottomBarColor, setWorkedOnBottomBarColor] = useState(
    "border-b-[#FBFBFB] dark:border-b-bgDashboardDark"
  );
  const [typeProject, setTypeProject] = React.useState(1);
  var colorBorderChoosed = "border-b-purple dark:border-b-white",
    colorBorderNormal = "border-b-[#FBFBFB] dark:border-b-bgDashboardDark",
    colorSpanChoosed = "text-purple dark:text-white",
    colorSpanNormal = "text-black-200 dark:text-black-10";

  function RecentProject() {
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

    return (
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-[12px] mt-[20px] px-[20px] `}
      >
        {recentProjects?.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        }) || (
          <>
            <SkeletonCard colorLoading={colorLoading} />
            <SkeletonCard colorLoading={colorLoading} />
            <SkeletonCard colorLoading={colorLoading} />
          </>
        )}
      </div>
    );
  }

  function Favorites() {
    const [favoriteProjects, setFavoriteProjects] = useState(null);
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

    return (
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-[12px] mt-[20px] px-[20px] `}
      >
        {favoriteProjects?.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        }) || <SkeletonCard />}
      </div>
    );
  }

  function WorkedOnComponent() {
    return (
      <div className={`mt-[20px] overflow-scroll `}>
        <div className="grid grid-cols-12 w-full px-[20px] py-[15px] md:py-[10px] border-y-[2px] border-outlineButton border-solid">
          <div className="flex items-center justify-center col-span-1">
            <img
              src={BoxCheckIcon}
              alt="Box Check icon"
              className="h-[15px] w-[15px]"
            />
          </div>
          <div className="flex items-center col-span-7">
            <span className="text-[13px] font-medium truncate">
              Design Stage
            </span>
          </div>
          <div className="flex flex-row items-center col-span-3">
            <div className={`h-[6px] w-[9px] rounded-[2px] bg-red-50`}></div>
            <span className="text-[12px] md:text-[13px] text-black-100 whitespace-nowrap ml-[5px]">
              App Development
            </span>
          </div>
          <div className="flex text-[12px] md:text-[13px] text-black-100 items-center justify-center col-span-1">
            <span>Thursday</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="outletContainer">
      <div className="px-[20px]">
        <div className="flex justify-between w-full px-[20px]">
          <div
            className={`${recentBottomBarColor} border-b-[2px] p-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setRecentBottomBarColor(colorBorderChoosed);
              setSpanColor01(colorSpanChoosed);
              setSpanColor02(colorSpanNormal);
              setSpanColor03(colorSpanNormal);
              setFavourBottomBarColor(colorBorderNormal);
              setWorkedOnBottomBarColor(colorBorderNormal);
              setTypeProject(1);
            }}
          >
            <span
              className={`${spanColor01} dark:text-white text-[15px] font-medium`}
            >
              Recent Project
            </span>
          </div>
          <div
            className={`${favourBottomBarColor} border-b-[2px] p-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setRecentBottomBarColor(colorBorderNormal);
              setFavourBottomBarColor(colorBorderChoosed);
              setWorkedOnBottomBarColor(colorBorderNormal);
              setSpanColor01(colorSpanNormal);
              setSpanColor02(colorSpanChoosed);
              setSpanColor03(colorSpanNormal);
              setTypeProject(2);
            }}
          >
            <span className={`${spanColor02} text-[15px] font-medium`}>
              Favorites
            </span>
          </div>
          <div
            className={`${workedOnBottomBarColor} border-b-[2px] p-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setRecentBottomBarColor(colorBorderNormal);
              setFavourBottomBarColor(colorBorderNormal);
              setWorkedOnBottomBarColor(colorBorderChoosed);
              setSpanColor01(colorSpanNormal);
              setSpanColor02(colorSpanNormal);
              setSpanColor03(colorSpanChoosed);
              setTypeProject(3);
            }}
          >
            <span className={`${spanColor03}  text-[15px] font-medium`}>
              Worked on
            </span>
          </div>
        </div>
      </div>
      {/**Project Card Component */}
      {typeProject === 1 ? (
        <RecentProject />
      ) : typeProject === 2 ? (
        <Favorites />
      ) : (
        typeProject === 3 && <WorkedOnComponent />
      )}
    </div>
  );
}

export default Home;
