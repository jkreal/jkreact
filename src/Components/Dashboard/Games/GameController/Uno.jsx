import React from "react";

import { Col, Row, Container } from "react-bootstrap";
const unodeck = require("./assets/uno/Unodeck").default;
class Uno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: [0, 0, 0],
      layout1: [0, 0, 0],
      classes: "animate__animated animate__",
      animations: ["bounceInLeft", "bounceInRight"],
    };

    this.rtd = this.rtd.bind(this);
    this.rng = this.rng.bind(this);
  }

  rtd = (min, max, odds) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let calc = Math.random() * (max - min + 1) + min;
    if (calc > (odds * max)) {
        console.log("lookds winn" + calc)
        return true;
    } else {
        console.log('try againnn')
        return false;
    }
  };

  rng = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  startGame = () => {};

  render() {
    return this.props.mobile !== 0 ? (
      <Container className="game-window" style={this.props.view}>
        {this.state.layout.map((i, index) => {
          return (
            <Row
              key={index + "-" + i}
              style={{ margin: "auto", height: "33%" }}
            >
              {this.state.layout1.map((j, jndex) => {
                return (
                  <Col
                    className={
                      "animate__animated animate__" +
                      (this.rtd(0, 99, .5 ) === true ? this.state.animations[0] : this.state.animations[1])
                    }
                    key={jndex + "-" + i}
                    style={{ margin: "auto" }}
                  >
                    {index}, {jndex}
                    {typeof unodeck[this.rng(0,54)].value}
                    <img src={unodeck[this.rng(0,54)].image} />
                  </Col>
                );
              })}
            </Row>
          );
        })}
        <Row style={{bottom: "0"}}>lkawneflk</Row>
      </Container>
    ) : (
      <Container>
        <h1 style={{}}>Please turn your phone over to play {this.props.name}! Turn it back to PORTRAIT MODE to get back to this screen!</h1>
      </Container>
    );
  }
}

export default Uno;
