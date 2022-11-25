import React from "react";
import ColorItem from "../SetupScreen/ColorItem";
import { useDispatch } from "react-redux";
import { ColorSlice } from "../../../redux/slice/ColorSlice";
import { IDColorSlice } from "../../../redux/slice/IDColorSlice";

function Color() {
  const dispatch = useDispatch();
  return (
    <div className="w-[255px] md:w-[480px]">
      <div className="flex flex-wrap md:justify-start">
        <div
          id="1"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#40BC86"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="1"
            color="#40BC86"
            borderColor="border-[#40BC86]"
            backgroundColor="bg-[#40BC86]"
            hoverBorderColor="hover:border-[#40BC86]"
          />
        </div>
        <div
          id="2"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#1ABC9C"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="2"
            color="#1ABC9C"
            borderColor="border-[#1ABC9C]"
            backgroundColor="bg-[#1ABC9C]"
            hoverBorderColor="hover:border-[#1ABC9C]"
          />
        </div>
        <div
          id="3"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#27AE60"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="3"
            color="#27AE60"
            borderColor="border-[#27AE60]"
            backgroundColor="bg-[#27AE60]"
            hoverBorderColor="hover:border-[#27AE60]"
          />
        </div>
        <div
          id="4"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#00D717"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="4"
            color="#00D717"
            borderColor="border-[#00D717]"
            backgroundColor="bg-[#00D717]"
            hoverBorderColor="hover:border-[#00D717]"
          />
        </div>
        <div
          id="5"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#F31D2F"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="5"
            color="#F31D2F"
            borderColor="border-[#F31D2F]"
            backgroundColor="bg-[#F31D2F]"
            hoverBorderColor="hover:border-[#F31D2F]"
          />
        </div>
        <div
          id="6"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#EC555C"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="6"
            color="#EC555C"
            borderColor="border-[#EC555C]"
            backgroundColor="bg-[#EC555C]"
            hoverBorderColor="hover:border-[#EC555C]"
          />
        </div>
        <div
          id="7"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#FC575E"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="7"
            color="#FC575E"
            borderColor="border-[#FC575E]"
            backgroundColor="bg-[#FC575E]"
            hoverBorderColor="hover:border-[#FC575E]"
          />
        </div>
        <div
          id="8"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#9B0A10"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="8"
            color="#9B0A10"
            borderColor="border-[#9B0A10]"
            backgroundColor="bg-[#9B0A10]"
            hoverBorderColor="hover:border-[#9B0A10]"
          />
        </div>
        <div
          id="9"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#FCB410"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="9"
            color="#FCB410"
            borderColor="border-[#FCB410]"
            backgroundColor="bg-[#FCB410]"
            hoverBorderColor="hover:border-[#FCB410]"
          />
        </div>
        <div
          id="10"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#B17E22"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="10"
            color="#B17E22"
            borderColor="border-[#B17E22]"
            backgroundColor="bg-[#B17E22]"
            hoverBorderColor="hover:border-[#B17E22]"
          />
        </div>
        <div
          id="11"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#F24D16"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="11"
            color="#F24D16"
            borderColor="border-[#F24D16]"
            backgroundColor="bg-[#F24D16]"
            hoverBorderColor="hover:border-[#F24D16]"
          />
        </div>
        <div
          id="12"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#FF8600"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="12"
            color="#FF8600"
            borderColor="border-[#FF8600]"
            backgroundColor="bg-[#FF8600]"
            hoverBorderColor="hover:border-[#FF8600]"
          />
        </div>
        <div
          id="13"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#0918EC"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="13"
            color="#0918EC"
            borderColor="border-[#0918EC]"
            backgroundColor="bg-[#0918EC]"
            hoverBorderColor="hover:border-[#0918EC]"
          />
        </div>
        <div
          id="14"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#BF4ACC"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="14"
            color="#BF4ACC"
            borderColor="border-[#BF4ACC]"
            backgroundColor="bg-[#BF4ACC]"
            hoverBorderColor="hover:border-[#BF4ACC]"
          />
        </div>
        <div
          id="15"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#DA2988"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="15"
            color="#DA2988"
            borderColor="border-[#DA2988]"
            backgroundColor="bg-[#DA2988]"
            hoverBorderColor="hover:border-[#DA2988]"
          />
        </div>
        <div
          id="16"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#34495E"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="16"
            color="#34495E"
            borderColor="border-[#34495E]"
            backgroundColor="bg-[#34495E]"
            hoverBorderColor="hover:border-[#34495E]"
          />
        </div>
        <div
          id="17"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#181D21"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="17"
            color="#181D21"
            borderColor="border-[#181D21]"
            backgroundColor="bg-[#181D21]"
            hoverBorderColor="hover:border-[#181D21]"
          />
        </div>
        <div
          id="18"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#074354"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="18"
            color="#074354"
            borderColor="border-[#074354]"
            backgroundColor="bg-[#074354]"
            hoverBorderColor="hover:border-[#074354]"
          />
        </div>
        <div
          id="19"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#03A2FD"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="19"
            color="#03A2FD"
            borderColor="border-[#03A2FD]"
            backgroundColor="bg-[#03A2FD]"
            hoverBorderColor="hover:border-[#03A2FD]"
          />
        </div>
        <div
          id="20"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#7B68EE"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="20"
            color="#7B68EE"
            borderColor="border-[#7B68EE]"
            backgroundColor="bg-[#7B68EE]"
            hoverBorderColor="hover:border-[#7B68EE]"
          />
        </div>
        <div
          id="21"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#EC6625"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="21"
            color="#EC6625"
            borderColor="border-[#EC6625]"
            backgroundColor="bg-[#EC6625]"
            hoverBorderColor="hover:border-[#EC6625]"
          />
        </div>
        <div
          id="22"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#2980B9"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="22"
            color="#2980B9"
            borderColor="border-[#2980B9]"
            backgroundColor="bg-[#2980B9]"
            hoverBorderColor="hover:border-[#2980B9]"
          />
        </div>
        <div
          id="23"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#3498DB"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="23"
            color="#3498DB"
            borderColor="border-[#3498DB]"
            backgroundColor="bg-[#3498DB]"
            hoverBorderColor="hover:border-[#3498DB]"
          />
        </div>
        <div
          id="24"
          onClick={(e) => {
            dispatch(ColorSlice.actions.setColor("#528CCB"));
            dispatch(IDColorSlice.actions.setID(e.target.id));
          }}
        >
          <ColorItem
            id="24"
            color="#528CCB"
            borderColor="border-[#528CCB]"
            backgroundColor="bg-[#528CCB]"
            hoverBorderColor="hover:border-[#528CCB]"
          />
        </div>
      </div>
    </div>
  );
}

export default Color;
