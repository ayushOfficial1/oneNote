import React from "react";
import Login from "./pages/Login";
import "./style.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NoteState from "./context/notes/NoteState.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Register />} />           
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
