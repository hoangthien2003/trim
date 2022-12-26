import React, { useState } from "react";
import PropTypes from "prop-types";
import ScrollHour from "./ScrollHour";
import ScrollMinute from "./ScrollMinute";
import "./style.css";
import ScrollMidday from "./ScrollMidday";

const propsRequiredCheck = (props, propName, componentName) => {
  if (!props.isStart && !props.isEnd) {
    return new Error(
      `One of props 'isStart' or 'isEnd' was not specified in '${componentName}'.`
    );
  }
};

function TimeSelect(props) {
  const { isStart, isEnd } = props;
  const [time, setTime] = useState(isStart ? "10" : "07");
  const [minutes, setMinutes] = useState("00");
  const [midday, setMidday] = useState(isStart ? "AM" : "PM");
  const [isOpen, setOpen] = useState(null);
  return (
    <div
      className="relative md:hover:cursor-pointer"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div
        className="flex flex-row items-center justify-center w-[87px] h-[36px]
          border-[1px] border-outlineButton rounded-[6px]"
      >
        <div className="flex flex-row items-center mr-[5px]">
          <p className="text-[14px]">{time}</p>
          <p className="text-[14px] mx-[2px]">:</p>
          <p className="text-[14px]">{minutes}</p>
        </div>
        <p className="text-[14px]">{midday}</p>
      </div>
      {/**Modal */}
      <div
        className={`absolute ${
          isOpen ? "visible" : "hidden"
        } z-10 bg-white dark:bg-bgOtherPopup rounded-[12px] mt-[2px] 
            shadow-xl border-[1px] border-outlineButton dark:border-none px-[8px] py-[6px]
            flex flex-row items-center`}
      >
        <ScrollHour setTime={setTime} defaultTime={time} />
        <p className="text-[14px] mx-[1px]">:</p>
        <ScrollMinute setMinutes={setMinutes} defaultMinute={minutes} />
        <ScrollMidday setMidday={setMidday} defaultMidday={midday} />
      </div>
    </div>
  );
}

TimeSelect.propTypes = {
  isStart: propsRequiredCheck && PropTypes.bool,
  isEnd: propsRequiredCheck && PropTypes.bool,
};

export default TimeSelect;
