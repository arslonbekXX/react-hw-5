import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Collection from "./components/collection/collection";
import About from "./components/about/about";
import Product from "./components/product/product";
import Customer from "./components/customer/customer";
import Newsletter from "./components/newsletter/newsletter";
import Follow from "./components/follow/follow";
import Footer from "./components/footer/footer";
import "./base.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Collection />
        <About />
        <Product />
        <Customer />
        <Newsletter />
        <Follow />
        <Footer />
      </div>
    );
  }
}

export default App;
