import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Modal, Button } from "react-bootstrap";

import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

import Games from "./Games";
import Apps from "./Apps";
import Socials from "./Socials";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = require("./firebase-config.js");
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// var database = getDatabase(app);

const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

const auth = getAuth(app);

console.log(analytics);
// console.log(database);

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      mobileView: 0,
      showSidebar: true,
    };
    this.updateViewState = this.updateViewState.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  // This method runs every time the window is resized.
  // It determines whether the sidebar is shown and sets a variable in state
  updateViewState() {
    let xwidth = document.documentElement.clientWidth;
    let yheight = document.documentElement.clientHeight;
    console.log("the viewport is " + xwidth + "px by " + yheight + "px");

    // Phone in portrait mode
    if (xwidth < 600) {
      this.setState({
        mobileView: 0,
        showSidebar: false,
      });
      // Phone in Landscape mode
    } else if (xwidth > 600 && xwidth < 1000 && yheight < 500) {
      this.setState({
        mobileView: 1,
        showSidebar: false,
      });
      //iPad/Tablet in portrait mode
    } else if (xwidth > 600 && xwidth < 1000 && yheight > 500) {
      this.setState({
        mobileView: 2,
        showSidebar: true,
      });
      //iPad/Tablet in Landscape mode
    } else if (xwidth > 992 && yheight < 992) {
      this.setState({
        mobileView: 3,
        showSidebar: true,
      });
      // Desktop/Laptop Sub 1080p
    } else if (
      xwidth > 1000 &&
      xwidth < 1900 &&
      yheight > 700 &&
      yheight < 1200
    ) {
      this.setState({
        mobileView: 4,
        showSidebar: true,
      });
      // Desktop/Laptop 1080p
    } else if (xwidth > 1901 && xwidth < 2500) {
      this.setState({
        mobileView: 5,
        showSidebar: true,
      });
      //2k and above
    } else {
      this.setState({
        mobileView: 6,
        showSidebar: true,
      });
    }
  }

  toggleSideBar() {
    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }

  componentDidMount() {
    this.updateViewState();
    window.addEventListener("resize", this.updateViewState);
  }

  componentWillUnmount() {
    // We must remove our event listeners on unmount
    window.removeEventListener("resize", this.updateViewState);
  }

  handleClose() {}

  handleShow() {}

  render() {
    // This will render the entirety of the dashboard together,
    // Depending on what kind of screen they are using to view the site.
    return (
      <Router>
        <div className="dashboard container-fluid">
          <Navbar />
          <div className="row">
            {this.state.showSidebar ? (
              <Sidebar
                toggleSidebar={this.toggleSideBar}
                handleShow={this.handleShow}
                handleClose={this.handleClose}
                mobile={this.state.mobileView}
              />
            ) : this.state.mobileView < 1 ? (
              ""
            ) : (
              <div
                className={
                  this.state.mobileView >= 1 ? (
                    "blank-content col-xs-12 col-sm-12 col-lg-2 col-md-2"
                  ) : (
                    <div>A div</div>
                  )
                }
              ></div>
            )}
            <Switch>
              <Route path="/games">
                <Games
                  mobile={this.state.mobileView}
                  toggleSidebar={this.toggleSideBar}
                  sidebar={this.state.showSidebar}
                />
              </Route>
              <Route path="/apps">
                <Apps
                  mobile={this.state.mobileView}
                  toggleSidebar={this.toggleSideBar}
                  sidebar={this.state.showSidebar}
                />
              </Route>
              <Route path="/socials">
                <Socials
                  mobile={this.state.mobileView}
                  sidebar={this.state.showSidebar}
                  toggleSideBar={this.toggleSideBar}
                />
              </Route>
              <Route path="/">
                <Content
                  mobile={this.state.mobileView}
                  sidebar={this.state.showSidebar}
                  toggleSidebar={this.toggleSideBar}
                  signin={this.signInWithPopup}
                />
              </Route>
            </Switch>

            {this.state.mobileView > 0 ? (
              <div className="blank-content col-xs-12 col-sm-12 col-lg-2 col-md-2"></div>
            ) : (
              ""
            )}
          </div>

          <div className="row">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default Dashboard;
