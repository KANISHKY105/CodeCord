import { React } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./utilities/NotFound";
import LandingPage from "./components/LandingPage/index";
import Contest from "./components/Contests/index";
import Problem from "./components/Problems/index";
import Discussion from "./components/Discussions/index";
import Form from "./components/Authentication/Form";
import AppLayout from "./layouts/AppLayout";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return (
    <div className="relative flex flex-col h-screen w-full overflow-x-hidden">
      <>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/app" element={<AppLayout />}>
            <Route path="contest" element={<Contest />} />
            <Route path="problem" element={<Problem />} />
            <Route path="discussion" element={<Discussion />} />
            <Route path="auth">
              <Route path="signup" element={<Form type="Sign Up" fields={["Username", "Password", "Confirm New Password", "Email Address"]} buttonName="Sign Up" />} />
              <Route path="login" element={<Form type="Sign In" fields={["Username or Email", "Password"]} buttonName="Sign In" />} />
              <Route path="reset/request" element={<Form type="Password Reset Request" fields={["Registered Email Address"]} buttonName="Reset My Password" />} />
              <Route path="reset" element={<Form type="Password Reset" fields={["New Password", "Confirm New Password"]} buttonName="Reset My Password" />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
