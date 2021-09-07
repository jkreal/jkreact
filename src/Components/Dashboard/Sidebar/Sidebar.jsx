import React from "react";
import "./Sidebar.css";

import ListItem from "./ListItem";


let listArray = [
  "Warning: Do NOT click anything;",
  "Warning: Do NOT chupacabra anything;",
  "Warning: Do NOT miss anything;",
  "You can do this.",
];
let messageArray = [
  "That could lead to some good memories.",
  "That could lead to some fond laughter",
  "Have you got it, yet?",
  "The rest is up to you.",
];

const Sidebar = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar animate__animated animate__slideInDown">
      <div className="row">
        <div className="col-md-12 sidebar-col">
          <button
            type="button"
            className="btn btn-warning sidebar-button"
            onClick={props.toggleSidebar}
          >
            Collapse
          </button>
          {/* This maps the listArray to the sidebar */}
          {listArray.map((title, i) => {
            return (
              <ListItem
                key={listArray[i] + i}
                title={listArray[i]}
                message={messageArray[i]}
                pos={i + 1}
              ></ListItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
