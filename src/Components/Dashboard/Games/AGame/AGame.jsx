import React from "react";

import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

var animationTimer;

class AGame extends React.Component {
  animation0 = "animate__backInUp";
  animation1 = "animate__fadeInBottomLeft";
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      classnames: "animate__animated ",
      animation0: "",
      animation1: "",
      hidden: true,
    };

    this.clickGame = this.clickGame.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
    this.animateIntro();
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimer);
  }

  animateIntro() {
    this.animationTimer = setTimeout(() => {
      this.setState({
        animation0: this.animation0,
        animation1: this.animation1,
        hidden: false
      });
    }, this.props.delay);
  }

  clickGame = (event) => {
    // event.target.style.minHeight = "50px";
    this.setState({
      animation0: "animate__pulse",
    });

    setTimeout(() => {
      this.setState({
        animation0: "",
      });
    }, 1000);
  };

  mouseEnter = (event) => {};
  mouseLeave = (event) => {};

  render() {
    if (this.state.hidden === false) {
      return (
        <Col
          xs
          sm="12"
          md
          lg="6"
          xl
          xxl="6"
          className={this.state.classnames + "" + this.state.animation0}
        >
          <Card
            style={{
              width: "20rem",
              minHeight: "45vh",
              marginBottom: "2.0em",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "7px 5px",
            }}
          >
            <Card.Title
              style={{
                fontFamily: "Concert One",
                fontSize: "2.5em",
                border: "5px solid black",
                borderRadius: "20px",
                borderBottomRightRadius: "0",
              }}
            >
              {this.props.index + 1 + ". " + this.props.name}
            </Card.Title>
            <Card.Img
              variant="top"
              style={{
                width: "100%",
                margin: "auto",
                border: "2px solid black",
                borderRadius: "25px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
              src="https://www.gettysburgflag.com/media/wysiwyg/WARNING_1_.png"
            />
            <Card.Body
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                boxShadow: "2px 5px",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
              }}
            >
              <Card.Text
                style={{
                  minHeight: "7em",
                  fontFamily: "Concert One",
                  fontSize: "1.3em",
                }}
              >
                {this.props.text}
              </Card.Text>
              <Link
                to={"/games/" + this.props.name.toLowerCase().replace(" ", "")}
              >
                <Button variant="primary" style={{ fontSize: "1.5em" }}>
                  Play {this.props.name}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      );
    } else {
      return "";
    }
  }
}

export default AGame;
