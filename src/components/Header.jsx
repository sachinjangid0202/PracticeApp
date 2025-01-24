import { NavLink } from "react-router-dom";

const Header = (props) => {
  const ShowForm = () => {
    const open = (document.getElementById(props.ShowForm).style.display =
      "block");
    console.log("Open");
  };
  return (
    <>
      <div
        style={{ width: "100%" }}
        id="form"
        className=" sticky bg-gray-100  w-full"
      >
        <div
          style={props.style}
          className="flex justify-between items-center p-3"
        >
          <h1 className="text-3xl text-gray-600">
            <i className="bi bi-boxes mr-2"></i>Creative Tim
          </h1>
          <div className="flex items-center">
            <input
              type="search"
              className="p-1.5 hover:bg-gray-100 border-1 border-black placeholder:text-gray-800 text-black outline-none w-96 rounded-md"
              placeholder="type here.."
            />

            <button type="button" className="ml-2 btn btn-outline-primary">
              Search
            </button>
          </div>
          <div className="text-gray-600">
            <button type="button" className="btn btn-outline-danger mr-4">
              Online Bulder
            </button>
            <i
              onClick={ShowForm}
              className="bi bi-gear hover:cursor-pointer text-2xl mr-4"
            ></i>
            <i className="bi bi-bell hover:cursor-pointer  text-2xl mr-4"></i>
            <NavLink
              to="/Signin"
              className={({ isActive }) =>
                `${isActive ? "text-gray-500" : "text-gray-500"}`
              }
            >
              <i className="bi bi-person-circle text-2xl"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
