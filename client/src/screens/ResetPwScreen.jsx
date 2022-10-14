import React from "react";
import { useNavigate } from "react-router-dom";

function ResetPwScreen() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPw, setConfirmPw] = React.useState("");

  const handleSubmitReset = (e) => {
    e.preventDefault();
    setNewPassword("");
    setConfirmPw("");
    console.log("Reset successfully");
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="cardTitle">Reset your password</h1>
        <form method="post" onSubmit={handleSubmitReset} className="form">
          <label htmlFor="password" className="formLabel">
            New password
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="formInput"
          />
          <label htmlFor="confirmPw" className="formLabel">
            Confirm new password
          </label>
          <input
            type="password"
            name="confirmPw"
            id="confirmPw"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            className="formInput"
          />
          <button type="submit" className="buttonPurple">
            Confirm
          </button>
        </form>
        <p
          className="text-purple cursor-pointer text-sm mt-6"
          onClick={() => navigate("/login", { replace: true })}
        >
          Back to sign in
        </p>
      </div>
    </div>
  );
}

export default ResetPwScreen;
