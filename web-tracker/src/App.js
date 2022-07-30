import React from "react";

/** React-Router-Dom */
import { Routes, Route } from "react-router-dom";
/** Material UI */

/** Pages **/
import LoginPage from "./pages/Login.page";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "./pages/Dashboard.page";

function App() {
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setAuth={setIsAuth} />} />

        <Route
          path="/:user/*"
          element={<ProtectedRoute isAuth={isAuth} redirect="/" />}
        >
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
