import React from "react";
import googleSvg from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { EmailSignupSlice } from "../../redux/slice/EmailSignupSlice.js";
import * as yup from "yup";
import axios from "axios";
import ErrorItem from "./ErrorItem";

function EmailSignupComponent() {
  const [emailError, setEmailError] = React.useState("");
  const [borderInputEmail, setBorderInputEmail] = React.useState(
    "border-outlineButton"
  );
  const [displayError, setDisplayError] = React.useState("hidden");
  const [widthInputEmailDesktop, setWidthInputEmailDesktop] =
    React.useState("md:w-full");
  const [widthInputEmailMobile, setWidthInputEmailMobile] =
    React.useState("w-full");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email is not correct, try again."
        ),
    }),
  });

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    if (!formik.values.email) {
      formik.errors.email = "This input is not a blank!";
    }
    if (formik.errors.email) {
      setEmailError(formik.errors.email);
      setBorderInputEmail("border-red-50");
      setDisplayError("block");
      setWidthInputEmailDesktop("md:w-[505px]");
      setWidthInputEmailMobile("w-[235px]");
    } else {
      const userCredential = {
        email: formik.values.email,
      };
      await axios
        .post("http://localhost:5000/api/auth/check-email", userCredential)
        .then((res) => {
          if (res.data === "Sign up email successfully!") {
            dispatch(EmailSignupSlice.actions.setEmail(formik.values.email));
            navigate("detail");
          } else {
            setEmailError("Email is exist");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="cardTitle">Sign Up</h1>
        <form method="post" onSubmit={handleSubmitSignup} className="form">
          <div className="h-[80px] mb-[5px] mt-[20px]">
            <label htmlFor="email" className={`formLabel text-gray`}>
              Email address
            </label>
            <div
              className={`relative border-[2px] ${borderInputEmail} rounded-[8px]`}
            >
              <input
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onFocus={() => {
                  setEmailError("");
                  formik.errors.email = "";
                  setBorderInputEmail("border-outlineButton");
                  setDisplayError("hidden");
                  setWidthInputEmailDesktop("md:w-full");
                  setWidthInputEmailMobile("w-full");
                }}
                className={`formInput ${widthInputEmailDesktop} ${widthInputEmailMobile}`}
              />
              <div
                className={`${displayError} absolute top-[10px] right-[15px]`}
              >
                <ErrorItem />
              </div>
            </div>
            {emailError && (
              <p className="text-[12px] select-none text-red-500">
                {emailError}
              </p>
            )}
          </div>
          <button type="submit" className="buttonPurple">
            Continue
          </button>
        </form>
        <div className="flex justify-center items-center w-full my-10">
          <div className="h-[1px] bg-outlineButton w-full"></div>
          <div className="absolute bg-white px-2">
            <p className="text-gray text-sm">or</p>
          </div>
        </div>
        <button className="buttonGoogle">
          <img src={googleSvg} alt="Google Logo" className="mb-[2px]" />
          <p className="ml-5 text-black50 font-medium text-sm">
            Continue with Google
          </p>
        </button>
        <div className="text-sm flex flex-row justify-center mt-[40px]">
          <p className="mr-4 text-black50 font-regular select-none">
            Already have an account?
          </p>
          <p
            className="text-cyan cursor-pointer"
            onClick={() => navigate("/login", { replace: true })}
          >
            Log in
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailSignupComponent;
