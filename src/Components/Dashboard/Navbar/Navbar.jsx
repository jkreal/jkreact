import React from "react";
import logo from "./jkreact-logo.png";

const Navbar = () => {

  function doTap(e) {
    e.preventDefault();
  }

  return (
    <div className="row navbar-row">
      <img onClick={doTap} src={logo} alt="whatdoyoumean" id="logo" className="logo animate__animated animate__flipInY" />
    </div>
  );
};

export default Navbar;
