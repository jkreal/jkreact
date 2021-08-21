import React from "react";

import ListItem from "./ListItem";

const Sidebar = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar">

      <div className="row">

        <div className="col-md-12 sidebar-button-col">
          <button
            type="button"
            className="btn btn-warning sidebar-button"
            onClick={props.toggleSidebar}
          >
            Collapse
          </button>
          <ListItem/>
          <ListItem/>
        </div>
      </div>

      {/* <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>

      <ListItem />
      <ListItem /> */}
    </div>
  );
};

export default Sidebar;
