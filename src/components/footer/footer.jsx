import React, { Component } from "react";
import FooterLinks from "./components/footer-links";
import "./footer.scss";

export class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="social-medias">
          <h1>Plant</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh
            posuere duis eu non sit integer at placerat amet.
          </p>
          <div className="social-icons">
            <a href="#" className="fa-brands fa-facebook"></a>
            <a href="#" className="fa-brands fa-twitter"></a>
            <a href="#" className="fa-brands fa-instagram"></a>
          </div>
        </div>
        <FooterLinks
          linkTitle="Navigation"
          links={["Home", "About", "Help & Support", "Product"]}
        />
        <FooterLinks
          linkTitle="About Us"
          links={["Contact", "Address", "Blog", "About Us"]}
        />
        <FooterLinks
          linkTitle="Help"
          links={["Coustomers Services", "FAQs", "We Are Hiring", "Returns"]}
        />
      </section>
    );
  }
}

export default Footer;
