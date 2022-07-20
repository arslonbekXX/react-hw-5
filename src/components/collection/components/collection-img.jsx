import React, { Component } from "react";

class CollectionImg extends Component {
  render() {
    return (
      <>
        {this.props.collectionImages.map((image, idx) => (
          <img key={idx} src={image} alt="" />
        ))}
      </>
    );
  }
}

export default CollectionImg;
