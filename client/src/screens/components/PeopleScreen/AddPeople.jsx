import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopupAddPeopleSelector } from "../../../redux/selector";
import Search from "../../../images/Search.svg";
import { PopupAddPeopleSlice } from "../../../redux/slice/HomeSlice";
import ProjectStart from "./ProjectStart";

function AddPeople() {
  var displayPopupPeople = useSelector(PopupAddPeopleSelector);
  const dispatch = useDispatch();
  const [isHoverClose, setHoverClose] = useState(null);
  const [isChooseProject, setDisplayChooseProject] = useState(null);

  return (
    <div
      className={`md:select-none absolute z-30 ${
        displayPopupPeople ? "visible" : "hidden"
      }
      flex justify-center items-center inset-0
      bg-[rgba(168,167,167,0.5)] dark:bg-[rgba(225,223,223,0.2)]`}
    >
      <div className="bg-white w-full md:w-[580px] rounded-[12px] md:shadow-2xl">
        {/**Header */}
        <div
          className="flex flex-row items-center justify-between pl-[35px]
        border-b-outlineButton border-b-[2px] h-[55px]"
        >
          <div>
            <h1 className="font-medium text-black-100 text-[15px] md:text-[17px]">
              Invite people to Trim
            </h1>
          </div>
          <div
            className="md:hover:bg-red-100 inset-0 h-full px-[35px] flex items-center justify-center transition-colors"
            onClick={() => {
              dispatch(PopupAddPeopleSlice.actions.close());
            }}
            onMouseEnter={() => {
              setHoverClose(true);
            }}
            onMouseLeave={() => {
              setHoverClose(false);
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.92101 1.0791C9.13755 1.29564 9.13755 1.64674 8.92101 1.86328L5.78427 5.00002L8.92101 8.13676C9.13755 8.35331 9.13755 8.7044 8.92101 8.92095C8.70446 9.13749 8.35337 9.13749 8.13682 8.92095L5.00008 5.78421L1.86334 8.92095C1.6468 9.13749 1.2957 9.13749 1.07916 8.92095C0.862611 8.7044 0.862611 8.35331 1.07916 8.13676L4.2159 5.00002L1.07916 1.86328C0.862611 1.64674 0.862611 1.29564 1.07916 1.0791C1.2957 0.862551 1.6468 0.862551 1.86334 1.0791L5.00008 4.21584L8.13682 1.0791C8.35337 0.86255 8.70446 0.86255 8.92101 1.0791Z"
                fill={`${isHoverClose ? "white" : "#323338"}`}
              />
            </svg>
          </div>
        </div>
        {/**Body */}
        <div className="md:mx-[35px] md:my-[20px] relative">
          <p className="md:text-[14px] text-black-50">
            Your teammates will get an email that gives them access to your
            team.
          </p>
          {/**Email input */}
          <div className="mt-[20px]">
            <label htmlFor="email" className="formLabel">
              Email address
            </label>
            <div
              className={`relative border-[2px] border-outlineButton dark:border-[1px] rounded-[8px]`}
            >
              <input
                type="text"
                id="email"
                placeholder="Enter email address"
                className="formInput"
              />
            </div>
          </div>
          {/**Choose project */}
          <div className="mt-[20px] relative">
            <label htmlFor="chooseProject" className="formLabel">
              Choose a starting project
            </label>
            <div
              id="chooseProject"
              className="w-full border-[2px] border-outlineButton rounded-[8px] flex flex-row items-center
              justify-between px-3 py-3 md:hover:cursor-pointer"
              onClick={() => {
                setDisplayChooseProject(!isChooseProject);
              }}
            >
              <p className="md:text-[13.5px] text-[14px] text-black-200 dark:text-whitesmoke">
                Start typing to add a project
              </p>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.64637 6.97986L0.186805 1.5203C-0.128177 1.20532 0.0949049 0.666748 0.540357 0.666748H11.4595C11.9049 0.666748 12.128 1.20532 11.813 1.5203L6.35347 6.97986C6.15821 7.17512 5.84163 7.17512 5.64637 6.97986Z"
                  fill="#848588"
                />
              </svg>
            </div>
          </div>
          {/**Choose Project Component */}
          <div
            className={`absolute ${
              isChooseProject ? "visible" : "hidden"
            } z-40 bg-white w-full rounded-[12px] mt-[4px] shadow-xl border-[1px] border-outlineButton
            px-[25px] py-[12px]`}
          >
            <div className="flex flex-row items-center border-[2px] w-full px-[12px] border-outlineButton rounded-[5px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7009 12.7008C12.9512 12.4505 13.3571 12.4505 13.6074 12.7008L17.1459 16.2394C17.3962 16.4897 17.3962 16.8956 17.1459 17.1459C16.8956 17.3962 16.4897 17.3962 16.2394 17.1459L12.7009 13.6074C12.4505 13.357 12.4505 12.9512 12.7009 12.7008Z"
                  fill="#000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.23117 1.94904C4.76163 1.94904 1.94902 4.76169 1.94902 8.23127C1.94902 11.7008 4.76163 14.5135 8.23117 14.5135C11.7007 14.5135 14.5133 11.7008 14.5133 8.23127C14.5133 4.76169 11.7007 1.94904 8.23117 1.94904ZM0.666992 8.23127C0.666992 4.05363 4.05359 0.666992 8.23117 0.666992C12.4087 0.666992 15.7953 4.05363 15.7953 8.23127C15.7953 12.4089 12.4087 15.7955 8.23117 15.7955C4.05359 15.7955 0.666992 12.4089 0.666992 8.23127Z"
                  fill="#000"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Project"
                className="formInput px-2 py-[6px] md:text-[13px]"
              />
            </div>
            {/**Project Start */}
            <div className="mt-[10px]">
              <ProjectStart nameProject="App Development" />
              <ProjectStart nameProject="Web Design" />
              <ProjectStart nameProject="Creative Project" />
              <ProjectStart nameProject="Marketing & Sales" />
            </div>
          </div>

          {/**Footer */}
          <div className="w-full mt-[18px] flex flex-row items-center justify-end">
            <button
              className="px-[22px] py-[8px] rounded-[8px] font-medium text-[14px] text-black-50"
              onClick={() => {
                dispatch(PopupAddPeopleSlice.actions.close());
              }}
            >
              Cancel
            </button>
            <button
              className={`bg-cyan px-[22px] py-[8px] rounded-[8px] text-[14px] 
            transition-opacity text-white opacity-60`}
            >
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPeople;
