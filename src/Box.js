import React, { Component } from "react";
import { choice } from "./Helpers";
import "./Box.css";

class Box extends Component {
  static defaultProps = {
    colors: [
      "aqua",
      "red",
      "blue",
      "aquamarine",
      "yellow",
      "black",
      "green",
      "purple",
      "violet",
      "pink",
      "orange",
      "orchid",
      "palevioletred",
      "coral",
      "cyan",
      "chartreuse",
      "darkorange",
      "deepskyblue",
      "fuchsia",
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let newColor = choice(this.props.colors);
    while (newColor === this.state.color) {
      newColor = choice(this.props.colors);
    }
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
