import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./UserContext";

const Navbar = (props) => {
   
  const check = useContext(UserContext)

  return (
    <>
      <div style={props.style} className="p-2 bg-gray-100 sticky ">
        <div
          style={props.styleBtn}
          className="bg-gray-100 rounded-md p-2  w-64"
        >
          <div>
            <h1 className="text-2xl text-center font-bold rounded-md  p-2 bg-gray-400">
              Creative Tim{check}
            </h1>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? " text-slate-900" : ""}`}
          >
            <h1 className=" mt-2 rounded-md text-lg p-2 hover:bg-slate-900 hover:text-white">
              <i className="bi bi-box-fill text-gray-400 mr-2"></i>Dashboard
            </h1>
          </NavLink>
          <NavLink
            to="/Tables"
            className={({ isActive }) => `${isActive ? "text-slate-900" : ""} `}
          >
            <h1 className="mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-file-spreadsheet-fill mr-2"></i>
              Tables
            </h1>
          </NavLink>
          <NavLink
            to="/Billing"
            className={({ isActive }) => `${isActive ? "text-slate-900" : ""}`}
          >
            <h1 className=" mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-journal-text mr-2"></i>Billing
            </h1>
          </NavLink>
          <NavLink
            to="/VirtualReality"
            className={({ isActive }) =>
              `${isActive ? "text-slate-900 ," : ""}`
            }
          >
            <h1 className="mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-box-seam mr-2"></i>Virtual
              Reality
            </h1>
          </NavLink>
          <NavLink
            to="/RTL"
            className={({ isActive }) => `${isActive ? "text-slate-900" : ""} `}
          >
            <h1 className=" mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-backpack4 mr-2"></i>RTL
            </h1>
          </NavLink>
          <NavLink
            to="/Notifications"
            className={({ isActive }) => `${isActive ? "text-slate-900" : ""}`}
          >
            <h1 className=" mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-bell mr-2"></i>Notifications
            </h1>
          </NavLink>

          <h1 className="text-xl text-gray-800 font-bold p-2">ACCOUNT PAGES</h1>

          <NavLink
            to="/Profile"
            className={({ isActive }) => `${isActive ? "text-slate-900" : ""} `}
          >
            <h1 className=" mt-1 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className=" text-gray-400 bi bi-person mr-2"></i>Profile
            </h1>
          </NavLink>
          <NavLink
            to="/Signin"
            className={({ isActive }) =>
              `${isActive ? "ttext-slate-900" : ""} `
            }
          >
            <h1 className=" mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-box-arrow-in-right mr-2"></i>
              Sign in
            </h1>
          </NavLink>
          <NavLink
            to="/SignUp"
            className={({ isActive }) => `${isActive ? "text-slate-900" : ""} `}
          >
            <h1 className=" mt-2 rounded-md text-lg p-2 hover:bg-slate-800 hover:text-white">
              <i className="bi text-gray-400 bi-box-arrow-in-left mr-2"></i>Sign
              Up
            </h1>
          </NavLink>
          <div className="mt-6 mb-2.5">
            <button
              style={props.styleBtn}
              type="button"
              className="btn w-full btn-outline-secondary"
            >
              Documentations
            </button>

            <button
              style={props.styleBtn}
              type="button"
              className="btn w-full mt-3 btn-outline-secondary"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
