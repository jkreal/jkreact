import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }

    this.clickTask = this.clickTask.bind(this);
  }

  clickTask = (e) => {
    console.log(e)
  }
  
  render() {
    return (
      <div onClick={this.clickTask} className="row listitem animate__animated animate__flipInY animate__delay-1s">
        <div className="col-md-12"><h2 className="listtitle">{this.props.pos + ". " + this.props.title}</h2></div>
      </div>
    );
  }
  
};

export default ListItem;
