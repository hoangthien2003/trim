import React, { useState, useEffect } from "react";
import googleSvg from "../images/google.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorItem from "./components/SetupScreen/ErrorItem";
import { auth, providerGoogle } from "../firebase/config.js";
import { LOCAL_STORAGE_TOKEN_NAME, URL_BASE } from "../contexts/constants.js";
import axios from "axios";

function LoginScreen() {
  const [borderInputEmail, setBorderInputEmail] = useState(
    "border-outlineButton dark:border-bgOtherPopup"
  );
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [displayErrorEmail, setDisplayErrorEmail] = useState("hidden");
  const [displayErrorPassword, setDisplayErrorPassword] = useState("hidden");
  const [borderInputPassword, setBorderInputPassword] = useState(
    "border-outlineButton dark:border-bgOtherPopup"
  );
  const [widthInputEmailDesktop, setWidthInputEmailDesktop] =
    useState("md:w-full");
  const [widthInputEmailMobile, setWidthInputEmailMobile] = useState("w-full");
  const navigate = useNavigate();
  const [widthInputPasswordDesktop, setWidthInputPasswordDesktop] =
    useState("md:w-full");
  const [widthInputPasswordMobile, setWidthInputPasswordMobile] =
    useState("w-full");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email is not correct, try again."
        ),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password has at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"
        ),
    }),
  });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: formik.values.email,
      password: formik.values.password,
    };
    const response = await axios
      .post(`${URL_BASE}/api/auth/check-login-info`, data)
      .catch((err) => {
        const messageError = err.response.data.message;
        if (messageError.email) {
          setEmailError(messageError.email);
          setBorderInputEmail("border-red-50");
          setDisplayErrorEmail("block");
          setWidthInputEmailDesktop("md:w-[505px]");
          setWidthInputEmailMobile("w-[235px]");
        }
        if (messageError.password) {
          setPasswordError(messageError.password);
          setBorderInputPassword("border-red-50");
          setDisplayErrorPassword("block");
          setWidthInputPasswordDesktop("md:w-[505px]");
          setWidthInputPasswordMobile("w-[235px]");
        }
      });
    if (response.data.success === true) {
      await axios
        .post(`${URL_BASE}/api/auth/login`, data)
        .then((res) => {
          if (res.data.success === true) {
            auth.signInWithEmailAndPassword(
              formik.values.email,
              formik.values.password
            );
            localStorage.setItem(
              LOCAL_STORAGE_TOKEN_NAME,
              res.data.accessToken
            );
            navigate("/", { replace: true });
          }
        })
        .catch((err) => {
          const messageError = err.response.data.message;
          setPasswordError(messageError.password);
          setBorderInputPassword("border-red-50");
          setDisplayErrorPassword("block");
          setWidthInputPasswordDesktop("md:w-[505px]");
          setWidthInputPasswordMobile("w-[235px]");
        });
    }
  };

  async function handleLoginWithGoogle(e) {
    e.preventDefault();
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      providerGoogle
    );

    const data = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL,
      password: user.uid,
    };

    let url;
    if (additionalUserInfo.isNewUser) {
      console.log("regis");
      url = `${URL_BASE}/api/auth/register`;
    } else {
      console.log("login");
      url = `${URL_BASE}/api/auth/login`;
    }

    await axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="cardTitle">Welcome back</h1>
        <form method="post" onSubmit={handleSubmitLogin} className="form">
          <div className="h-[80px] mb-[5px] mt-[20px]">
            <label htmlFor="email" className="formLabel">
              Email address
            </label>
            <div
              className={`relative border-[2px] dark:border-[1px] ${borderInputEmail} rounded-[8px]`}
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
                  setBorderInputEmail(
                    "border-outlineButton dark:border-bgOtherPopup"
                  );
                  setDisplayErrorEmail("hidden");
                  setWidthInputEmailDesktop("md:w-full");
                  setWidthInputEmailMobile("w-full");
                }}
                className={`formInput ${widthInputEmailDesktop} ${widthInputEmailMobile}`}
              />
              <div
                className={`${displayErrorEmail} absolute top-[10px] right-[15px]`}
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
          <div className="h-[80px] mb-[10px] mt-[20px]">
            <label htmlFor="password" className="formLabel">
              Password
            </label>
            <div
              className={`relative border-[2px] dark:border-[1px] ${borderInputPassword} rounded-[8px]`}
            >
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onFocus={() => {
                  setPasswordError("");
                  formik.errors.password = "";
                  setBorderInputPassword(
                    "border-outlineButton dark:border-bgOtherPopup"
                  );
                  setWidthInputPasswordDesktop("md:w-full");
                  setWidthInputPasswordMobile("w-full");
                  setDisplayErrorPassword("hidden");
                }}
                className={`formInput ${widthInputPasswordDesktop} ${widthInputPasswordMobile}`}
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
          <p
            className="hover:underline cursor-pointer select-none text-gray dark:text-black-10 text-[12px] mt-2"
            onClick={() => navigate("/forgotpw")}
          >
            Forgot your password?
          </p>
          <button type="submit" className="buttonPurple mt-[20px]">
            Log in
          </button>
        </form>
        <div className="flex justify-center items-center w-full my-10">
          <div className="h-[1px] bg-outlineButton dark:bg-bgOtherPopup w-full"></div>
          <div className="absolute bg-white dark:bg-bgProjectCardDark px-2">
            <p className="text-gray dark:text-black-10 text-sm">or</p>
          </div>
        </div>
        <button
          onClick={(e) => handleLoginWithGoogle(e)}
          className="buttonGoogle"
        >
          <img src={googleSvg} alt="Google Logo" className="mb-[2px]" />
          <p className="ml-5 text-black-50 dark:text-whitesmoke font-medium text-sm">
            Continue with Google
          </p>
        </button>
        <div className="text-sm flex flex-row justify-center mt-[40px]">
          <p className="mr-4 text-black-50 dark:text-whitesmoke font-regular select-none">
            Don't have an account?
          </p>
          <p
            className="text-cyan cursor-pointer hover:underline"
            onClick={() => navigate("/signup", { replace: true })}
          >
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
