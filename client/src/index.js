import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./utils/PrivateRoute";
import Loading from "./screens/components/Loading";
import Home from "./screens/components/HomeScreen/Home";
import Notification from "./screens/components/HomeScreen/Notification";
import Tasks from "./screens/components/HomeScreen/Tasks";
import People from "./screens/People";
import Profile from "./screens/components/SettingScreen/Profile";
import NotiSetting from "./screens/components/SettingScreen/Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const SignupScreen = lazy(() => import("./screens/SignupScreen"));
const ForgotPwScreen = lazy(() => import("./screens/ForgotPwScreen"));
const ResetPwScreen = lazy(() => import("./screens/ResetPwScreen"));
const EmailSignupComponent = lazy(() =>
  import("./screens/components/SignupScreen/EmailSignupComponent")
);
const SignupComponent = lazy(() =>
  import("./screens/components/SignupScreen/SignupComponent")
);
const SetupScreen = lazy(() => import("./screens/SetupScreen"));
const CreateProject = lazy(() =>
  import("./screens/components/SetupScreen/CreateProject")
);
const UploadAvatar = lazy(() =>
  import("./screens/components/SetupScreen/UploadAvatar")
);
const Members = lazy(() => import("./screens/components/SetupScreen/Members"));
const EmailMembers = lazy(() =>
  import("./screens/components/SetupScreen/EmailMembers")
);
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const SettingScreen = lazy(() => import("./screens/SettingScreen"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
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
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<HomeScreen />}>
                <Route index element={<Home />} />
                <Route path="/noti" element={<Notification />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/people" element={<People />} />
                <Route path="/setting" element={<SettingScreen />}>
                  <Route index element={<Profile />} />
                  <Route
                    path="/setting/noti-setting"
                    element={<NotiSetting />}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
