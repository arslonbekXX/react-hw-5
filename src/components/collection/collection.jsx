import React, { Component } from "react";
import CollectionImg from "./components/collection-img";
import collectionImg1 from "../../images/collection-1.png";
import collectionImg2 from "../../images/collection-2.png";
import collectionImg3 from "../../images/collection-3.png";
import "./collection.scss";

export class Collection extends Component {
  render() {
    return (
      <section className="collection">
        <div className="collection-left">
          <h1>We have lots of plants collection for you and your family</h1>
          <a href="#">
            See all collection <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="collection-right">
          <CollectionImg
            collectionImages={[collectionImg1, collectionImg2, collectionImg3]}
          />
        </div>
      </section>
    );
  }
}

export default Collection;
