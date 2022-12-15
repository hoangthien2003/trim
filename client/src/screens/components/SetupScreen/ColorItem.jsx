import React, {useState} from "react";
import { useSelector } from "react-redux";
import { IDColorSelector } from "../../../redux/selector";
const ColorItem = (props) => {
  const chooseID = useSelector(IDColorSelector);
  var opacity = "opacity-60", borderColor; 
  if (chooseID === props.id) {
    opacity = "opacity-100";
    borderColor = props.borderColor;
  } else {
    opacity = "opacity-60";
    borderColor = "border-white dark:border-bgProjectCardDark";
  }
  return (
    <div
      className={`colorItem ${props.hoverBorderColor} ${opacity} ${borderColor}`}
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
