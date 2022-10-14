import React from "react";
import MemberComponent from "./MemberComponent";
import { useDispatch } from "react-redux";
import { MemberSlice } from "../../redux/slice/MembersSlice";
import { useNavigate } from "react-router-dom";

function Members() {
  const dispatch = useDispatch();
  const [choose01, setChoose01] = React.useState(true);
  const [choose02, setChoose02] = React.useState(false);
  const [choose03, setChoose03] = React.useState(false);
  const [choose04, setChoose04] = React.useState(false);
  const [choose05, setChoose05] = React.useState(false);
  const [choose06, setChoose06] = React.useState(false);
  const [choose07, setChoose07] = React.useState(false);
  const [choose08, setChoose08] = React.useState(false);
  const [choose09, setChoose09] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="card">
      <p className="setupTitle text-[20px] font-medium">
        How many people will you be working with?
      </p>
      <div className="my-4 grid grid-cols-3 md:flex md:w-[600px] md:flex-wrap">
        <div
          id={1}
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("Just me"));
            setChoose01(true);
            setChoose02(false);
            setChoose03(false);
            setChoose04(false);
            setChoose05(false);
            setChoose06(false);
            setChoose07(false);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="1" value="Just me" choose={choose01} />
        </div>
        <div
          id="2"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("2-5"));
            setChoose01(false);
            setChoose02(true);
            setChoose03(false);
            setChoose04(false);
            setChoose05(false);
            setChoose06(false);
            setChoose07(false);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="2" value="2-5" choose={choose02} />
        </div>
        <div
          id="3"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("6-10"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(true);
            setChoose04(false);
            setChoose05(false);
            setChoose06(false);
            setChoose07(false);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="3" value="6-10" choose={choose03} />
        </div>
        <div
          id="4"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("11-20"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(false);
            setChoose04(true);
            setChoose05(false);
            setChoose06(false);
            setChoose07(false);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="4" value="11-20" choose={choose04} />
        </div>
        <div
          id="5"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("21-50"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(false);
            setChoose04(false);
            setChoose05(true);
            setChoose06(false);
            setChoose07(false);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="5" value="21-50" choose={choose05} />
        </div>
        <div
          id="6"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("51-100"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(false);
            setChoose04(false);
            setChoose05(false);
            setChoose06(true);
            setChoose07(false);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="6" value="51-100" choose={choose06} />
        </div>
        <div
          id="7"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("101-200"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(false);
            setChoose04(false);
            setChoose05(false);
            setChoose06(false);
            setChoose07(true);
            setChoose08(false);
            setChoose09(false);
          }}
        >
          <MemberComponent id="7" value="101-200" choose={choose07} />
        </div>
        <div
          id="8"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("201-500"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(false);
            setChoose04(false);
            setChoose05(false);
            setChoose06(false);
            setChoose07(false);
            setChoose08(true);
            setChoose09(false);
          }}
        >
          <MemberComponent id="8" value="201-500" choose={choose08} />
        </div>
        <div
          id="9"
          onClick={(e) => {
            dispatch(MemberSlice.actions.setMemberAmount("500+"));
            setChoose01(false);
            setChoose02(false);
            setChoose03(false);
            setChoose04(false);
            setChoose05(false);
            setChoose06(false);
            setChoose07(false);
            setChoose08(false);
            setChoose09(true);
          }}
        >
          <MemberComponent id="9" value="500+" choose={choose09} />
        </div>
      </div>
      <div className="flex justify-start h-full w-full items-center mt-3">
        <button className="buttonPurple w-[100px] px-7 mt-0 mr-4">Next</button>
        <p
          onClick={() => navigate("/setup/email-members", { replace: true })}
          className="text-purple text-[14px] w-[100px] font-medium select-none hover:underline hover:cursor-pointer"
        >
          Skip this
        </p>
      </div>
    </div>
  );
}

export default Members;
