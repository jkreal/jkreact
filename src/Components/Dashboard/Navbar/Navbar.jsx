import React from "react";
import logo from "./jkreact-logo.png";

const Navbar = () => {
  return (
    <div className="row navbar-row">
      <img src={logo} alt="whatdoyoumean" id="logo" className="logo" />
    </div>
  );
};

export default Navbar;
