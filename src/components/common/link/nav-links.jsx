import React, { Component } from "react";
import "./nav-links.scss";

class NavLinks extends Component {
  render() {
    return (
      <ul className="nav-links">
        {this.props.links.map((link, idx) => (
          <li>
            <a key={idx} href="#">{link}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavLinks;
