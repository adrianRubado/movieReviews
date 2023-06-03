import { Routes, Route } from "react-router-dom";
import SignInSide from "./pages/SignIn";
import SignUp from "./pages/SignUP";
import { RequireAuth } from "react-auth-kit";
import Logged from "./pages/Logged";
import ThankForRegistering from "./pages/ThankForRegistering";


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
          element={<ThankForRegistering></ThankForRegistering>}
        />
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
