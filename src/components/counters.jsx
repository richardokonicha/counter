import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 7 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((count) => count.id !== id);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("REset button");
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            // value={counter.value}
            // selected={true}
            // id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            {/* <h6>Counter #{counter.id}</h6> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
