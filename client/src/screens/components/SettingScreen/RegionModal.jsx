import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LanguageSlice } from "../../../redux/slice/SettingSlice";

const RegionModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="overflow-auto md:h-[210px]">
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Sunday"));
        }}
      >
        <input type="radio" name="startDay" id="Sunday" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Sunday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Monday"));
        }}
      >
        <input type="radio" name="startDay" id="Monday" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Monday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Tuesday"));
        }}
      >
        <input
          type="radio"
          name="startDay"
          id="Tuesday"
          className="mr-[10px]"
        />
        <p className="text-[14px] dark:text-whitesmoke">Tuesday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Wednesday"));
        }}
      >
        <input
          type="radio"
          name="startDay"
          id="Wednesday"
          className="mr-[10px]"
        />
        <p className="text-[14px] dark:text-whitesmoke">Wednesday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Thursday"));
        }}
      >
        <input
          type="radio"
          name="startDay"
          id="Thursday"
          className="mr-[10px]"
        />
        <p className="text-[14px] dark:text-whitesmoke">Thursday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Friday"));
        }}
      >
        <input type="radio" name="startDay" id="Friday" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Friday</p>
      </label>
      <label
        className="flex flex-row items-center"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Saturday"));
        }}
      >
        <input
          type="radio"
          name="startDay"
          id="Saturday"
          className="mr-[10px]"
        />
        <p className="text-[14px] dark:text-whitesmoke">Saturday</p>
      </label>
    </div>
  );
};

export default RegionModal;
