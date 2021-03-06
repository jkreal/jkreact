import React from "react";
import { Link, useLocation } from "react-router-dom";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      hover: false,
      classnames: "row listitem animate__animated ",
      animation: "animate__flipInY",
    };

    this.clickTask = this.clickTask.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {
    // When the component is unmounted, we need to clear timers to avoid errors
    clearTimeout(this.clickTask);
  }

  clickTask = (event) => {
    // event.target.style.minHeight = "50px";
    this.setState({
      animation: "animate__pulse",
    });

    setTimeout(() => {
      this.setState({
        animation: "",
      });

      if (this.props.mobile < 2) {
        this.props.toggleSidebar();
      }
    }, 1000);
  };

  mouseEnter = (event) => {
    // event.target.style.width = "100%";
    // event.target.style.border = "5px solid red"
    
    this.setState({
      hover: true,
    });
  };

  mouseLeave = (event) => {
    // event.target.style.marginLeft = "auto";
    // event.target.style.width = "50%";
    this.setState({
      hover: false,
    });
  };

  render() {
    
    return (
      <li
        onClick={this.clickTask}
        className={this.state.classnames + "" + this.state.animation}
        style={
          this.state.hover
            ? { marginLeft: "1em", width: "133%", boxShadow: "15px 8px" }
            : { boxShadow: "2px 4px" }
        }
      >
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={this.props.pos === 1 ? "/" : "/" + this.props.title.toLowerCase()}
        >
          <h3
            className="listtitle"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {this.props.pos + ". " + this.props.title}
          </h3>
          <p className="messagetext">{this.props.message}</p>
        </Link>
      </li>
    );
  }
}

export default ListItem;
