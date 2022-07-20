import React, { Component } from "react";
import Star from "../star/star";
import cardImg1 from "../../../../images/card-1.png";
import cardImg2 from "../../../../images/card-2.png";
import cardImg3 from "../../../../images/card-3.png";
import cardImg4 from "../../../../images/card-4.png";
import "./card.scss";

const cards = [
  {
    cardImg: cardImg1,
    cardBack: "#EAF2E5",
    cardTitle: "Outdoor Plant",
  },
  {
    cardImg: cardImg2,
    cardBack: "#F0EBE6",
    cardTitle: "Monsters Plant",
  },
  {
    cardImg: cardImg3,
    cardBack: "#E2ECE4",
    cardTitle: "Pottle Plant",
  },
  {
    cardImg: cardImg4,
    cardBack: "#E7EEED",
    cardTitle: "Indoor Plant",
  },
];

export class Card extends Component {
  render() {
    return (
      <section className="cards">
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: card.cardBack }}
            className="card"
          >
            <img src={card.cardImg} alt="" />
            <div className="card-title">
              <h1>{card.cardTitle}</h1>
              <Star />
              <p>$50.00</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Card;
