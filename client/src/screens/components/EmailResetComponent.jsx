import React from "react";
import { useSelector } from "react-redux";
import { EmailSelector } from "../../redux/selector";
import { useNavigate } from "react-router-dom";

function EmailComponent() {
  const email = useSelector(EmailSelector);
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5">
      <p className="text-[15px] font-regular text-black50">
        Instractions for resetting your password have been send to{" "}
      </p>
      <p className="text-[15px] font-semibold text-black mt-2">{email}</p>
      <button
        className="buttonPurple md:opacity-100"
        onClick={() => navigate("/reset")}
      >
        Continue
      </button>
    </div>
  );
}

export default EmailComponent;
