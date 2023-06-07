import { Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import { RequireAuth } from "react-auth-kit";
import Logged from "./pages/Logged";
import ForgotPw from "./pages/ForgotPw";
import CheckMail from "./pages/CheckMail";
import Movie from "./pages/Movie";
import { Navigate } from "react-router-dom";

import ThankForRegistering from "./pages/ThankForRegistering";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth loginPath="/sign-in">
              <Logged />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/thankForRegistering" element={<ThankForRegistering />} />
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPw />} />
        <Route path="/forgot-password/check-mail" element={<CheckMail />} />
        {/* <Route path="/forgot-password" element={<ForgotPw />} /> */}
      </Routes>
    </>
  );
}

export default App;
