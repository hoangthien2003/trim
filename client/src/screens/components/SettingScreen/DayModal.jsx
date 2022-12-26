import React from "react";
import { useDispatch } from "react-redux";
import { SettingDayNotiSlice } from "../../../redux/slice/SettingSlice";
import PropTypes from "prop-types";

function DayModal(props) {
  const { handleChangeDay, setOpenDay } = props;
  const dispatch = useDispatch();

  const dayArr = ["Everyday", "Weekend", "Custom"];

  return (
    <div className="w-[160px]">
      {dayArr.map((day, key) => {
        return (
          <div
            key={key}
            className="rounded-[6px] hover:bg-whitesmoke pl-[10px] py-[8px]
            md:hover:cursor-pointer"
            onClick={() => {
              handleChangeDay(day);
              setOpenDay(false);
            }}
          >
            <p className="text-[13px]">{day}</p>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(DayModal);
