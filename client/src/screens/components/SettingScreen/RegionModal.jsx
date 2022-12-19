import React from "react";
import { useDispatch } from "react-redux";
import { LanguageSlice } from "../../../redux/slice/SettingSlice";

const RegionModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="overflow-auto">
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Sunday"));
        }}
      >
        <input type="radio" name="startDay" id="Sunday" className="mr-[10px]" />
        <p className="text-[14px]">Sunday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Monday"));
        }}
      >
        <input type="radio" name="startDay" id="Monday" className="mr-[10px]" />
        <p className="text-[14px]">Monday</p>
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
        <p className="text-[14px]">Tuesday</p>
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
        <p className="text-[14px]">Wednesday</p>
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
        <p className="text-[14px]">Thursday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setStartDay("Friday"));
        }}
      >
        <input type="radio" name="startDay" id="Friday" className="mr-[10px]" />
        <p className="text-[14px]">Friday</p>
      </label>
      <label
        className="flex flex-row items-center mb-[15px]"
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
        <p className="text-[14px]">Saturday</p>
      </label>
    </div>
  );
};

export default RegionModal;
