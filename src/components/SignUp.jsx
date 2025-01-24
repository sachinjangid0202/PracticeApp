import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import formsideimage from '../../public/images/formsideimage.jpg'
const SignUp = () => {
  // let [Name ,setName] = useState()
  // let [Email ,setEmail] = useState()
  // let [Password,setPassword] = useState()
  // let [CheckBox,setCheckBox] = useState()

  // // created a key and get a data
  // const localdata = JSON.parse(localStorage.getItem('Data')) || []

  // // created a object to store a hole data
  // let FormData = {
  //   Name:Name,
  //   Email:Email,
  //   Password:Password
  // }

  // localdata.push(FormData)
  // // it set a data and it convert the data in string formate
  // localStorage.setItem('Data',JSON.stringify(localdata));

  // const FormValidation = (e) => {
  //  e.preventDefault()
  //  if (Name == setName) {
  //   alert("Please enter the name")
  //  }else{
  //   alert("You have enter the Name")
  //  }

  // }
  return (
    <div className="bg-white p-6">
      <div className="flex justify-center">
        <div className="flex bg-white justify-between rounded-xl fixed shadow-md top-2 p-2 pl-4 pr-4 items-center mt-8">
          <h1 className="text-xl font-bold mr-28">Material Dashboard 3</h1>
          <div className="flex justify-between mr-28">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              <h1 className="text-xl p-2 hover:gray-400">Dashboard</h1>
            </NavLink>
            <NavLink
              to="/Profile"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              <h1 className="text-xl p-2 hover:gray-400">Profile</h1>
            </NavLink>
            <NavLink
              to="/SignUp"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              <h1 className="text-xl p-2 hover:gray-400">Sign Up</h1>
            </NavLink>
            <NavLink
              to="/Signin"
              className={({ isActive }) =>
                `${isActive ? "text-blue-500 " : "text-black"}`
              }
            >
              <h1 className="text-xl p-2 hover:gray-400">Sign in</h1>
            </NavLink>
          </div>
          <div className="ml-28">
            <button className="bg-black text-white p-2 rounded-md pl-4 pr-4">
              Free download
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <img
            style={{ width: "700px", height: "690px" }}
            className="rounded-md"
            src={formsideimage}
            alt=""
          />
        </div>
        <div>
          <main className="mt-32 flex justify-center ml-48  items-center">
            <form className="w-96">
              <div className="bg-white border-1 border-slate-400 rounded-xl p-4">
                <div className="bg-pink-500 text-white p-8 rounded-xl -mt-10">
                  <h1 className="font-bold text-4xl text-center">Sign Up </h1>
                </div>
                <div className="mt-8">
                  <input
                    className="w-full border-1 border-gray-300 p-2 rounded-md outline-gray-300 placeholder:text-gray-500"
                    type="text"
                    // value={Name}
                    placeholder="Name"
                  />
                  <input
                    className="w-full border-1 border-gray-300 mt-4 p-2 rounded-md outline-gray-300 placeholder:text-gray-500"
                    type="email"
                    // value={Email}
                    placeholder="Email"
                  />
                  <input
                    className="w-full border-1 border-gray-300 rounded-md p-2 mt-4 outline-gray-300 placeholder:text-gray-500"
                    placeholder="Password"
                    // value={Password}
                    type="password"
                  />
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    className="mr-1 text-pink-500 checked:bg-pink-500"
                    //  value={CheckBox}
                    type="checkbox"
                  />
                  <p className="text-gray-500">
                    I agree the
                    <a
                      className="underline-none text-black font-semibold ml-1 text-decoration-none"
                      href="/#"
                    >
                      Terms and conditions
                    </a>
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="bg-black border-2 w-full border-gray-400 text-white rounded-lg p-2">
                    Sign Up
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <h1 className="flex items-center text-center">
                    Already have a account?
                    <NavLink
                      to="/Signin"
                      className={({ isActive }) =>
                        `${
                          isActive ? "text-blue-500" : "text-blue-700"
                        } text-sm`
                      }
                    >
                      <h1 className="text-xl p-2 hover:gray-400">Sign in</h1>
                    </NavLink>
                  </h1>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
