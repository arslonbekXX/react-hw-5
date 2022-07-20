import React, { Component } from "react";
import "./customer.scss";

const customers = [
  {
    heading: "2000+",
    paragraph: "Delivery",
  },
  {
    heading: "1200+",
    paragraph: "Customers",
  },
  {
    heading: "1000+",
    paragraph: "Product",
  },
];

export class Customer extends Component {
  render() {
    return (
      <div className="customers">
        {customers.map((customer, idx) => (
          <div key={idx} className="customer">
            <h1>{customer.heading}</h1>
            <p>{customer.paragraph}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Customer;
