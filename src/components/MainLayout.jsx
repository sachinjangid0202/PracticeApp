import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Pageroutes from "./Pageroutes";
import Setting from "./Setting";
import { UserContext } from "./UserContext";

const MainLayout = (props) => {

  const [OpenForm] = useState("Form");

  const [MyStyle, setMyStyle] = useState({
    color: "black",
    background: "white",
  });

  const [BtnStyle, setBtnStyle] = useState({
    color: "black",
    background: "white",
  });

  const ToggleBtn = () => {
    console.log("Dark Mode");
    if (MyStyle.color === "black" && BtnStyle.color === "black") {
      setMyStyle({
        color: "white",
        background: "#171717",
      });
      setBtnStyle({
        color: "white",
        background: "#323a54",
      });
    } else {
      setMyStyle({
        color: "black",
        background: "white",
      });
      setBtnStyle({
        color: "black",
        background: "white",
      });
      console.log("Light Mode");
    }
  };
  return (
    <div style={props.Form}>
      <div className="flex">
        <Navbar style={MyStyle} styleBtn={BtnStyle} />
        <div className="w-full">
          <Header style={MyStyle} ShowForm={OpenForm} />
          <Pageroutes style={MyStyle} styleBtn={BtnStyle} />
          <Setting
            style={MyStyle}
            styleBtn={BtnStyle}
            Btn={ToggleBtn}
            Form={OpenForm}
          />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
