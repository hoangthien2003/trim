import React from "react";
import { useDispatch } from "react-redux";
import { ContinueSlice } from "../../redux/slice/ContinueSlice";
import { EmailSlice } from "../../redux/slice/EmalSlice";

function InputEmailComponent() {
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmitContinue = (e) => {
    e.preventDefault();
    dispatch(EmailSlice.actions.setEmail(email));
    dispatch(ContinueSlice.actions.setContinue(true));
    setEmail("");
  };

  return (
    <form method="post" onSubmit={handleSubmitContinue} className="form">
      <label htmlFor="email" className="formLabel">
        Email address
      </label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="formInput"
      />
      <button type="submit" className="buttonPurple">
        Continue
      </button>
    </form>
  );
}

export default InputEmailComponent;
