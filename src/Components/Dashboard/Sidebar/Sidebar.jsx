import React from "react";
import "./Sidebar.css";

import ListItem from "./ListItem";

let listArray = ["Home", "Games", "Apps", "Socials"];
let messageArray = [
  "This is where you started",
  "These probably don't work yet",
  "Or something like that",
  "Just in case",
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
          <ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
