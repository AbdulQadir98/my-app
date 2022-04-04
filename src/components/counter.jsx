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
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state === 0 ? "warning" : "primary"; // appening strings to bootstrap classes
    return classes;
  }

  formatCount() {
    // instead of this.state.count in,
    // return this.state.count === 0 ? "Zero" : this.state.count;

    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
