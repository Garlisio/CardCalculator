import "./CardsColor.css";
import ColorChangingButton from "./ColorChange.js";
import { Link } from "react-router-dom";
import Card from "../../components/cards";
import { useState } from "react";

function CardsColor() {
  const [color, setColor] = useState<string>(" ♠");

  const handleCardClick = (number: string, color: string): void => {
    const selectedCardId = localStorage.getItem("selectedCardId");
    if (selectedCardId) {
      // Format the string as "{number} {color}"
      const cardData = `${number} ${color}`;
      localStorage.setItem(selectedCardId, cardData); // Save the formatted string
    }
  };

  return (
    <>
      <div className="cardstitle">
        <div className="row-buttons">
          <div className="col-buttons">
            <Link to="/Poker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                margin-bottom="4rem"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
                className="me-2 "
              >
                <path
                  fill="#000000"
                  d="M20 10v4h-9l3.5 3.5l-2.42 2.42L4.16 12l7.92-7.92L14.5 6.5L11 10z"
                />
              </svg>
            </Link>
          </div>
          <div className="col-buttons">
            <ColorChangingButton setColor={setColor} />
          </div>
          <div className="col-buttons"></div>
        </div>
      </div>
      <div className="container-cards">
        <div className="row">
          <Card
            number="A"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("A", color)}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="K"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("K", color)}
          />
          <Card
            number="Q"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("Q", color)}
          />
          <Card
            number="J"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("J", color)}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="10"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("10", color)}
          />
          <Card
            number="9"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("9", color)}
          />
          <Card
            number="8"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("8", color)}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="7"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("7", color)}
          />
          <Card
            number="6"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("6", color)}
          />
          <Card
            number="5"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("5", color)}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="4"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("4", color)}
          />
          <Card
            number="3"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("3", color)}
          />
          <Card
            number="2"
            color={color}
            game="/Poker"
            card="rectangle-cards"
            onClick={() => handleCardClick("2", color)}
          />
        </div>
      </div>
    </>
  );
}

export default CardsColor;
