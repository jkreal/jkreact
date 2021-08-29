import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="row listitem">
        <div className="col-md-12 listtitle"><h2>{this.props.message}</h2></div>
      </div>
    );
  }
  
};

export default ListItem;
