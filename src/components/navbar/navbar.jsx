import React, { Component } from "react";
import Button from "../common/button/button";
import NavLinks from "../common/link/nav-links";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        <div className="navbar-logo">
          <h1>Plant</h1>
        </div>
        <NavLinks links={["Home", "Services", "About Us", "Blog", "Contact"]} />
        <div className="navbar-buttons">
          <i className="fas fa-bars fa-2x"></i>
          <a href="#">Login</a>
          <Button btnLabel="Sign Up" />
        </div>
      </section>
    );
  }
}

export default Navbar;
