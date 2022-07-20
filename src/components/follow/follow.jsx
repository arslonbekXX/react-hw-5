import React, { Component } from "react";
import FollowImages from "./components/follow-images/follow-images";
import "./follow.scss";

export class Follow extends Component {
  render() {
    return (
      <section className="follow">
        <div className="follow-title">
          <h1>Follow Us on Instagram</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accu msan sit amet nunc cursus. Nec tristique at in erat lectus
          </p>
        </div>
        <FollowImages />
      </section>
    );
  }
}

export default Follow;
