import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import gitIcon from "./github-icon.png";
import linkedIcon from "./linkedin-icon.png";

const aMessage =
  "Why hello there. It's always nice to have visitors. While you're here, why not leave us a message?";
const aMessage2 =
  "...Oh right, we still need to develop that. Anyway, you can check out our social media pages while you wait!";
class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col
        style={{
          minHeight: "80vh",
          backgroundColor: "green",
        }}
      >
        <Row
          className="social-row"
          style={this.props.mobile > 1 ? { minHeight: "80vh" } : {}}
        >
          {this.props.sidebar === false ? (
            <button
              // This button appears if the sidebar is disabled
              className="btn btn-warning"
              onClick={this.props.toggleSideBar}
            >
              Sidebar
            </button>
          ) : (
            // Otherwise, this button appears
            ""
          )}
          <Col>
            <h1 className="content-title">Socials</h1>
          </Col>

          {this.props.mobile < 2 ? (
            <React.Fragment>
              <Row
                style={{
                  minHeight: "40vh",
                  border: "4px solid black",
                  margin: "auto",
                  borderBottomRightRadius: "40px",
                  boxShadow: "4px 0px",
                  background: "linear-gradient(white, #3c6fc2)",
                }}
              >
                <Col>
                  <p style={{ fontFamily: "Concert One", marginTop: "1.5em", fontSize: "22px" }}>
                    {aMessage}
                  </p>
                  <p style={{ fontFamily: "Concert One", marginTop: "5em", fontSize: "22px" }}>
                    {aMessage2}
                  </p>
                </Col>
              </Row>
              <Row style={{ margin: "auto" }}>
                <Col className="mobile-social-col">
                  <a target="_blank" href="https://github.com/jkrowden">
                    <img src={gitIcon} style={{ width: "100%" }} />
                  </a>
                </Col>
                <Col className="mobile-social-col">
                  <a target="_blank" href="https://www.linkedin.com/in/jkrowden/">
                    <img src={linkedIcon} style={{ width: "100%" }} />
                  </a>
                </Col>
              </Row>
            </React.Fragment>
          ) : (
            <Row
              style={{
                minHeight: "50vh",
                border: "4px dashed black",
                margin: "auto",
              }}
            >
              <Col style={{ border: "4px solid lightgreen" }}>Acol</Col>
              <Col>
                <Col className="" style={{ border: "4px solid lightgreen" }}>
                  Bcol1
                </Col>
                <Col style={{ border: "4px solid lightgreen" }}>Bcol2</Col>
              </Col>
            </Row>
          )}
        </Row>
      </Col>
    );
  }
}

export default Socials;
