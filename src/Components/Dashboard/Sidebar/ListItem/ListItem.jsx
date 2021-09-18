import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      lastEvent: null
    };

    this.clickTask = this.clickTask.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  clickTask = (event) => {

    // event.target.style.minHeight = "50px";
  }

  mouseEnter = (event) => {
    // event.target.style.width = "100%";
  }

  mouseLeave = (event) => {
    // event.target.style.marginLeft = "auto";
    // event.target.style.width = "50%";
  }

  render() {
    return (
      <li
        onClick={this.clickTask}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        className={"row listitem animate__animated animate__flipInY animate__delay-" + (this.props.pos % 1 + 1) + "s"}
      >
          <h3 className="listtitle">
            {this.props.pos + ". " + this.props.title}
          </h3>
          <p className="messagetext">{this.props.message}</p>
      </li>
    );
  }
}

export default ListItem;
