import React from "react";
import Login from "./pages/Login";
import "./style.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NoteState from "./context/notes/NoteState.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const PrivateRoute = ({ children }) => {
    const isAuthenticated = Cookies.get("authtoken");

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <>
      <NoteState>
        <BrowserRouter basename="oneNote">
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
