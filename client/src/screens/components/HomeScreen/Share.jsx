import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplaySharePopupSelector } from "../../../redux/selector";
import { DisplaySharePopupSlice } from "../../../redux/slice/HomeSlice";

function Share() {
  var displaySharePopup = useSelector(DisplaySharePopupSelector);
  var dispatch = useDispatch();
  return (
    <div
      className={`${
        displaySharePopup ? "absolute" : "hidden"
      } select-none flex justify-center items-center z-30 inset-0 bg-[rgba(0,0,0,0.5)]`}
    >
      <div className="bg-white">Share</div>
      <div
        onClick={() => {
          dispatch(DisplaySharePopupSlice.actions.closeSharePopup());
        }}
      >
        close
      </div>
    </div>
  );
}

export default Share;
