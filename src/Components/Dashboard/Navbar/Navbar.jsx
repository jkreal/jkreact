import React from "react";
import logo from "./jkreact-logo.png";

const Navbar = () => {
  return (
    <div className="row navbar-row">
      <img src={logo} alt="whatdoyoumean" id="logo" className="logo animate__animated animate__flipInY animate__delay-2s" />
    </div>
  );
};

export default Navbar;
