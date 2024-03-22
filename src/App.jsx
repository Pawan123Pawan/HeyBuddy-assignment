import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NextSignUp from "./Components/NextSignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/next-signup" element={<NextSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
