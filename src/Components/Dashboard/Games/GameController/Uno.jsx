import React from "react";



import { Col, Row, Container } from "react-bootstrap";
const unodeck = require('./assets/uno/Unodeck').default
class Uno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: [0, 0, 0],
      layout1: [0, 0, 0]
    };
  }

  startGame = () => {};

  render() {
    return this.props.mobile !== 0 ? (
      <Container
        className="game-window"
        style={this.props.view}
      >
        {this.state.layout.map((i, index) => {
          return (
            <Row
              key={index + "-" + i}
              style={{ margin: "auto", height: "33%" }}
            >
              {this.state.layout1.map((j, jndex) => {
                return (
                  <Col key={jndex + "-" + i} style={{ margin: "auto" }}>
                    {index}, {jndex}
                    {unodeck.name}
                    <img src={unodeck[jndex].image} />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    ) : (
      <Container><h1>Please flip your phone to play this game!</h1></Container>
    );
  }
}

export default Uno;
