import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 4 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.count}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
