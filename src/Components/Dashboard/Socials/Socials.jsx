import React from "react";

import { Row, Col, Button } from "react-bootstrap";

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
          margin: "auto",
        }}
      >
        <Row
          style={{
            borderTop: "4px solid black",
            borderBottom: "6px solid black",
            backgroundColor: "#3c6fc2",
            minHeight: "40vh",
          }}
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

          <Row
            style={{
              minHeight: "20vh",
              margin: "auto",
              alignContent: "center",
              marginBottom: "0",
              bottom: "0"
            }}
          >
            <Col
              xs
              sm={12}
              md
              lg={2}
              xl={2}
              xxl={3}
              style={{ border: "3px solid black" }}
            >
              Blank
            </Col>
            <Col style={{ border: "3px solid black" }}>One Social</Col>
            <Col style={{ border: "3px solid black" }}>Two Social</Col>
            <Col style={{ border: "3px solid black" }}>Three socials</Col>
            <Col
              xs
              sm={12}
              md
              lg={2}
              xl={2}
              xxl={3}
              style={{ border: "3px solid black" }}
            >
              Blank
            </Col>
          </Row>
        </Row>
      </Col>
    );
  }
}

export default Socials;
