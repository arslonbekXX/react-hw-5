import React, { Component } from "react";
import Button from "../common/button/button";
import aboutImg from "../../images/about.png";
import "./about.scss";

export class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="about-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-right">
          <p>About Us</p>
          <div className="about-title">
            <h1>Continue to Develop to Became Global Company</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus.{" "}
            </span>
            <Button btnLabel="Read More" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
