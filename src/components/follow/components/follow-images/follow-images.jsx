import React, { Component } from "react";
import followImg2 from "../../../../images/follow-img-1.png";
import followImg3 from "../../../../images/follow-img-2.png";
import followImg4 from "../../../../images/follow-img-3.png";
import followImg1 from "../../../../images/follow-img-4.png";
import followImg5 from "../../../../images/follow-img-5.png";
import "./follow-images.scss";

const followImages = [
  {
    followImg: followImg1,
  },
  {
    followImg: followImg2,
  },
  {
    followImg: followImg3,
  },
  {
    followImg: followImg4,
  },
  {
    followImg: followImg5,
  },
];

export class FollowImages extends Component {
  render() {
    return (
      <div className="follow-images">
        {followImages.map((img, idx) => (
          <img key={idx} src={img.followImg} alt="" />
        ))}
      </div>
    );
  }
}

export default FollowImages;
