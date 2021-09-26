import React from "react";

import Casino from "./Casino";
import Hangman from "./Hangman";
import RPG from "./RPG";
import TicTacToe from "./TicTacToe";
import Trivia from "./Trivia";

class GameController extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playing: this.props.playing
        }
    }

    render() {
        return this.state.playing;
    }
}

export default GameController