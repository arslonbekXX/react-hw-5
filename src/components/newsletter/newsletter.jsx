import React, { Component } from "react";
import Button from "../common/button/button";
import newsLetterImg from "../../images/newsletter-img.png";
import "./newsletter.scss";

export class Newsletter extends Component {
  render() {
    return (
      <section className="newsletter">
        <div className="newsletter-left">
          <h1>Subscribe Our Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
            tempor, accumsan sit amet nunc cursus.
          </p>
          <form>
            <input type="text" placeholder="Enter mail..." />
            <Button btnLabel="Subscribe" />
          </form>
        </div>
        <div className="newsletter-right">
          <img src={newsLetterImg} alt="" />
        </div>
      </section>
    );
  }
}

export default Newsletter;
