import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import WorkedOn from "./WorkedOnComponent";
import {
  LOCAL_STORAGE_TOKEN_NAME,
  URL_BASE,
} from "../../../contexts/constants.js";
import axios from "axios";

function Home() {
  const [spanColor01, setSpanColor01] = React.useState("text-purple");
  const [spanColor02, setSpanColor02] = React.useState("text-black-200");
  const [spanColor03, setSpanColor03] = React.useState("text-black-200");
  const [recentBottomBarColor, setRecentBottomBarColor] =
    React.useState("border-b-purple");
  const [favourBottomBarColor, setFavourBottomBarColor] =
    React.useState("border-b-[#FBFBFB]");
  const [workedOnBottomBarColor, setWorkedOnBottomBarColor] =
    React.useState("border-b-[#FBFBFB]");

  const [typeProject, setTypeProject] = React.useState(1);

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
        })}
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
        })}
      </div>
    );
  }

  function WorkedOnComponent() {
    return (
      <div className={`mt-[20px] `}>
        <WorkedOn />
      </div>
    );
  }

  return (
    <div className="bg-[#FBFBFB] relative h-screen justify-center pt-[15px]">
      <div className="px-[20px]">
        <div className="flex justify-between w-full px-[20px]">
          <div
            className={`${recentBottomBarColor} border-b-[2px] p-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setRecentBottomBarColor("border-b-purple");
              setFavourBottomBarColor("border-b-[#FBFBFB]");
              setWorkedOnBottomBarColor("border-b-[#FBFBFB]");
            }}
          >
            <span
              className={`${spanColor01} text-[15px] font-medium`}
              onClick={() => {
                setSpanColor01("text-purple");
                setSpanColor02("text-black-200");
                setSpanColor03("text-black-200");
                setTypeProject(1);
              }}
            >
              Recent Project
            </span>
          </div>
          <div
            className={`${favourBottomBarColor} border-b-[2px] p-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setRecentBottomBarColor("border-b-[#FBFBFB]");
              setFavourBottomBarColor("border-b-purple");
              setWorkedOnBottomBarColor("border-b-[#FBFBFB]");
            }}
          >
            <span
              className={`${spanColor02} text-[15px] font-medium`}
              onClick={() => {
                setSpanColor01("text-black-200");
                setSpanColor02("text-purple");
                setSpanColor03("text-black-200");
                setTypeProject(2);
              }}
            >
              Favorites
            </span>
          </div>
          <div
            className={`${workedOnBottomBarColor} border-b-[2px] p-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setRecentBottomBarColor("border-b-[#FBFBFB]");
              setFavourBottomBarColor("border-b-[#FBFBFB]");
              setWorkedOnBottomBarColor("border-b-purple");
            }}
          >
            <span
              className={`${spanColor03}  text-[15px] font-medium`}
              onClick={() => {
                setSpanColor01("text-black-200");
                setSpanColor02("text-black-200");
                setSpanColor03("text-purple");
                setTypeProject(3);
              }}
            >
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
