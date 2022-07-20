import React, { Component } from "react";
import Button from "../common/button/button";
import Customer from "./components/customer";
import bannerImg from "../../images/banner.png";
import "./banner.scss";

export class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="banner-left">
          <h1>Growing Beautiful Plants at Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </p>
          <Button btnLabel="Learn More" />
          <Customer />
        </div>
        <div className="banner-right">
          <img src={bannerImg} alt="" />
          <div className="banner-buttons">
            <Button btnLabel="Cactus stem" />
            <Button btnLabel="Cactus Thorn" />
            <Button btnLabel="Plant Media" />
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
