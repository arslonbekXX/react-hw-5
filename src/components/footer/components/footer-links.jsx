import React, { Component } from "react";
import "./footer-links.scss";

export class FooterLinks extends Component {
  render() {
    return (
      <ul className="footer-links">
        <h1>{this.props.linkTitle}</h1>
        {this.props.links.map((link, idx) => {
          return (
            <>
              <li>
                <a key={idx} href="#">
                  {link}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    );
  }
}

export default FooterLinks;
