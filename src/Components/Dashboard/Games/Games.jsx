import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const games = ["TicTacToe", "Trivia", "RPG Game", "Hangman", "Casino"];

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: ["TicTacToe", "Trivia", "RPG Game", "Hangman", "Casino"],
      gameText: ["This is an example. This is not intended for human consumption.", "This product can expose you to chemicals including lead, which is known to the state of California...", "to cause cancer. For more information, go to www.P65Warnings.ca.gov", "That's a lot to read,", "Good thing we can just type whatever, huh?"]
    };
  }

  render() {
    return (
      <Col
        xs
        sm="10"
        md
        lg="8"
        xl="8"
        xxl="10"
        style={{ backgroundColor: "lightcoral", overflowContent: "scroll", height: "80vh" }}
        className="content"
      >
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
          <Button variant="danger">
            thebest_thebest_thebest
          </Button>
        )}
        
        {this.state.games.map((name, index) => {
          return (
            <Row>
              <Card style={{ width: "18rem", height: "40vh", marginBottom: "1.5em" }}>
                <Card.Img variant="top" style={{width: "67%", margin: "auto"}} src="https://www.gettysburgflag.com/media/wysiwyg/WARNING_1_.png" />
                <Card.Body>
                  <Card.Title>{index + 1 + ". " + name}</Card.Title>
                  <Card.Text>
                    {this.state.gameText[index]}
                  </Card.Text>
                  <Button variant="primary">Go to hell</Button>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
      </Col>
    );
  }
}

export default Games;
