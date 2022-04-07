import React, { Component } from "react";

class Counter extends Component {
  // properties are defined in state object
  state = {
    count: this.props.value,
    tags: ["list1", "list2", "list3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // render method
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderList()} */}
      </React.Fragment>
    );
  }

  // to render a list use map method
  renderList() {
    if (this.state.tags.length === 0) return <p>No list!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "btn btn-sm m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary"; // appending strings to bootstrap classes
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
