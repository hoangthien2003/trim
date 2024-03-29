import React from "react";
import Soomali from "../../../images/country/soomali.svg";
import Afrikaans from "../../../images/country/afrikaans.svg";
import Indonesia from "../../../images/country/indonesia.svg";
import Bangla from "../../../images/country/bangla.svg";
import Catala from "../../../images/country/catala.svg";
import Dansk from "../../../images/country/dansk.svg";
import Dseutsch from "../../../images/country/dseutsch.svg";
import Us from "../../../images/country/us.svg";
import Uk from "../../../images/country/uk.svg";
import Fin from "../../../images/country/fin.svg";
import France from "../../../images/country/france.svg";
import { useDispatch } from "react-redux";
import {
  ClickLanguaSlice,
  LanguageSlice,
} from "../../../redux/slice/SettingSlice";

const CountryModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="overflow-auto h-[250px] md:h-[210px]">
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Af-Soomali"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Soomali} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Af-Soomali</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Afrikaans"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Afrikaans} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Afrikaans</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Bahasa Indonesia"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Indonesia} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Bahasa Indonesia</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Bangla"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Bangla} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Bangla</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Catala"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Catala} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Catala</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Dansk"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Dansk} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Dansk</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Dseutsch"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Dseutsch} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Dseutsch</p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("United State (English)"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Us} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">
          United State (English)
        </p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(
            LanguageSlice.actions.setLanguage("United Kingdom (English)")
          );
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Uk} alt="" className="mr-[10px]" />
        <p className="text-[14px]  dark:text-whitesmoke">
          United Kingdom (English)
        </p>
      </div>
      <div
        className="flex flex-row items-center mb-[25px]"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Finnish"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={Fin} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Finnish</p>
      </div>
      <div
        className="flex flex-row items-center"
        onClick={() => {
          dispatch(LanguageSlice.actions.setLanguage("Francais"));
          dispatch(ClickLanguaSlice.actions.setClick(false));
        }}
      >
        <img src={France} alt="" className="mr-[10px]" />
        <p className="text-[14px] dark:text-whitesmoke">Francais</p>
      </div>
    </div>
  );
};

export default CountryModal;
