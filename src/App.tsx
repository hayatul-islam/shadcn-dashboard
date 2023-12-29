import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useGetMeQuery } from "./features/auth/authApi";
import EmailVerification from "./pages/auth/EmailValidation";
import Login from "./pages/auth/Login";
import Calendar from "./pages/calendar/Calendar";

function App() {
  const { data } = useGetMeQuery();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/email-verification"
          element={<EmailVerification />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
