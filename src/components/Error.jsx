import React from "react";
import error from "../../public/images/errorimage.webp";

const Error = () => {
  return (
    <div
      style={{ height: "627px" }}
      className="flex justify-center items-center"
    >
      <img style={{ height: "627px" }} src={error} alt="" />
    </div>
  );
};

export default Error;
