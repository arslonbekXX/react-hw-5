import React, { Component } from "react";
import customerImg from "../../images/customer-img.png";
import ceoImg from "../../images/ceo.png";
import colon from "../../images/semi.png";
import "./customer.scss";

class Customer extends Component {
  render() {
    return (
      <section className="customer">
        <div className="customer-left">
          <h1>What Our Customers Says</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </p>
          <div className="ceo-wrapper">
            <div className="ceo-title">
              <div className="ceo-title-left">
                <img src={ceoImg} alt="" />
                <div className="ceo-name">
                  <h2>Hasanul Islam</h2>
                  <p>Marketing CEO</p>
                </div>
              </div>
              <div className="ceo-title-right">
                <img src={colon} alt="" />
                <img src={colon} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
          </div>
        </div>
        <div className="customer-right">
          <img src={customerImg} alt="" />
        </div>
      </section>
    );
  }
}

export default Customer;
