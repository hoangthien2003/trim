import React from "react";
import ProjectCard from "./ProjectCard";

function Home() {
  const [spanColor01, setSpanColor01] = React.useState("text-purple");
  const [spanColor02, setSpanColor02] = React.useState("text-black-200");
  const [spanColor03, setSpanColor03] = React.useState("text-black-200");

  const [translateBottomBar, setTranslateBottomBar] =
    React.useState("translate-x-[0px]");
  const [widthBottomBar, setWidthBottomBar] = React.useState("w-[120px]");

  return (
    <div className="bg-[#FBFBFB] relative h-screen justify-center pt-[30px] px-[20px]">
      <div className="flex justify-around w-full">
        <span
          className={`${spanColor01} text-[15px] font-medium`}
          onClick={() => {
            setSpanColor01("text-purple");
            setSpanColor02("text-black-200");
            setSpanColor03("text-black-200");
            setTranslateBottomBar("translate-x-[0px]");
            setWidthBottomBar("w-[120px]");
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
            setTranslateBottomBar("translate-x-[230px]");
            setWidthBottomBar("w-[89px]");
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
      {/**Project Card Component */}
      <div className="grid grid-cols-2 gap-[12px] grid-rows-2 mt-[20px]">
        <ProjectCard type="app" title="App Development" desc="Development" />
        <ProjectCard type="web" title="Web Design" desc="Design" />
        <ProjectCard type="creative" title="Creative Project" desc="Design" />
        <ProjectCard
          type="marketing"
          title="Marketing & Sales"
          desc="Marketing"
        />
      </div>
    </div>
  );
}

export default Home;
