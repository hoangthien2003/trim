import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContinueSelector } from "../redux/selector";
import EmailComponent from "./components/SignupScreen/EmailResetComponent";
import InputEmailComponent from "./components/SignupScreen/InputEmailComponent";

function ForgotPwScreen() {
  const navigate = useNavigate();
  const isContinue = useSelector(ContinueSelector);
  console.log(isContinue);

  return (
    <div className="container">
      <div className="card">
        <h1 className="cardTitle">Forgot your password?</h1>
        {isContinue ? <EmailComponent /> : <InputEmailComponent />}
        <p
          className="text-purple cursor-pointer text-sm mt-6"
          onClick={() => navigate(-1)}
        >
          Back to sign in
        </p>
      </div>
    </div>
  );
}

export default ForgotPwScreen;
