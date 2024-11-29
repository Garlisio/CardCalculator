import "./Cards.css";
import { Link } from "react-router-dom";
import Card from "../../components/cards";
function Cards() {
  const handleCardClick = (number: string) => {
    const selectedCardId = localStorage.getItem("selectedCardId");
    if (selectedCardId) {
      localStorage.setItem(selectedCardId, number); // Save the selected number for the card
    }
  };

  return (
    <>
      <div className="cardstitle">
        <div className="row-buttons">
          <div className="col-buttons">
            <Link to="/Blackjack">
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
          <div className="col-buttons"></div>
          <div className="col-buttons"></div>
        </div>
      </div>
      <div className="container-cards">
        <div className="row">
          <Card
            number="A"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("A")}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="K"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("K")}
          />
          <Card
            number="Q"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("Q")}
          />
          <Card
            number="J"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("J")}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="10"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("10")}
          />
          <Card
            number="9"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("9")}
          />
          <Card
            number="8"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("8")}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="7"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("7")}
          />
          <Card
            number="6"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("6")}
          />
          <Card
            number="5"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("5")}
          />
        </div>
      </div>
      <div className="container-cards">
        <div className="row mb-3">
          <Card
            number="4"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("4")}
          />
          <Card
            number="3"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("3")}
          />
          <Card
            number="2"
            color=""
            game="/Blackjack"
            card="rectangle-cards"
            onClick={() => handleCardClick("2")}
          />
        </div>
      </div>
    </>
  );
}

export default Cards;
