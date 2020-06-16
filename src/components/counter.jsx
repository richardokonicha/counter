import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: "22 Jump str",
    },
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 90,
    color: "red",
  };

  render() {
    let classes = this.getBadgeClass();

    return (
      <div>
        <img src={this.imageUrl} alt="" />
        <span className={classes}>{this.formatValue()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && "Please add tags"}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
  }
}

export default Counter;

// 1hour in
