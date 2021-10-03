import React from "react";
import { Row, Col, Button } from "react-bootstrap";

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col>
        {this.props.sidebar === false ? (
          <button
            // This button appears if the sidebar is disabled
            className="btn btn-warning"
            onClick={this.props.toggleSidebar}
          >
            Sidebar
          </button>
        ) : (
          // Otherwise, this button appears
          ""
        )}
      </Col>
    );
  }
}

export default Apps;
