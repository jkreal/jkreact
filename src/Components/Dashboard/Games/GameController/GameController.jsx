import React from "react";
import { Switch, Route } from "react-router-dom";

import Casino from "./Casino";
import Hangman from "./Hangman";
import RPG from "./RPG";
import TicTacToe from "./TicTacToe";
import Trivia from "./Trivia";
import Uno from "./Uno";

let gameCount = [1, 2, 3, 4, 5, 6];

const fullscreen = {
  height: "100%",
  position: "absolute",
  left: "0",
  right: "0",
  top: "0",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "white",
  border: "2px solid black",
};

const windowed = {
  width: "100%",
  height: "100%",
  border: "4px solid black",
};

class GameController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: this.props.playing,
      fullscreen: false
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({
        fullscreen: !fullscreen
    });
  }

  renderSwitch(param) {
    switch (param) {
      case "uno":
        return <Uno mobile={this.props.mobile} view={this.state.fullscreen === true ? this.fullscreen : this.windowed } toggleView={this.toggleView} />;
      case "trivia":
        return <Trivia mobile={this.props.mobile}  />;
      case "tictactoe":
        return <TicTacToe mobile={this.props.mobile} />;
      case "rpg":
        return <RPG mobile={this.props.mobile} />;
      case "hangman":
        return <Hangman mobile={this.props.mobile} />;
      case "casino":
        return <Casino mobile={this.props.mobile} />;
      default:
        return "" + this.props.playing + "not found";
        break;
    }
  }

  render() {
    return this.renderSwitch(this.props.playing);
  }
}

export default GameController;
