import React from "react";
import { Link } from "react-router-dom";
import logo from "./cat-svgrepo-com.svg";

let rightNow = new Date();
const countDown = new Date(2021, 7, 30, 0, 0, 0, 0);

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: countDown - rightNow,
      displayTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },

    };

    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.countDown();
    this.setState({
      timeLeft: countDown - rightNow,
    });
    this.timer = setInterval(this.countDown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countDown() {
    rightNow = new Date();

    this.setState({
      timeLeft: countDown - rightNow,
    });

    var time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    let remainder = this.state.timeLeft;
    let realTime = this.state.timeLeft / 1000;

    //Convert seconds remaining to a time object
    if (realTime >= 86400) {
      time.days = Math.floor(realTime / 86400);
      remainder = realTime % 86400;
    } else {
      time.days = 0;
    }
    if (realTime >= 3600) {
      time.hours = Math.floor(remainder / 3600);
      remainder %= 3600;
    } else {
      time.hours = 0;
    }
    if (realTime >= 60) {
      time.minutes = Math.floor(remainder / 60);
      remainder %= 60;
    } else {
      time.minutes = 0;
    }
    if (remainder > 0) {
      time.seconds = Math.floor(remainder);
    } else {
      time.seconds = 0;
    }

    this.setState({
      displayTime: time,
    });
  }

  render() {
    //In this case, the sidebar is disabled.
    if (this.props.sidebar === false) {
      return (
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 content">
          <div className="row">
            {/* This button only appears if the sidebar is disabled */}
            <button
              className="btn btn-warning"
              onClick={this.props.toggleSidebar}
            >
              Sidebar
            </button>
          </div>

          {/* Change this to a foreach? */}
          <h1 className="welcome-text">
            <a style={{textDecoration: "none", color: "red"}} href="https://www.youtube.com/watch?v=NESCd6IFfLM">
            {this.state.displayTime.days < 10
              ? "0" + this.state.displayTime.days
              : this.state.displayTime.days}
            :
            {this.state.displayTime.hours < 10
              ? "0" + this.state.displayTime.hours
              : this.state.displayTime.hours}
            :
            {this.state.displayTime.minutes < 10
              ? "0" + this.state.displayTime.minutes
              : this.state.displayTime.minutes}
            :
            {this.state.displayTime.seconds < 10
              ? "0" + this.state.displayTime.seconds
              : this.state.displayTime.seconds}
            </a>
          </h1>

          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="cat">
            <a style={{ color: "black" }} href="https://raft-wars.com/raftwars">
              That's a cat.
            </a>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 content">
          {/* <h1 className="welcome-text">Welcome to Hell!</h1> */}

          {/* Change this to a foreach? */}
          <h1 className="welcome-text">
            <a style={{textDecoration: "none", color: "red"}} href="https://www.youtube.com/watch?v=NESCd6IFfLM">
            {this.state.displayTime.days < 10
              ? "0" + this.state.displayTime.days
              : this.state.displayTime.days}
            :
            {this.state.displayTime.hours < 10
              ? "0" + this.state.displayTime.hours
              : this.state.displayTime.hours}
            :
            {this.state.displayTime.minutes < 10
              ? "0" + this.state.displayTime.minutes
              : this.state.displayTime.minutes}
            :
            {this.state.displayTime.seconds < 10
              ? "0" + this.state.displayTime.seconds
              : this.state.displayTime.seconds}
            </a>
          </h1>

          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="cat">
            <a style={{ color: "black" }} href="https://raft-wars.com/raftwars">
              That's a cat.
            </a>
          </h1>
        </div>
      );
    }
  }
}

export default Content;
