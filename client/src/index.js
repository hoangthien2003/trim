import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgotPwScreen from "./screens/ForgotPwScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ResetPwScreen from "./screens/ResetPwScreen";
import EmailSignupComponent from "./screens/components/EmailSignupComponent";
import SignupComponent from "./screens/components/SignupComponent";
import SetupScreen from "./screens/SetupScreen";
import CreateProject from "./screens/components/CreateProject";
import UploadAvatar from "./screens/components/UploadAvatar";
import Members from "./screens/components/Members";
import EmailMembers from "./screens/components/EmailMembers";
import HomeScreen from "./screens/HomeScreen";
import Home from "./screens/components/HomeScreen/Home";
import Tasks from "./screens/components/HomeScreen/Tasks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotpw" element={<ForgotPwScreen />} />
        <Route path="/reset" element={<ResetPwScreen />} />
        <Route path="/signup" element={<SignupScreen />}>
          <Route index element={<EmailSignupComponent />} />
          <Route path="detail" element={<SignupComponent />} />
        </Route>
        <Route path="/setup" element={<SetupScreen />}>
          <Route index element={<CreateProject />} />
          <Route path="upload-avatar" element={<UploadAvatar />} />
          <Route path="members" element={<Members />} />
          <Route path="email-members" element={<EmailMembers />} />
        </Route>
        <Route path="/" element={<HomeScreen />}>
          <Route index element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
