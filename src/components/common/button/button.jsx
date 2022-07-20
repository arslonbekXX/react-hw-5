import React, { Component } from "react";
import './button.scss';

export class Button extends Component {
  render() {
    return <button>{this.props.btnLabel}</button>;
  }
}

export default Button;
