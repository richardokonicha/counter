import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   address: {
  //     street: "22 Jump str",
  //   },
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  styles = {
    fontSize: 90,
    color: "red",
  };

  // constructor() {
  //   super();
  //   console.log(this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  render() {
    let classes = this.getBadgeClass();
    const { onIncrement, onDelete, counter } = this.props;
    // console.log("props", this.props.children);
    return (
      <div>
        {/* {this.props.children} */}
        {/* <h6>{this.props.id}</h6> */}
        <img src={this.imageUrl} alt="" />
        <span className={classes}>{this.formatValue()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please add tags"} */}
        {/* {this.renderTags()} */}
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

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
  }
}

export default Counter;
