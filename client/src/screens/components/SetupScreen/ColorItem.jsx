import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IDColorSelector } from "../../../redux/selector";
import { ColorSlice, IDColorSlice } from "../../../redux/slice/SetupScreen";

const ColorItem = (props) => {
  const chooseID = useSelector(IDColorSelector);
  var opacity = "opacity-60",
    borderColor;
  const dispatch = useDispatch();
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
      onClick={() => {
        dispatch(ColorSlice.actions.setColor(props.color));
        dispatch(IDColorSlice.actions.setID(props.id));
      }}
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
