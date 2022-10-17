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

  const [translateBottomBar, setTranslateBottomBar] =
    React.useState("translate-x-[0px]");
  const [widthBottomBar, setWidthBottomBar] = React.useState("w-[120px]");
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
      <div className="grid grid-cols-2 gap-[12px] mt-[20px] px-[20px]">
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
      <div className="grid grid-cols-2 gap-[12px] mt-[20px] px-[20px]">
        {favoriteProjects?.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </div>
    );
  }

  function WorkedOnComponent() {
    return (
      <div className="mt-[20px]">
        <WorkedOn />
      </div>
    );
  }

  return (
    <div className="bg-[#FBFBFB] relative h-screen justify-center pt-[30px]">
      <div className="px-[20px]">
        <div className="flex justify-between w-full px-[20px]">
          <span
            className={`${spanColor01} text-[15px] font-medium`}
            onClick={() => {
              setSpanColor01("text-purple");
              setSpanColor02("text-black-200");
              setSpanColor03("text-black-200");
              setTranslateBottomBar("translate-x-[0px]");
              setWidthBottomBar("w-[130px]");
              setTypeProject(1);
            }}
          >
            Recent Project
          </span>
          <span
            className={`${spanColor02} text-[15px] font-medium`}
            onClick={() => {
              setSpanColor01("text-black-200");
              setSpanColor02("text-purple");
              setSpanColor03("text-black-200");
              setTranslateBottomBar("translate-x-[127px]");
              setWidthBottomBar("w-[90px]");
              setTypeProject(2);
            }}
          >
            Favorites
          </span>
          <span
            className={`${spanColor03} text-[15px] font-medium`}
            onClick={() => {
              setSpanColor01("text-black-200");
              setSpanColor02("text-black-200");
              setSpanColor03("text-purple");
              setTranslateBottomBar("translate-x-[220px]");
              setWidthBottomBar("w-[99px]");
              setTypeProject(3);
            }}
          >
            Worked on
          </span>
        </div>
        <div className="mt-[6px] px-[8px]">
          <div
            className={`${widthBottomBar} h-[1.5px] ${translateBottomBar} ease-in duration-200 rounded-[15px] bg-purple`}
          ></div>
          <div className="w-full h-[1px] bg-outlineButton"></div>
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
