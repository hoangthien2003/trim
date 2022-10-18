import React from "react";
import NotiItem from "./NotiItem";

function Notification() {
  return (
    <div className="pt-[20px] px-[30px]">
      <div className="flex flex-row w-full items-center justify-between">
        <h1 className="text-[16px] font-medium">Notification</h1>
        <span className="text-[11px] text-cyan">Mark all as read</span>
      </div>
      <div className="mt-[30px]">
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
        <NotiItem />
      </div>
    </div>
  );
}

export default Notification;
