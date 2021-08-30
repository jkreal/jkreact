import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };

    this.clickTask = this.clickTask.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  clickTask = (event) => {

  }

  mouseEnter = (event) => {
    // event.target.style. = "30em";
  }

  mouseLeave = (event) => {
    // event.target.style.marginLeft = "3em";
  }

  render() {
    return (
      <div
        onClick={this.clickTask}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        className={"row listitem animate__animated animate__flipInY animate__delay-" + this.props.pos + "s"}
      >
        <div className="col-md-12">
          <h3 className="listtitle">
            {this.props.pos + ". " + this.props.title}
          </h3>
          <p className="messagetext">{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default ListItem;
