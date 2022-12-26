import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";

function ScrollHour(props) {
  const { setTime, defaultTime } = props;

  var hourArray = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  function getItemHourArray() {
    for (let i = 0; i < 12; i++) {
      let el = document.getElementById(`hour${i}`);
      if (!el.getBoundingClientRect()) return;
      let elY = Math.ceil(el.getBoundingClientRect().y);
      if (elY >= 360 && elY <= 368) {
        setTime(el.innerHTML);
        break;
      }
    }
  }

  return (
    <div
      id="hourDiv"
      className="overflow-auto scroll-smooth h-[105px] text-center"
      onScroll={getItemHourArray}
    >
      <div className="h-[21px]"></div>
      <div className="h-[21px]"></div>
      {hourArray.map((hour, key) => {
        return (
          <p className="text-[14px]" key={key} id={`hour${key}`}>
            {hour}
          </p>
        );
      })}
      <div className="h-[21px]"></div>
      <div className="h-[21px]"></div>
    </div>
  );
}

export default ScrollHour;
