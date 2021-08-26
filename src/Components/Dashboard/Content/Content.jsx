import React from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.development";
// import reactDom from "react-dom";
// import { Link } from "react-router-dom";
import logo from "./cat-svgrepo-com.svg";

let rightNow = new Date();
let newUpdates = [];
const countDown = new Date(2021, 7, 30, 0, 0, 0, 0);

let thatsacat = (
  <h1 className="cat animate__animated animate__bounceIn animate__delay-2s">
    <a style={{ color: "black" }} href="https://raft-wars.com/raftwars">
      That's a cat.
    </a>
  </h1>
);

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
      timeArray: [0, 1, 2, 3, 4, 5, 6, 7],
      lastTime: [7, 6, 5, 4, 3, 2, 1, 0],
      animationIndex: [],
      act: false
    };

    this.countDown = this.countDown.bind(this);
    this.timerUpdates = this.timerUpdates.bind(this);
  }

  componentDidMount() {
    this.setState({
      timeLeft: countDown - rightNow,
    });
    this.countDown();
    this.timer = setInterval(this.countDown, 1000);
    this.timer2 = setInterval(this.timerUpdates, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
  }

  componentDidUpdate() {}

  timerUpdates() {
    this.setState({
      act: !this.state.act
    });
    newUpdates = [];

    for (let i = 0; i < this.state.timeArray.length; ++i) {
      if (this.state.timeArray[i] !== this.state.lastTime[i]) {
        newUpdates.push(i);
      }
    }

    this.setState({
      animationIndex: newUpdates,
    });
  }

  // This method is called whenever the timer counts down a second.
  countDown() {
    // Calculates the time right now and sets our timeLeft equal to the time between Aug 30 and now
    rightNow = new Date();

    this.setState({
      timeLeft: countDown - rightNow,
      lastTime: this.state.timeArray,
    });

    // Sets up a couple of local variables to help calculate the time
    var time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    let remainder = this.state.timeLeft;
    let realTime = this.state.timeLeft / 1000;

    //This ugly if else tree converts seconds to days, hours, minutes, and remaining seconds.
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

    // This sets the state for the displayTime object (deprecated) and an array of the time left.
    this.setState({
      displayTime: time,
      timeArray: [
        parseInt(time.days < 10 ? "0" : time.days.toString()[0]),
        parseInt(
          time.days >= 10 ? time.days.toString()[1] : time.days.toString()[0]
        ),
        parseInt(time.hours < 10 ? "0" : time.hours.toString()[0]),
        parseInt(
          time.hours >= 10 ? time.hours.toString()[1] : time.hours.toString()[0]
        ),
        parseInt(time.minutes < 10 ? "0" : time.minutes.toString()[0]),
        parseInt(
          time.minutes >= 10
            ? time.minutes.toString()[1]
            : time.minutes.toString()[0]
        ),
        parseInt(time.seconds < 10 ? "0" : time.seconds.toString()[0]),
        parseInt(
          time.seconds >= 10
            ? time.seconds.toString()[1]
            : time.seconds.toString()[0]
        ),
      ],
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

          <h1 className="welcome-text animate__animated animate__bounceIn animate__delay-1s">
            {/* This is what is returned when there is positive time left in the countdown */}
            {this.state.timeLeft > 0 ? (
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://www.youtube.com/watch?v=NESCd6IFfLM"
              >
                {this.state.timeArray.map((digit, i) => {
                  return (
                    <span
                      className={
                        this.state.animationIndex[0] <= i && this.state.act === false
                          ? "animate__animated animate__fadeIn"
                          : ""
                      }
                      key={digit + Math.random()}
                    >
                      {/* This is what is actually in the time span */}

                      {digit}
                      {i % 2 === 1 && i < 6 ? ":" : ""}
                    </span>
                  );
                })}
              </a>
            ) : (
              // This is what is returned when there is no time left
              <span>Happy Birthday, Mills.</span>
            )}
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

          {/* The welcome text is currently a big h1 for a timer */}
          <h1 className="welcome-text animate__animated animate__bounceIn animate__delay-1s">
            {/* This is what is returned when there is positive time left in the countdown */}
            {this.state.timeLeft > 0 ? (
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://www.youtube.com/watch?v=NESCd6IFfLM"
              >
                {this.state.timeArray.map((digit, i) => {
                  return (
                    <span
                      className={
                        this.state.animationIndex[0] <= i && this.state.act === false
                          ? "animate__animated animate__fadeIn"
                          : ""
                      }
                      key={digit + Math.random()}
                    >
                      {/* This is what is actually in the time span */}

                      {digit}
                      {i % 2 === 1 && i < 6 ? ":" : ""}
                    </span>
                  );
                })}
              </a>
            ) : (
              // This is what is returned when there is no time left
              <span>Happy Birthday, Mills.</span>
            )}
          </h1>

          <img src={logo} className="App-logo" alt="logo" />

          {thatsacat}
        </div>
      );
    }
  }
}

export default Content;
