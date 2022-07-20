import React, { Component } from "react";
import Button from "../common/button/button";
import NavLinks from "../common/link/nav-links";
import Card from "./components/card/card";

import "./product.scss";

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-title">
          <h1>Our Best Product</h1>
          <NavLinks links={["New Plants", "New Arrivals", "Sale"]} />
        </div>
        <Card />
        <Button btnLabel="View All" />
      </div>
    );
  }
}

export default Product;
