import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShowProfileModalSelector } from "../../../redux/selector";
import ProjectCard from "./ProjectCard";
import WorkedOn from "./WorkedOnComponent";
import AvtIcon from "../../../images/Avatar.png";
import { auth } from "../../../firebase/config";
import { LOCAL_STORAGE_TOKEN_NAME, URL_BASE } from "../../../contexts/constants.js";
import axios from "axios"
import { AuthContext } from "../../../contexts/AuthProvider.js"

function Home() {
  var isShowProfile = useSelector(ShowProfileModalSelector);
  const [spanColor01, setSpanColor01] = React.useState("text-purple");
  const [spanColor02, setSpanColor02] = React.useState("text-black-200");
  const [spanColor03, setSpanColor03] = React.useState("text-black-200");
  const [requestLogOut, setRequestLogOut] = useState(false);
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);

  const [translateBottomBar, setTranslateBottomBar] =
    React.useState("translate-x-[0px]");
  const [widthBottomBar, setWidthBottomBar] = React.useState("w-[120px]");
  const [typeProject, setTypeProject] = React.useState(1);

  const [toggleButtonActive, setToggleButtonActive] = React.useState(false);
  const [toggleButtonDarkMode, setToggleButtonDarkMode] = React.useState(false);

  function handelLogOut() {
    setRequestLogOut(true);
  }

  useEffect(() => {
    if (requestLogOut) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      auth.signOut();
      navigate("/login");
    }
  }, [requestLogOut, navigate]);

  function RecentProject() {
    const [recentProjects, setRecentProjects] = React.useState(null);

    const getRecentProjects = async () => {
      const response = await axios.get(`${URL_BASE}/api/project/recent`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)}`
          }
        })
        .catch(err => console.log(err));
      if (response.data.success) {
        setRecentProjects(response.data.projects);
      }
    }

    useEffect(() => {
      getRecentProjects();
    }, []);

    return (
      <div className="grid grid-cols-2 gap-[12px] mt-[20px] px-[20px]">
        {
          recentProjects?.map(project => {
            return <ProjectCard key={project._id} project={project} />
          })
        }
      </div>
    );
  }

  function Favorites() {
    const [favoriteProjects, setFavoriteProjects] = useState(null);
    const getFavoriteProjects = async () => {
      const response = await axios.get(`${URL_BASE}/api/project/favorite`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)}`
          }
        })
        .catch(err => console.log(err));
      if (response.data.success) {
        setFavoriteProjects(response.data.projects);
      }
    }

    useEffect(() => {
      getFavoriteProjects();
    }, []);

    return (
      <div className="grid grid-cols-2 gap-[12px] mt-[20px] px-[20px]">
        {
          favoriteProjects?.map(project => {
            return <ProjectCard key={project._id} project={project} />
          })
        }
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
      {/**Modal Profile */}
      <div
        className={`${isShowProfile ? "absolute" : "hidden"
          } top-1 bg-white rounded-[7px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] z-10 right-8`}
      >
        <div className="flex flex-row items-center py-[14px] px-[18px]">
          <img src={AvtIcon} alt="" />
          <div className="flex flex-col ml-[9px]">
            <span className="text-[13px] font-medium whitespace-nowrap">
              Tajul Islam
            </span>
            <span className="text-[12px] text-black-20">
              {"tajulislam@gmail.com"}
            </span>
          </div>
        </div>
        <div className="h-[1px] w-full bg-outlineButton"></div>
        <div className="mt-[15px] px-[18px]">
          <div
            className="flex flex-row w-full items-center justify-between mb-[10px]"
            onClick={() => {
              setToggleButtonActive(!toggleButtonActive);
            }}
          >
            <span className="text-[11px]">Active Status</span>
            <div
              className={`h-[13px] w-[26px] rounded-[10px] ${toggleButtonActive ? "bg-cyan" : "bg-outlineButton"
                } flex items-center px-[1px]`}
            >
              <div
                className={`h-[10px] w-[10px] bg-white rounded-[14px] ${toggleButtonActive ? "translate-x-[14px]" : "translate-x-0"
                  } transition ease-linear duration-250`}
              ></div>
            </div>
          </div>
          <div
            className="flex flex-row w-full items-center justify-between pb-[15px]"
            onClick={() => {
              setToggleButtonDarkMode(!toggleButtonDarkMode);
            }}
          >
            <span className="text-[11px]">Dark Mode</span>
            <div
              className={`h-[13px] w-[26px] rounded-[10px] ${toggleButtonDarkMode ? "bg-cyan" : "bg-outlineButton"
                } flex items-center px-[1px]`}
            >
              <div
                className={`h-[10px] w-[10px] bg-white rounded-[14px] ${toggleButtonDarkMode ? "translate-x-[14px]" : "translate-x-0"
                  } transition ease-linear duration-250`}
              ></div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-outlineButton"></div>
        <div className="mt-[12px] px-[18px] mb-[12px]">
          <p className="text-[11px] mb-[10px]">Setting</p>
          <p className="text-[11px]" onClick={handelLogOut}>
            Log out
          </p>
        </div>
      </div>
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
