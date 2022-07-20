import React, { Component } from "react";
import './star.scss';

 class Star extends Component {
  render() {
    return (
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    );
  }
}

export default Star;
