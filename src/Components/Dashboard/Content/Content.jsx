import React from "react";
// import reactDom from "react-dom";
// import { Link } from "react-router-dom";
import logo from "./cat-svgrepo-com.svg";
import { Button, Col, Row } from "react-bootstrap";

let rightNow = new Date();
let newUpdates = [];
const countDown = new Date(2021, 11, 25, 0, 0, 0, 0);

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: countDown - rightNow,
      timeArray: [0, 1, 2, 3, 4, 5, 6, 7],
      lastTime: [7, 6, 5, 4, 3, 2, 1, 0],
      animationIndex: [],
      act: false,
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
      act: !this.state.act,
    });

    // Every timer tick, a new array is created and details which positions updated since the
    // Last timer tick.
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
    let remainder;
    let realTime = Math.floor(this.state.timeLeft / 1000);

    //This ugly if else tree converts seconds to days, hours, minutes, and remaining seconds.
    if (realTime >= 86400) {
      time.days = Math.floor(realTime / 86400);
      remainder = realTime % 86400;
    } else {
      time.days = 0;
      remainder = realTime;
    }

    if (realTime >= 3600) {
      time.hours = Math.floor(remainder / 3600);
      remainder %= 3600;
    } else {
      time.hours = 0;
      remainder = realTime;
    }

    if (realTime >= 60) {
      time.minutes = Math.floor(remainder / 60);
      remainder %= 60;
    } else {
      time.minutes = 0;
      remainder = realTime;
    }

    if (remainder > 0) {
      time.seconds = Math.floor(remainder);
    } else {
      time.seconds = 0;
    }

    this.setState({
      // Saves the calculated time object as an array. We use an array so that we can
      // easily keep track of which number needs an animation.
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
    return (
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 content animate__animated animate_flipInY">
        <div className="row">
          {!this.props.sidebar ? (
            <button
              // This button appears if the sidebar is disabled
              className="btn btn-warning animate__animated animate_flipInY"
              onClick={this.props.toggleSidebar}
            >
              Sidebar
            </button>
          ) : (
            // Otherwise, this button appears
            <Button variant="danger" onClick={this.handleShow}>
              thebest_thebest_thebest
            </Button>
          )}
        </div>

        {/* This h1 is where the timer is nested in */}
        <h1
          className="welcome-text animate__animated animate__flipInY"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {this.state.timeLeft > 0 ? (
            <Row style={{margin: "auto"}}>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://www.youtube.com/watch?v=NESCd6IFfLM"
              >
                {/* Maps out the time remaining using the timeArray and animationIndex */}
                {this.state.timeArray.map((digit, i) => {
                  return (
                      <span key={digit + Math.random()}>
                        {/* This is what is actually in the time span */}
                        {digit}
                        {i % 2 === 1 && i < 6 ? ":" : ""}
                      </span>
                  );
                })}
                <span style={{ color: "black", fontSize: "0.7em" }}>
                  ...until Christmas!
                </span>
              </a>
            </Row>
          ) : (
            // End of the conditional
            // This is what is returned when there is no time left
            <span>Food is DELICIOUS</span>
          )}
        </h1>

        {/* This is a cat, that spins. For the lolz. */}
        <a href="#">
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        {/* This is the text at the bottom of the page */}
        <h1 className="cat animate__animated animate__bounceIn animate__delay-2s">
          {this.state.timeLeft < 0 ? (
            <a
              // style={{ color: "black", textDecoration: "none" }}
              href="http://www.google.com/url?q=http%3A%2F%2Fwww.orthopedikos-printzios.gr%2Fzhmqqgvv%2Fcbnbtcdv.php&sa=D&sntz=1&usg=AFQjCNG4Vf9S20nOeXPy6jvnqWK8zOu2Tg"
            >
              {/* Text when the difference in time is negative, or has already expired */}
              Dear Camille....
            </a>
          ) : (
            <a
              // style={{ color: "black", textDecoration: "none" }}
              href="http://www.google.com/url?q=http%3A%2F%2Fwww.orthopedikos-printzios.gr%2Fzhmqqgvv%2Fcbnbtcdv.php&sa=D&sntz=1&usg=AFQjCNG4Vf9S20nOeXPy6jvnqWK8zOu2Tg"
            >
              {/* This text shows while the timer still has time left */}
              Dear Camille....
            </a>
          )}
        </h1>
      </div>
    );
  }
}

export default Content;
