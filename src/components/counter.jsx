import React, { Component } from "react";

class Counter extends Component {
  // properties are defined in state object
  state = {
    count: 0,
  };

  // render method
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    // instead of this.state.count in,
    // return this.state.count === 0 ? "Zero" : this.state.count;

    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
