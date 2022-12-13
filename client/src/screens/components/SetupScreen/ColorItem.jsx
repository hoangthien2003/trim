import React from "react";
import { useSelector } from "react-redux";
import { DarkModeSelector, IDColorSelector } from "../../../redux/selector";
const ColorItem = (props) => {
  var darkModeSelector = useSelector(DarkModeSelector);
  const chooseID = useSelector(IDColorSelector);
  var opacity = "opacity-60",
    border;
  if (chooseID === props.id) {
    opacity = "opacity-100";
    border = `${props.borderColor}`;
  } else {
    opacity = "opacity-60";
    border = "border-white";
  }
  return (
    <div
      className={`colorItem ${
        darkModeSelector ? "border-bgProjectCardDark" : "border-white"
      } ${props.hoverBorderColor} ${opacity} ${border}`}
    >
      <div
        className={`colorDiv ${props.backgroundColor}`}
        id={props.id}
        onClick={(e) => {
          e.preventDefault();
        }}
      ></div>
    </div>
  );
};
export default ColorItem;
