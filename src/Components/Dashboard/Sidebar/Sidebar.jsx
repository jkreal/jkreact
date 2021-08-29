import React from "react";

import ListItem from "./ListItem";

let listArray = ["Warning: Do NOT click anything;", "Warning: Do NOT chupacabra anything;", "Warning: Do NOT miss anything;", "You can do this."];
const Sidebar = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar animate__animated animate__slideInDown">
      <div className="row">
        <div className="col-md-12 sidebar-button-col">
          <button
            type="button"
            className="btn btn-warning sidebar-button"
            onClick={props.toggleSidebar}
          >
            Collapse
          </button>
          {listArray.map((title, i) => {
            return (<ListItem key={listArray[i] + i} title={listArray[i]} pos={i + 1}></ListItem>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
