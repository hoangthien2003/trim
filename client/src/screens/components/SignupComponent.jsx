import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { EmailSignupSelector } from "../../redux/selector";
import ErrorItem from "./ErrorItem";

function SignupComponent() {
  /** REACT STATE */
  const [nameError, setNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPwError, setConfirmPwError] = React.useState("");
  const [borderInputName, setBorderInputName] = React.useState(
    "border-outlineButton"
  );
  const [borderInputPassword, setBorderInputPassword] = React.useState(
    "border-outlineButton"
  );
  const [borderInputConfirmPw, setBorderInputConfirmPw] = React.useState(
    "border-outlineButton"
  );
  const [displayErrorName, setDisplayErrorName] = React.useState("hidden");
  const [displayErrorPassword, setDisplayErrorPassword] =
    React.useState("hidden");
  const [displayErrorConfirmPw, setDisplayErrorConfirmPw] =
    React.useState("hidden");
  const [widthInputNameDesktop, setWidthInputNameDesktop] =
    React.useState("md:w-full");
  const [widthInputNameMobile, setWidthInputNameMobile] =
    React.useState("w-full");
  const [widthInputPasswordDesktop, setWidthInputPasswordDesktop] =
    React.useState("md:w-full");
  const [widthInputPasswordMobile, setWidthInputPasswordMobile] =
    React.useState("w-full");
  const [widthInputConfirmPwDesktop, setWidthInputConfirmPwDesktop] =
    React.useState("md:w-full");
  const [widthInputConfirmPwMobile, setWidthInputConfirmPwMobile] =
    React.useState("w-full");

  /** VARIABLE */
  const navigate = useNavigate();
  const emailSignup = useSelector(EmailSignupSelector);

  /** FORMIK VALIDATION */
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2, "The length must greater 2 character."),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password has at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"
        ),
    }),
  });

  /** VALIDATE AND SET ERROR STATE FUNCTION */
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    let isError = 0;
    if (!formik.values.name) {
      formik.errors.name = "This input is not a blank!";
      isError = 1;
    }
    if (!formik.values.password) {
      formik.errors.password = "This input is not a blank!";
      isError = 1;
    }
    if (!formik.values.confirmPassword) {
      formik.errors.confirmPassword = "This input is not a blank!";
      isError = 1;
    }
    if (formik.values.confirmPassword !== formik.values.password) {
      formik.errors.confirmPassword = "Password must match!";
      isError = 1;
    }
    /** IF THE FORM HASN'T ANY ERROR => SEND USERCRED TO SERVER */
    if (!isError) {
      const userCredential = {
        email: emailSignup,
        name: formik.values.name,
        password: formik.values.password,
      };
      // await axios
      //   .post("http://localhost:5000/api/auth/create-user", userCredential)
      //   .then((res) => console.log(res))
      //   .catch((error) => console.log(error));
    } else {
      setNameError(formik.errors.name);
      setPasswordError(formik.errors.password);
      setConfirmPwError(formik.errors.confirmPassword);
      if (formik.errors.name) {
        setNameError(formik.errors.name);
        setBorderInputName("border-red-50");
        setWidthInputNameDesktop("md:w-[505px]");
        setWidthInputNameMobile("w-[235px]");
        setDisplayErrorName("block");
      }
      if (formik.errors.password) {
        setPasswordError(formik.errors.password);
        setBorderInputPassword("border-red-50");
        setWidthInputPasswordDesktop("md:w-[505px]");
        setWidthInputPasswordMobile("w-[235px]");
        setDisplayErrorPassword("block");
      }
      if (formik.errors.confirmPassword) {
        setConfirmPwError(formik.errors.confirmPassword);
        setBorderInputConfirmPw("border-red-50");
        setWidthInputConfirmPwDesktop("md:w-[505px]");
        setWidthInputConfirmPwMobile("w-[235px]");
        setDisplayErrorConfirmPw("block");
      }
    }
    navigate("/setup", { replace: true });
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="cardTitle mb-[20px] md:mb-[30px] text-[24px] md:text-[28px]">
          Sign Up
        </h1>
        <form method="post" onSubmit={handleSubmitSignup} className="form">
          <div className="h-[80px] mb-[25px]">
            <label htmlFor="name" className={`formLabel text-gray`}>
              Enter your full name
            </label>
            <div
              className={`relative border-[2px] ${borderInputName} rounded-[8px]`}
            >
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className={`formInput ${widthInputNameDesktop} ${widthInputNameMobile}`}
                onFocus={() => {
                  setNameError("");
                  setBorderInputName("border-outlineButton");
                  setDisplayErrorName("hidden");
                  setWidthInputNameDesktop("md:w-full");
                  setWidthInputNameMobile("w-full");
                }}
              />
              <div
                className={`${displayErrorName} absolute top-[10px] right-[15px]`}
              >
                <ErrorItem />
              </div>
            </div>
            {nameError && (
              <p className="text-[12px] select-none text-red-500">
                {nameError}
              </p>
            )}
          </div>
          <div className="h-[80px] mb-[25px]">
            <label htmlFor="password" className={`formLabel text-gray`}>
              Password
            </label>
            <div
              className={`relative border-[2px] ${borderInputPassword} rounded-[8px]`}
            >
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={`formInput ${widthInputPasswordDesktop} ${widthInputPasswordMobile}`}
                onFocus={() => {
                  setPasswordError("");
                  setBorderInputPassword("border-outlineButton");
                  setWidthInputPasswordDesktop("md:w-full");
                  setWidthInputPasswordMobile("w-full");
                  setDisplayErrorPassword("hidden");
                }}
              />
              <div
                className={`${displayErrorPassword} absolute top-[10px] right-[15px]`}
              >
                <ErrorItem />
              </div>
            </div>
            {passwordError && (
              <p className="text-[12px] select-none text-red-500">
                {passwordError}
              </p>
            )}
          </div>
          <div className="h-[80px] mb-[25px]">
            <label htmlFor="confirmPassword" className={`formLabel text-gray`}>
              Confirm password
            </label>
            <div
              className={`relative border-[2px] ${borderInputConfirmPw} rounded-[8px]`}
            >
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className={`formInput ${widthInputConfirmPwDesktop} ${widthInputConfirmPwMobile}`}
                onFocus={() => {
                  setConfirmPwError("");
                  setBorderInputConfirmPw("border-outlineButton");
                  setWidthInputConfirmPwDesktop("md:w-full");
                  setWidthInputConfirmPwMobile("w-full");
                  setDisplayErrorConfirmPw("hidden");
                }}
              />
              <div
                className={`${displayErrorConfirmPw} absolute top-[10px] right-[15px]`}
              >
                <ErrorItem />
              </div>
            </div>
            {confirmPwError && (
              <p className="text-[12px] select-none text-red-500">
                {confirmPwError}
              </p>
            )}
          </div>
          <button type="submit" className="buttonPurple">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupComponent;
