import { Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import { RequireAuth } from "react-auth-kit";
import Logged from "./pages/Logged";
import ForgotPw from "./pages/ForgotPw";
import CheckMail from "./pages/CheckMail";
/* import ForgotPW from "./pages/ForgotPw";
 */
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/loggedIn"
          element={
            <RequireAuth loginPath="/sign-in">
              <Logged />
            </RequireAuth>
          }
        />
        <Route
          path="/thankForRegistering"
          element={<h1>Revisa el mail para verificar tu cuenta</h1>}
        />
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
