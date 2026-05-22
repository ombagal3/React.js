import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>

        {/* Login Route */}
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        {/* Register Route */}
        <Route
          path="/register"
          element={user ? <Navigate to="/home" /> : <Register />}
        />

        {/* Home Route */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;