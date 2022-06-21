import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardItem from "./CardItem";

function Card() {
  const [cardData, setCardData] = useState([]);
  const dataURL = "./db/cardData.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(dataURL);
      const json = await response.json();
      setCardData(json);
    })();
  });
  return (
    <div className="card-area">
      <h2>cardList</h2>
      <ul className="card-wrap">
        {cardData.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default Card;
