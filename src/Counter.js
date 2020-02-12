import React, { Component } from "react";
import style from "./counter.module.css";
class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      counter: this.props.min
    };
  }
  increment = () => {
    let i =
      this.props.max === this.state.counter
        ? this.state.counter
        : this.state.counter + 1;
    this.setState({
      counter: i
    });
  };

  decrement = () => {
    let i =
      this.props.min === this.state.counter
        ? this.state.counter
        : this.state.counter - 1;
    this.setState({
      counter: i
    });
  };
  render() {
    return (
      <div className={style.app}>
        <button onClick={this.decrement}> -</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}> +</button>
      </div>
    );
  }
}
export default Counter;
