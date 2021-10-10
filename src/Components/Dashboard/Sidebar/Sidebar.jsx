import React from "react";
import "./Sidebar.css";

import ListItem from "./ListItem";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// These populate the listitems in the sidebar.
// Change order to localstorage and then cloud, somehow.
let listArray = ["Home", "Games", "Apps", "Socials"];
let messageArray = [
  "This is where you started",
  "These probably don't work yet",
  "Or something like that",
  "Just in case",
];

const Sidebar = (props) => {
  const location = useLocation();

  let cat = "cat-5.png";
  let profileImage = require("../../../assets/cats/" + cat);
  return (
    // The animation changes depending on screen size
    <div
      className={
        "col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar animate__animated" +
        (props.mobile > 1 ? " animate__bounceInLeft" : " animate__slideInDown")
      }
    >
      <div className="row">
        <div className="col-md-12 sidebar-col">
          {/* The Collapse button will not show if the screen is large enough. */}
          {props.mobile > 1 ? (
            <div className="sidebar-profile">
              <h1>Welcome, {props.username}</h1>
              <img alt="notyourprofile" src={profileImage} />
              <h2>Something funnyyy
              </h2>
            </div>
          ) : (
            <Button onClick={props.toggleSidebar} variant="warning">
              Collapse
            </Button>
          )}

          {/* This is where to add their profile */}

          {/* This maps the listArray to the sidebar */}
          <ul>
            {listArray.map((title, i) => {
              return (
                <ListItem
                  key={listArray[i] + i}
                  title={title}
                  message={messageArray[i]}
                  pos={i + 1}
                  mobile={props.mobile}
                  toggleSidebar={props.toggleSidebar}
                  location={location.pathname}
                ></ListItem>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
