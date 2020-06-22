import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

// function App() {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 7 },
//       { id: 3, value: 2 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (id) => {
//     const counters = this.state.counters.filter((count) => count.id !== id);
//     this.setState({ counters: counters });
//   };

//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     console.log("REset button");
//     const counters = this.state.counters.map((counter) => {
//       counter.value = 0;
//       return counter;
//     });
//     this.setState({ counters: counters });
//   };

//   return (
//     <React.Fragment>
//       <Navbar />
//       <main className="container">
//         <Counters
//           counter={this.counters}
//           onDelete={this.handleDelete}
//           onIncrement={this.handleIncrement}
//           onReset={this.handleReset}
//         />
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;

class App extends Component {
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
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
