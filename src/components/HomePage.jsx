import React, { useState } from "react";
import MainLayout from "./MainLayout";
import { UserContext } from "../components/UserContext.js";
import { Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import { Table } from "react-bootstrap";

const HomePage = () => {

  return (
    <UserContext.Provider value={"Hello"}>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout/>}/>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default HomePage;
