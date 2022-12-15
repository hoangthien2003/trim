import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplayAddPopupSelector } from "../../../redux/selector";
import { DisplayAddPopupSlice } from "../../../redux/slice/HomeSlice";
import CloseIcon from "../../../images/Close.svg";
import AddIcon from "../../../images/AddBlack.svg";
import AddDark from "../../../images/Add.svg";
import ArrowLeft from "../../../images/ArrowLeft.svg";
import ArrowDark from "../../../images/ArrowLeftDark.svg";
import CloseDark from "../../../images/CloseDark.svg";
import Camera from "../../../images/Camera.svg";
import { DarkModeSelector } from "../../../redux/selector";
import axios from "axios";
import {
  URL_BASE,
  LOCAL_STORAGE_TOKEN_NAME,
} from "../../../contexts/constants";
import { AuthContext } from "../../../contexts/AuthProvider";

function Add() {
  var displayAddPopup = useSelector(DisplayAddPopupSelector);
  var darkModeSelector = useSelector(DarkModeSelector);
  const dispatch = useDispatch();
  const [isCreate, setIsCreate] = useState(false);
  const [projName, setProjName] = useState("");
  const [categoryVal, setCategoryVal] = useState("Design");
  const [descVal, setDescVal] = useState("");
  const [privacyVal, setPrivacyVal] = useState("Private to me");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [borderImage, setBorderImage] = useState("border-outlineButton");
  const [borderProjName, setBorderProjName] = useState("border-outlineButton");
  const [borderDesc, setBorderDesc] = useState("border-outlineButton");
  const [isErrorImg, setIsErrorImg] = useState(false);
  const [isErrorProj, setIsErrorProj] = useState(false);
  const [isErrorDesc, setIsErrorDesc] = useState(false);
  const { user } = React.useContext(AuthContext);
  const [isHoverClose, setBgClose] = useState(null);

  function getImage(e) {
    var inputImg = e.target.files[0];
    if (inputImg) {
      console.log(inputImg);
      setSelectedImage(window.URL.createObjectURL(inputImg));
      setIsSelected(true);
      setIsErrorImg(false);
    } else {
      setIsSelected(false);
      setIsErrorImg(true);
    }
  }

  function createProject() {
    async function handleCreateProject() {
      dispatch(DisplayAddPopupSlice.actions.closeAddPopup());
      console.log(projName);
      console.log(categoryVal);
      console.log(descVal);
      console.log(privacyVal);
      await axios.post(
        `${URL_BASE}/api/project/add-project`,
        {
          name: projName,
          members: [user._id],
          avatar:
            "https://cdn.vietnammoi.vn/171464242508312576/2020/10/28/huanhoahong-1ugww-1603860149561719888008-1603873413854-16038734202391656232023.jpg",
          category: categoryVal,
          description: descVal,
          privacy: privacyVal,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_TOKEN_NAME
            )}`,
          },
        }
      );
      window.location.reload();
    }
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-[26px] font-light dark:text-whitesmoke mt-[5px]">
          Create a New Project
        </h1>
        <div
          className={`h-[65px] w-[65px] flex items-center justify-center md:mt-[25px] mt-[8px] rounded-[12px] ${
            isSelected ? "border-none" : "border-[2px]"
          }
          ${borderImage} border-solid md:cursor-pointer md:h-[90px] md:w-[90px]`}
          onClick={() => document.getElementById("inputFile").click()}
        >
          <input
            type="file"
            id="inputFile"
            accept="image/*"
            className="hidden"
            onChange={(e) => getImage(e)}
          />
          {isSelected ? (
            <img id="outputImg" src={selectedImage} alt="" />
          ) : (
            <svg
              width="34"
              height="28"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 7.36538C10.8264 7.36538 11.533 7.65314 12.1198 8.22867C12.7066 8.80419 13 9.4972 13 10.3077C13 11.1182 12.7066 11.8112 12.1198 12.3867C11.533 12.9622 10.8264 13.25 10 13.25C9.17361 13.25 8.46701 12.9622 7.88021 12.3867C7.2934 11.8112 7 11.1182 7 10.3077C7 9.4972 7.2934 8.80419 7.88021 8.22867C8.46701 7.65314 9.17361 7.36538 10 7.36538ZM17.3333 3.11538C18.0694 3.11538 18.6979 3.37079 19.2188 3.88161C19.7396 4.39243 20 5.00881 20 5.73077V14.8846C20 15.6066 19.7396 16.223 19.2188 16.7338C18.6979 17.2446 18.0694 17.5 17.3333 17.5H2.66667C1.93056 17.5 1.30208 17.2446 0.78125 16.7338C0.260417 16.223 0 15.6066 0 14.8846V5.73077C0 5.00881 0.260417 4.39243 0.78125 3.88161C1.30208 3.37079 1.93056 3.11538 2.66667 3.11538H5L5.53125 1.72596C5.66319 1.39223 5.90451 1.10447 6.25521 0.86268C6.6059 0.620893 6.96528 0.5 7.33333 0.5H12.6667C13.0347 0.5 13.3941 0.620893 13.7448 0.86268C14.0955 1.10447 14.3368 1.39223 14.4688 1.72596L15 3.11538H17.3333ZM10 14.8846C11.2847 14.8846 12.3837 14.4368 13.2969 13.5412C14.2101 12.6455 14.6667 11.5677 14.6667 10.3077C14.6667 9.04768 14.2101 7.96985 13.2969 7.07422C12.3837 6.17859 11.2847 5.73077 10 5.73077C8.71528 5.73077 7.61632 6.17859 6.70312 7.07422C5.78993 7.96985 5.33333 9.04768 5.33333 10.3077C5.33333 11.5677 5.78993 12.6455 6.70312 13.5412C7.61632 14.4368 8.71528 14.8846 10 14.8846Z"
                fill="#C1C2C3"
              />
            </svg>
          )}
        </div>
        <p
          className={`${
            isErrorImg ? "visible" : "hidden"
          } text-red-100 text-[12px]`}
        >
          Required
        </p>
        <div className="w-full px-[25px]">
          {/**Project Name */}
          <div className="w-full md:mb-[10px] md:mt-[15px] mt-[10px] mb-[5px]">
            <p className="text-[12px] text-black-20 font-medium">
              Project Name
            </p>
            <div
              className={`px-[12px] py-[10px] border-solid border-[1px] ${borderProjName} rounded-md mt-[5px]
          flex items-center`}
            >
              <input
                type="text"
                className="outline-none dark:bg-bgProjectCardDark dark:text-whitesmoke w-full text-[13px] text-black-100"
                placeholder="Project Name"
                value={projName}
                onChange={(e) => setProjName(e.target.value)}
                onFocus={() => {
                  setBorderProjName("border-outlineButton");
                  setIsErrorProj(false);
                }}
              />
            </div>
            <p
              className={`${
                isErrorProj ? "visible" : "hidden"
              } text-red-100 text-[12px] ml-[8px]`}
            >
              Required
            </p>
          </div>
          {/**Category */}
          <div className="w-full md:my-[10px] my-[5px]">
            <p className="text-[12px] text-black-20 font-medium">Category</p>
            <div
              className="border-solid border-[1px] border-outlineButton rounded-md mt-[5px]
          flex items-center"
            >
              <select
                id="category"
                className="w-full text-[13px] dark:bg-bgProjectCardDark mx-[5px] 
              dark:text-whitesmoke px-[4px] py-[10px] outline-none md:cursor-pointer"
                value={categoryVal}
                onChange={(e) => setCategoryVal(e.target.value)}
              >
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
                <option value="Education">Education</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
          </div>
          {/**Description */}
          <div className="w-full md:my-[10px] my-[5px]">
            <p className="text-[12px] text-black-20 font-medium">Description</p>
            <div
              className={`px-[12px] py-[10px] border-solid border-[1px] 
            ${borderDesc} rounded-md mt-[5px] flex items-center `}
            >
              <textarea
                name="description"
                id=""
                placeholder="Description"
                className="outline-none w-full text-[13px] text-black-100 h-[100px]
              dark:bg-bgProjectCardDark dark:text-whitesmoke"
                value={descVal}
                onChange={(e) => setDescVal(e.target.value)}
                onFocus={() => {
                  setBorderDesc("border-outlineButton");
                  setIsErrorDesc(false);
                }}
              />
            </div>
            <p
              className={`${
                isErrorDesc ? "visible" : "hidden"
              } text-red-100 text-[12px] ml-[8px]`}
            >
              Required
            </p>
          </div>
          {/**Privacy */}
          <div className="w-full md:my-[10px] my-[5px]">
            <p className="text-[12px] text-black-20 font-medium">Privacy</p>
            <div
              className="border-solid border-[1px] border-outlineButton rounded-md mt-[5px]
          flex items-center"
            >
              <select
                id="privacy"
                className="w-full text-[13px] px-[4px] py-[10px] outline-none
              dark:bg-bgProjectCardDark dark:text-whitesmoke mx-[5px]
                md:cursor-pointer"
                value={privacyVal}
                onChange={(e) => setPrivacyVal(e.target.value)}
              >
                <option value="Private to me">Private to me</option>
                <option value="Private to project numbers">
                  Private to project numbers
                </option>
                <option value="Public">Public</option>
              </select>
            </div>
          </div>

          {/**Button Create */}
          <div
            className="w-full mt-[35px] bg-cyan border-solid rounded-[5px] h-[42px] flex items-center justify-center
        md:cursor-pointer md:transition-opacity md:duration-300 md:opacity-60 hover:opacity-100"
            onClick={() => {
              var hasError = false;
              if (!isSelected) {
                hasError = true;
                setBorderImage("border-red-100");
                setIsErrorProj(true);
              }
              if (!projName) {
                hasError = true;
                setBorderProjName("border-red-100");
                setIsErrorDesc(true);
              }
              if (!descVal) {
                hasError = true;
                setBorderDesc("border-red-100");
                setIsErrorImg(true);
              }
              //If hasn't error -> add project
              if (!hasError) {
                handleCreateProject();
              }
            }}
          >
            <span className="text-[16px] text-white font-light">
              Create Project
            </span>
          </div>
        </div>
      </div>
    );
  }

  function modalAdd() {
    return (
      <div className="md:h-full flex items-center flex-col justify-center">
        <h1 className="dark:text-whitesmoke md:text-[24px] mb-[10px]">
          Create a New Project
        </h1>
        <div
          className="border-[2px] mt-[20px] rounded-[15px] border-gray dark:border-whitesmoke 
            flex items-center justify-center w-[100px] h-[100px] md:w-[135px] md:h-[130px] 
            md:cursor-pointer"
          onClick={() => {
            setIsCreate(true);
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00033 0.166992C6.24815 0.166992 6.44904 0.36789 6.44904 0.61571V5.55161H11.3849C11.6328 5.55161 11.8337 5.7525 11.8337 6.00033C11.8337 6.24815 11.6328 6.44904 11.3849 6.44904H6.44904V11.3849C6.44904 11.6328 6.24815 11.8337 6.00033 11.8337C5.75251 11.8337 5.55161 11.6328 5.55161 11.3849V6.44904H0.61571C0.36789 6.44904 0.166992 6.24815 0.166992 6.00033C0.166992 5.75251 0.36789 5.55161 0.61571 5.55161H5.55161V0.61571C5.55161 0.36789 5.75251 0.166992 6.00033 0.166992Z"
              fill={`${darkModeSelector ? "white" : "#848588"}`}
            />
          </svg>
        </div>
        <p className="text-[14px] text-black-100 dark:text-whitesmoke mt-[12px] md:mt-[15px]">
          Blank project
        </p>
        <p className="text-[12px] text-black-50 dark:text-black-10">
          Start from scratch
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${
        displayAddPopup ? "absolute" : "hidden"
      } select-none flex justify-center items-center z-30 inset-0 bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(225,223,223,0.2)]`}
    >
      <div
        className={`flex flex-col absolute ${
          isCreate ? "md:w-[700px]" : "top-[20%] md:w-[600px]"
        } bg-white dark:bg-bgProjectCardDark 
        pb-[15px] rounded-[8px]`}
      >
        {/**Header*/}
        <div
          className={`w-full ${
            isCreate ? "flex flex-row items-center justify-between" : null
          }`}
        >
          <div
            onClick={() => setIsCreate(false)}
            className={`px-[30px] py-[20px] md:cursor-pointer ${
              isCreate ? "visible" : "hidden"
            }`}
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.78806 0.465772C7.03473 0.667808 7.06806 1.02813 6.8625 1.27057L2.4892 6.42856L16.7518 6.42856C17.0729 6.42856 17.3332 6.6844 17.3332 6.99999C17.3332 7.31558 17.0729 7.57142 16.7518 7.57142L2.4892 7.57141L6.8625 12.7294C7.06806 12.9718 7.03473 13.3322 6.78806 13.5342C6.54139 13.7362 6.17478 13.7035 5.96922 13.461L0.801259 7.36581C0.621586 7.15389 0.621585 6.84608 0.801259 6.63417L5.96922 0.538936C6.17478 0.296493 6.54138 0.263736 6.78806 0.465772Z"
                fill={`${darkModeSelector ? "white" : "#323338"}`}
              />
            </svg>
          </div>

          <div
            className={`px-[30px] py-[20px] transition-colors float-right rounded-tr-[8px] 
            ${isHoverClose ? "bg-red-100" : "dark:bg-bgProjectCardDark"}`}
            onClick={() => {
              dispatch(DisplayAddPopupSlice.actions.closeAddPopup());
            }}
            onMouseEnter={() => {
              setBgClose(true);
            }}
            onMouseLeave={() => {
              setBgClose(false);
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.92101 1.0791C9.13755 1.29564 9.13755 1.64674 8.92101 1.86328L5.78427 5.00002L8.92101 8.13676C9.13755 8.35331 9.13755 8.7044 8.92101 8.92095C8.70446 9.13749 8.35337 9.13749 8.13682 8.92095L5.00008 5.78421L1.86334 8.92095C1.6468 9.13749 1.2957 9.13749 1.07916 8.92095C0.862611 8.7044 0.862611 8.35331 1.07916 8.13676L4.2159 5.00002L1.07916 1.86328C0.862611 1.64674 0.862611 1.29564 1.07916 1.0791C1.2957 0.862551 1.6468 0.862551 1.86334 1.0791L5.00008 4.21584L8.13682 1.0791C8.35337 0.86255 8.70446 0.86255 8.92101 1.0791Z"
                fill={`${
                  darkModeSelector || isHoverClose ? "white" : "#323338"
                }`}
              />
            </svg>
          </div>
        </div>
        <div className="pb-[30px] px-[60px]">
          {isCreate ? createProject() : modalAdd()}
        </div>
      </div>
    </div>
  );
}

export default Add;
