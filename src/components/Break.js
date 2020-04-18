import React, { Component } from "react";

class Break extends Component {
  render() {
    return (
      <div>
        <p id="break-label">Break Length</p>
        <button
          id="break-increment"
          onClick={this.props.handleInceaseDecrease}
          className="breakButtons"
        >
          Increase
        </button>
        <div id="break-length">{this.props.length}</div>
        <button
          id="break-decrement"
          onClick={this.props.handleInceaseDecrease}
          className="breakButtons"
        >
          Reduce
        </button>
      </div>
    );
  }
}
export default Break;
