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
      <div
        className={`flex flex-col absolute bg-white dark:bg-bgProjectCardDark 
        pb-[22px] rounded-[10px] items-center w-full md:w-[500px]
        `}
      >
        <div className="flex justify-between items-center h-[55px] w-full">
          <div
            onClick={() => setIsCreate(false)}
            className="h-full w-[60px] flex items-center justify-center md:cursor-pointer"
          >
            <img
              src={darkModeSelector ? ArrowDark : ArrowLeft}
              alt=""
              className="h-[14px] w-[16px] md:cursor-pointer"
            />
          </div>
          <div
            onClick={() => {
              dispatch(DisplayAddPopupSlice.actions.closeAddPopup());
            }}
            className="h-full w-[60px] flex items-center justify-center md:cursor-pointer"
          >
            <img
              src={darkModeSelector ? CloseDark : CloseIcon}
              alt=""
              className="h-[12px] w-[12px] md:cursor-pointer"
            />
          </div>
        </div>
        <h1 className="text-[18px] font-medium dark:text-whitesmoke mt-[5px]">
          Create a New Project
        </h1>
        <div
          className={`h-[65px] w-[65px] flex items-center justify-center md:mt-[25px] mt-[8px] rounded-[12px] ${
            isSelected ? "border-none" : "border-[2px]"
          }
          ${borderImage} border-solid md:cursor-pointer md:h-[75px] md:w-[75px]`}
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
            <img
              id="cameraImg"
              src={Camera}
              alt=""
              onClick={() => document.getElementById("inputFile").click()}
            />
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
            className="w-full mt-[20px] bg-cyan border-solid rounded-[8px] h-[38px] flex items-center justify-center
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
            <span className="text-[14px] text-white font-medium">
              Create Project
            </span>
          </div>
        </div>
      </div>
    );
  }
  function modalAdd() {
    return (
      <div className="flex flex-col absolute top-[20%] bg-white dark:bg-bgProjectCardDark px-[22px] py-[15px] rounded-[14px]">
        <div
          className="w-full"
          onClick={() => {
            dispatch(DisplayAddPopupSlice.actions.closeAddPopup());
          }}
        >
          <img
            src={darkModeSelector ? CloseDark : CloseIcon}
            alt=""
            className="w-[13px] h-[13px] float-right md:cursor-pointer"
          />
        </div>
        <div className="mx-[50px] my-[15px] flex items-center flex-col">
          <h1 className="font-medium dark:text-whitesmoke">
            Create a New Project
          </h1>
          <div
            className="border-[2px] mt-[20px] rounded-[8px] border-gray dark:border-whitesmoke flex items-center justify-center w-[100px] h-[100px]
          md:cursor-pointer"
            onClick={() => {
              setIsCreate(true);
            }}
          >
            <img
              src={darkModeSelector ? AddDark : AddIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
          </div>
          <p className="text-[14px] text-black-100 dark:text-whitesmoke mt-[12px]">
            Blank project
          </p>
          <p className="text-[12px] text-black-50 dark:text-black-10">
            Start from scratch
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        displayAddPopup ? "absolute" : "hidden"
      } select-none flex justify-center items-center z-30 inset-0 bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(225,223,223,0.2)]`}
    >
      {isCreate ? createProject() : modalAdd()}
    </div>
  );
}

export default Add;
