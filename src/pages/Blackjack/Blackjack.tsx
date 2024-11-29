import "./Blackjack.css";
import { Link } from "react-router-dom";
import Card from "../../components/cards";
import ClearButton from "../../components/clear";
import { useEffect, useState } from "react";

function Blackjack() {
  const [cardNumbers, setCardNumbers] = useState<{ [key: string]: string }>({});

  // Opciones para el título
  const titleOptions = ["|HIT", "|STAND"];

  // Estado inicial del título sincronizado con el localStorage
  const [titleText, setTitleText] = useState<string>("|HIT");

  // Load saved card numbers from local storage on component mount
  useEffect(() => {
    // Carga el título del localStorage
    const storedTitle = localStorage.getItem("titleText") || "|HIT";
    setTitleText(storedTitle);

    const storedNumbers: { [key: string]: string } = {};
    ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"].forEach((id) => {
      const number = localStorage.getItem(id) || ""; // Retrieve or default to empty
      storedNumbers[id] = number;
    });
    setCardNumbers(storedNumbers);
  }, []);

  useEffect(() => {
    updateTitleBasedOnCards();
  }, [cardNumbers]);

  const handleClear = () => {
    // Clear relevant keys in local storage and update state
    ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"].forEach((id) => {
      localStorage.removeItem(id);
    });
    setTitleText("|HIT");
    setCardNumbers({});
    localStorage.setItem("titleText", "|HIT");
  };

  const handleCardClick = (id: string, navigate: boolean = false) => {
    localStorage.setItem("selectedCardId", id); // Save the clicked card ID

    // Genera un nuevo título y lo guarda
    const newTitle =
      titleOptions[Math.floor(Math.random() * titleOptions.length)];
    setTitleText(newTitle);
    localStorage.setItem("titleText", newTitle);

    if (navigate) {
      // Si navega a otra página, asegúrate de que los datos están sincronizados
      localStorage.setItem("selectedCardId", id);
    }
  };

  const calculateCardSum = (): number => {
    let total = 0;
    let aceCount = 0;

    Object.keys(cardNumbers).forEach((key) => {
      if (key === "B0") return; // Exclude "B0" from the sum

      const card = cardNumbers[key];
      if (card === "A") {
        aceCount++;
        total += 11; // Assume Ace is 11 initially
      } else if (["J", "Q", "K"].includes(card)) {
        total += 10;
      } else if (!isNaN(Number(card))) {
        total += Number(card);
      }
    });

    // Adjust for Aces if total exceeds 21
    while (total > 21 && aceCount > 0) {
      total -= 10; // Count Ace as 1 instead of 11
      aceCount--;
    }
    console.log(total);
    return total;
  };

  const isB0EqualToTen = (): boolean => {
    const b0Card = cardNumbers["B0"];
    return (
      b0Card === "10" || b0Card === "J" || b0Card === "Q" || b0Card === "K"
    );
  };

  const updateTitleBasedOnCards = () => {
    const sum = calculateCardSum();
    const b0IsTen = isB0EqualToTen();

    if (b0IsTen && sum < 13) {
      setTitleText("|HIT");
      localStorage.setItem("titleText", "|HIT");
      return;
    }

    if (sum >= 18) {
      setTitleText("|STAND");
      localStorage.setItem("titleText", "|STAND");
    } else if (sum <= 10) {
      setTitleText("|HIT");
      localStorage.setItem("titleText", "|HIT");
    } else {
      const newTitle =
        titleOptions[Math.floor(Math.random() * titleOptions.length)];
      setTitleText(newTitle);
      localStorage.setItem("titleText", newTitle);
    }
  };

  return (
    <>
      <div className="containter-blackjack">
        <div className="title-div">
          <Link to="/main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              className="me-4"
            >
              <path
                fill="#000000"
                d="M20 10v4h-9l3.5 3.5l-2.42 2.42L4.16 12l7.92-7.92L14.5 6.5L11 10z"
              />
            </svg>
          </Link>
          <h1 className="title-h1-blackjack">{titleText}</h1>
        </div>
      </div>
      <div className="containter-blackjack-title">
        <ClearButton label="CRUPIER" onClick={handleClear} />
      </div>
      <div className="container-blackjack mt-4">
        <Card
          number={cardNumbers["B0"] || ""}
          color=""
          game="/Cards"
          card="rectangle"
          id="B0"
          onClick={() => handleCardClick("B0")}
        />
      </div>
      <div className="containter-blackjack-title">
        <ClearButton label="YOU" onClick={handleClear} />
      </div>
      <div className="container-blackjack mt-4">
        <div className="row mb-3">
          <Card
            number={cardNumbers["B1"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B1"
            onClick={() => handleCardClick("B1")}
          />
          <Card
            number={cardNumbers["B2"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B2"
            onClick={() => handleCardClick("B2")}
          />
          <Card
            number={cardNumbers["B3"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B3"
            onClick={() => handleCardClick("B3")}
          />
          <Card
            number={cardNumbers["B4"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B4"
            onClick={() => handleCardClick("B4")}
          />
        </div>
        <div className="row">
          <Card
            number={cardNumbers["B5"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B5"
            onClick={() => handleCardClick("B5")}
          />
          <Card
            number={cardNumbers["B6"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B6"
            onClick={() => handleCardClick("B6")}
          />
          <Card
            number={cardNumbers["B7"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B7"
            onClick={() => handleCardClick("B7")}
          />
          <Card
            number={cardNumbers["B8"] || ""}
            color=""
            game="/Cards"
            card="rectangle"
            id="B8"
            onClick={() => handleCardClick("B8")}
          />
        </div>
      </div>
    </>
  );
}

export default Blackjack;
