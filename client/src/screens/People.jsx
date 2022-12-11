import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../images/Search.svg";
import SearchDark from "../images/SearchDark.svg";
import { DarkModeSelector } from "../redux/selector";
import PeopleComponent from "./components/PeopleScreen/PeopleComponent";
import Team from "./components/PeopleScreen/Team";

function People() {
  var isDarkMode = useSelector(DarkModeSelector);
  var colorBorderChoosed = "border-b-purple dark:border-b-white",
    colorBorderNormal = "border-b-[#FBFBFB] dark:border-b-bgDashboardDark",
    colorSpanChoosed = "text-purple dark:text-white",
    colorSpanNormal = "text-black-200 dark:text-black-10";
  const [colorPeopleText, setColorPeopleText] = useState(colorSpanChoosed);
  const [colorTeamText, setColorTeamText] = useState(colorSpanNormal);
  const [colorPeopleBottomBar, setColorPeopleBottomBar] =
    useState(colorBorderChoosed);
  const [colorTeamBottomBar, setColorTeamBottomBar] =
    useState(colorBorderNormal);
  const [isChoosePeople, setIsChoosePeople] = useState(true);

  return (
    <>
      <div className="outletContainer px-[22px] overflow-scroll py-[18px] md:px-[35px] md:py-[22px]">
        {/**Header */}
        {window.innerWidth < 768 ? (
          <h1 className="font-medium text-[17px]">People</h1>
        ) : null}
        <div
          className={`w-full ${
            window.innerWidth < 768 ? "mt-[18px]" : "mt-0"
          } pb-[3px] border-b-[1px] border-outlineButton flex flex-row items-center`}
        >
          <img
            src={isDarkMode ? SearchDark : Search}
            alt=""
            className="mr-[7px]"
          />
          <input
            type="text"
            placeholder="Search for people and teams"
            className="outline-none w-full text-[13px] bg-[#FBFBFB] dark:bg-bgDashboardDark"
          />
        </div>
        {/**Body */}
        <div className="flex flex-row mt-[15px] md:mt-[22px]">
          <div
            className={`${colorPeopleBottomBar} border-b-[2px] py-[5px] border-solid cursor-pointer`}
            onClick={() => {
              setIsChoosePeople(true);
              setColorPeopleText(colorSpanChoosed);
              setColorPeopleBottomBar(colorBorderChoosed);
              setColorTeamText(colorSpanNormal);
              setColorTeamBottomBar(colorBorderNormal);
            }}
          >
            <h2
              className={`${colorPeopleText} text-[13px] md:text-[15px] font-medium`}
            >
              People
            </h2>
          </div>
          <div
            className={`${colorTeamBottomBar} border-b-[2px] py-[5px] border-solid cursor-pointer ml-[40px] md:ml-[58px]`}
            onClick={() => {
              setIsChoosePeople(false);
              setColorPeopleText(colorSpanNormal);
              setColorPeopleBottomBar(colorBorderNormal);
              setColorTeamText(colorSpanChoosed);
              setColorTeamBottomBar(colorBorderChoosed);
            }}
          >
            <h2
              className={`${colorTeamText} text-[13px] md:text-[15px] font-medium`}
            >
              Your teams
            </h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-[10px] md:gap-[26px] mt-[20px]">
          {isChoosePeople ? <PeopleComponent /> : <Team />}
        </div>
      </div>
    </>
  );
}

export default People;
