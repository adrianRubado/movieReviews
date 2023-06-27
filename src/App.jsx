import { Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import { RequireAuth } from "react-auth-kit";
import Logged from "./pages/Logged";
import ForgotPw from "./pages/ForgotPw";
import CheckMail from "./pages/CheckMail";
import Movie from "./pages/Movie";

import RestorePassw from "./pages/RestorePassW";
import About from "./pages/About";
import { Navigate } from "react-router-dom";
import ThankForRegistering from "./pages/ThankForRegistering";
import MyReviews from "./pages/MyReviews";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <RequireAuth loginPath="/sign-in">
              <Logged />
            </RequireAuth>
          }
        />
        <Route
          path="/home/:id"
          element={
            <RequireAuth loginPath="/sign-in">
              <Logged />
            </RequireAuth>
          }
        />

        <Route
          path="/my-reviews"
          element={
            <RequireAuth loginPath="/sign-in">
              <MyReviews />
            </RequireAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth loginPath="/sign-in">
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth loginPath="/sign-in">
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path="/about"
          element={
            <RequireAuth loginPath="/sign-in">
              <About />
            </RequireAuth>
          }
        />

        <Route
          path="/movie/:movieId"
          element={
            <RequireAuth loginPath="/sign-in">
              <Movie />
            </RequireAuth>
          }
        />
        <Route path="/thankForRegistering" element={<ThankForRegistering />} />
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPw />} />
        <Route path="/forgot-password/check-mail" element={<CheckMail />} />
        <Route path="/restore-password" element={<RestorePassw />} />

        {/* <Route path="/forgot-password" element={<ForgotPw />} /> */}
      </Routes>
    </>
  );
}

export default App;
