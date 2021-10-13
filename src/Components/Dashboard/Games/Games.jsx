import React from "react";

import AGame from "./AGame";
import GameController from "./GameController";
import { Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import {TicTacToe, Trivia, RPG, Hangman, Casino} from "./Games/index.js";

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: ["Uno", "TicTacToe", "Trivia", "RPG Game", "Hangman", "Casino"],
      gameText: [
        "This is an example. This is not intended for human consumption.",
        "This product can expose you to chemicals including lead, which is known to the state of California...",
        "to cause cancer. For more information, go to www.P65Warnings.ca.gov",
        "That's a lot to read,",
        "Good thing we can just type whatever, huh?",
        "Yeah that is pretty nice."
      ],
      gameState: 0,
    };
  }

  changeGameState(change) {
    if (typeof change === "number") {
      this.setState({
        gameState: change,
      });
    } else {
      console.log("you must pass a number in changeGameState");
    }
  }

  componentDidMount() {}

  render() {
    return (
      <Col
        xs
        sm="12"
        md
        lg="8"
        xl="8"
        xxl="8"
        style={{
          backgroundColor: "#3c6fc2",

          overflowContent: "scroll",
          minHeight: "75vh",
          maxHeight: "80vh",
        }}
        className="content"
      >
        <Router>
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
            <Button variant="danger">thebest_thebest_thebest</Button>
          )}

          <Switch>
            {this.state.games.map((name, index) => {
              return (
                <Route
                  key={index + name}
                  path={"/games/" + name.toLowerCase().replace(" ", "")}
                >
                  <GameController
                    playing={name.toLowerCase().replace(" ", "")}
                    mobile={this.props.mobile}
                  />
                </Route>
              );
            })}
              <Row>
                {this.state.games.map((name, index) => {
                  return (
                    <AGame
                      key={name + index}
                      index={index}
                      name={name}
                      text={this.state.gameText[index]}
                      delay={index * 250}
                    />
                  );
                })}
              </Row>
          </Switch>
        </Router>
      </Col>
    );
  }
}

export default Games;
