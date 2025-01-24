import React, { useState } from "react";
import { Form, NavLink } from "react-router-dom";

const Setting = (props) => {
  const CloseForm = () => {
    document.getElementById(props.Form).style.display = "none";
    console.log("Close");
  };
  return (
    <>
      <div
        style={props.style}
        id={props.Form}
        className="shadow-md hidden shadow-gray-700 fixed right-0 top-0 p-3 w-96"
      >
        <div
          style={props.style}
          className="border-1 border-gray-500 rounded-md p-3"
        >
          <div
            style={{ borderBottom: "1px solid #e5e6e3" }}
            className="border-gray-200 flex justify-between p-2"
          >
            <div>
              <h1 className="font-semibold text-xl">
                Material UI Configurator{" "}
              </h1>
              <p className="text-gray-500">See our dashboard options</p>
            </div>
            <i
              style={props.style}
              onClick={CloseForm}
              className="bi bi-x-circle-fill hover:cursor-pointer text-xl"
            ></i>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-xl">Sidebar Color</p>
            <div className="flex justify-between mt-2">
              <button className="bg-red-500 p-2 rounded-full">Red</button>
              <button className="bg-yellow-500 p-2 rounded-full">Yellow</button>
              <button className="bg-green-500 p-2 rounded-full">Green</button>
              <button className="bg-orange-500 p-2 rounded-full">Orange</button>
              <button className="bg-purple-500 p-2 rounded-full">Purple</button>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-bold">Sidenav Type</h1>
            <p className="text-gray-400">
              Choose between different sidenav types
            </p>
            <div className="flex justify-between mt-4">
              <button
                style={props.styleBtn}
                className="rounded-md border-1 w-16 border-gray-500 p-1 pl-4 pr-4"
              >
                Dark
              </button>
              <button
                style={props.styleBtn}
                className="rounded-md border-1 border-gray-500 p-2"
              >
                Tarsparent
              </button>
              <button
                style={props.styleBtn}
                className="rounded-md border-1 border-gray-500 p-2"
              >
                White
              </button>
            </div>
          </div>
          <div
            style={{ borderBottom: "1px solid #e5e6e3" }}
            className="mt-4 flex justify-between pb-4"
          >
            <h1 className="font-bold text-lg">Dark/Light</h1>
            <div className="form-check form-switch">
              <input
                onClick={props.Btn}
                className="form-check-input border-1 border-gray-400 hover:cursor-pointer "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="rounded-md bg-blue-700 text-white p-2 w-full ">
              Free Downloads
            </button>
            <button className="rounded-md border-1 border-gray-500 p-2 w-full mt-4">
              View documentations
            </button>
          </div>
          <div className="mt-8 text-center ">
            <NavLink
              className=" p-1 border-1 border-gray-500 rounded-r-none rounded-md"
              to="/#"
            >
              <i className="bi bi-star mr-2"></i>Star
            </NavLink>
            <NavLink
              className=" p-1 border-1 border-gray-500 rounded-l-none rounded-md"
              to="/#"
            >
              2485
            </NavLink>
          </div>
          <h1 className="mt-4 mb-2 font-bold text-center">
            Thanku for sharing!
          </h1>
          <div className="flex justify-center mt-4">
            <button
              style={props.styleBtn}
              className="border-1 border-black p-2 pl-4 pr-4 rounded-lg"
            >
              Tweet
            </button>
            <button
              style={props.styleBtn}
              className=" p-2 pl-4 pr-4 border-1 border-black rounded-lg ml-4"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
