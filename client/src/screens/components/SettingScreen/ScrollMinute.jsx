import React, { useEffect, useState } from "react";

function ScrollMinute(props) {
  const { setMinutes, defaultMinute } = props;
  var minuteArr = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  function getItemMinuteArray() {
    for (let i = 0; i < 12; i++) {
      let el = document.getElementById(`minute${i}`);
      if (!el.getBoundingClientRect()) return;
      let elY = Math.ceil(el.getBoundingClientRect().y);
      if (elY >= 360 && elY <= 368) {
        setMinutes(el.innerHTML);
        break;
      }
    }
  }

  return (
    <div
      id="minuteDiv"
      className="overflow-auto scroll-smooth h-[105px] text-center"
      onScroll={getItemMinuteArray}
    >
      <div className="h-[21px]"></div>
      <div className="h-[21px]"></div>
      {minuteArr.map((minute, key) => {
        return (
          <p className="text-[14px]" key={key} id={`minute${key}`}>
            {minute}
          </p>
        );
      })}
      <div className="h-[21px]"></div>
      <div className="h-[21px]"></div>
    </div>
  );
}

export default ScrollMinute;
