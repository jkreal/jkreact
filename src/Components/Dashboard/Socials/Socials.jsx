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
          // No minimum height for mobile
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

          {/* The rest of Socials is rendered depending on user's viewport */}

          {this.props.mobile < 2 ? (
            // This bit is what is rendered when the display is a mobile phone
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
                  <p
                    style={{
                      marginTop: "1.5em",
                      fontSize: "22px",
                    }}
                  >
                    {aMessage}
                  </p>
                  <p
                    style={{
                      marginTop: "5em",
                      fontSize: "22px",
                    }}
                  >
                    {aMessage2}
                  </p>
                </Col>
              </Row>
              <Row style={{ margin: "auto" }}>
                <Col className="mobile-social-col">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/jkreal"
                  >
                    <img
                      alt="notgithub"
                      src={gitIcon}
                      style={{ width: "100%" }}
                    />
                  </a>
                </Col>
                <Col className="mobile-social-col">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/jkreal/"
                  >
                    <img
                      alt="linkedinornot"
                      src={linkedIcon}
                      style={{ width: "100%" }}
                    />
                  </a>
                </Col>
              </Row>
            </React.Fragment>
          ) : (
            // This bit is what is rendered for every other viewport
            <Row
              style={{
                minHeight: "50vh",
                margin: "auto",
              }}
            >
              <Col
                className="desktop-comment-col"
                style={{ background: "linear-gradient(whitesmoke, #63a8e6)" }}
              >
                <p
                  style={{
                    marginTop: "5em",
                    fontSize: "24px",
                  }}
                >
                  {aMessage}
                </p>
                <p
                  style={{
                    marginTop: "5em",
                    fontSize: "24px",
                  }}
                >
                  {aMessage2}
                </p>
              </Col>
              <Col style={{ margin: "auto" }}>
                <Col
                  className="desktop-social-col"
                  style={{
                    backgroundImage: `url(${gitIcon})`,
                    backgroundPosition: "center",
                    backgroundSize: "18vh",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/jkreal"
                  >
                    <div style={{ height: "20vh" }}></div>
                  </a>
                </Col>
                <Col
                  className="desktop-social-col"
                  style={{
                    backgroundImage: `url(${linkedIcon})`,
                    backgroundPosition: "center",
                    backgroundSize: "18vh",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/jkreal/"
                  >
                    <div style={{ height: "20vh" }}></div>
                  </a>
                </Col>
              </Col>
            </Row>
          )}
        </Row>
      </Col>
    );
  }
}

export default Socials;
