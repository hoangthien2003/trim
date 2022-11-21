import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ContinueSlice } from "../../redux/slice/ContinueSlice";
import { EmailSlice } from "../../redux/slice/EmalSlice";
import ErrorItem from "./ErrorItem";

function InputEmailComponent() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = useState("");
  const [displayErrorEmail, setDisplayErrorEmail] = useState("hidden");
  const [borderInputEmail, setBorderInputEmail] = useState(
    "border-outlineButton dark:border-bgOtherPopup"
  );
  const dispatch = useDispatch();
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmitContinue = (e) => {
    e.preventDefault();

    if (email.length !== 0) {
      if (email.match(regexEmail)) {
        dispatch(EmailSlice.actions.setEmail(email));
        dispatch(ContinueSlice.actions.setContinue(true));
        setEmail("");
      } else {
        setDisplayErrorEmail("visible");
        setEmailError("Email is not valid");
        setBorderInputEmail("border-red-50");
      }
    } else {
      setBorderInputEmail("border-red-50");
      setDisplayErrorEmail("visible");
      setEmailError("Email can not be blank!");
    }
  };

  return (
    <form method="post" onSubmit={handleSubmitContinue} className="form">
      <label htmlFor="email" className="formLabel">
        Email address
      </label>
      <div
        className={`relative ${borderInputEmail} border-[2px] dark:border-[1px] rounded-[8px]`}
      >
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="formInput"
          onFocus={() => {
            setDisplayErrorEmail("hidden");
            setEmailError("");
            setBorderInputEmail(
              "border-outlineButton dark:border-bgOtherPopup"
            );
            emailError && setEmail("");
          }}
        />
        <div
          className={`${displayErrorEmail} absolute top-[10px] right-[15px]`}
        >
          <ErrorItem />
        </div>
      </div>
      {emailError && (
        <p className="text-[12px] select-none text-red-500">{emailError}</p>
      )}
      <button type="submit" className="buttonPurple">
        Continue
      </button>
    </form>
  );
}

export default InputEmailComponent;
