import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {UserContext} from "./UserContext";

const Signin = (props) => {
  // const { setIsSignUp } = useContext(UserContext);
  return (
    <>
      <div       
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "738px",
          background:
            "url(https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
        className="flex justify-center"
      >
        <div>
          <div className="max-w-7xl flex justify-between items-center p-2 pl-4 pr-4 rounded-xl bg-white mt-6">
            <div className="mr-52">
              <h1 className="text-xl font-bold ">Material Dashboard</h1>
            </div>
            <div className="flex justify-between w-96 ">
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
            <div className="ml-52">
              <button className="bg-black text-white p-2 rounded-md pl-4 pr-4">
                Free download
              </button>
            </div>
          </div>

          <main className="mt-20  flex justify-center items-center">
            <form className="w-96">
              <div className="bg-white border-2 rounded-xl p-4">
                <div className="bg-black text-white p-8 rounded-xl -mt-10">
                  <h1 className="font-bold text-4xl text-center">Sign in </h1>
                </div>
                <div className="mt-8">
                  <input
                    className="w-full border-2 border-gray-300 p-2 rounded-md outline-gray-500 placeholder:text-gray-500"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full border-2 border-gray-300 rounded-md p-2 mt-4 outline-gray-500 placeholder:text-gray-500"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div className="mt-4">
                  <a className="underline-none text-decoration-none" href="/#">
                    Forgetpassword?
                  </a>
                </div>
                <div className="flex justify-center mt-4">
                {/* <button type="button" class="btn w-full btn-outline-dark">Sign in</button> */}
                  <button
                    // onClick={props.SigninBtn}
                    className="bg-black border-2 w-full  border-gray-400 text-white rounded-lg p-2"
                  >
                    Sign in
                  </button>
                </div>
                <div className="mt-4">
                  <h1 className="flex items-center">
                    Don't have an account?
                    <NavLink
                      to="/SignUp"
                      className={({ isActive }) =>
                        `${
                          isActive ? "text-blue-500" : "text-blue-700"
                        } text-sm`
                      }
                    >
                      <h1 className="text-xl p-2 hover:gray-400">Sign Up</h1>
                    </NavLink>
                  </h1>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default Signin;

