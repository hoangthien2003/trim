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
      <div className="outletContainer px-[22px] py-[18px] md:px-[35px] md:py-[22px] pt-[22px] pb-[70px] overflow-auto">
        {/**Header */}
        {window.innerWidth < 768 ? (
          <h1 className="font-medium text-[17px] dark:text-white">People</h1>
        ) : null}
        <div
          className={`w-full ${
            window.innerWidth < 768 ? "mt-[18px]" : "mt-0"
          } pb-[3px] border-b-[1px] border-outlineButton dark:border-[#848588] flex flex-row items-center`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[8px]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7009 12.7008C12.9512 12.4505 13.3571 12.4505 13.6074 12.7008L17.1459 16.2394C17.3962 16.4897 17.3962 16.8956 17.1459 17.1459C16.8956 17.3962 16.4897 17.3962 16.2394 17.1459L12.7009 13.6074C12.4505 13.357 12.4505 12.9512 12.7009 12.7008Z"
              fill="#848588"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.23117 1.94904C4.76163 1.94904 1.94902 4.76169 1.94902 8.23127C1.94902 11.7008 4.76163 14.5135 8.23117 14.5135C11.7007 14.5135 14.5133 11.7008 14.5133 8.23127C14.5133 4.76169 11.7007 1.94904 8.23117 1.94904ZM0.666992 8.23127C0.666992 4.05363 4.05359 0.666992 8.23117 0.666992C12.4087 0.666992 15.7953 4.05363 15.7953 8.23127C15.7953 12.4089 12.4087 15.7955 8.23117 15.7955C4.05359 15.7955 0.666992 12.4089 0.666992 8.23127Z"
              fill="#848588"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for people and teams"
            className="outline-none w-full text-[13px] bg-[#FBFBFB] dark:bg-bgDashboardDark
            dark:text-black-10"
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
