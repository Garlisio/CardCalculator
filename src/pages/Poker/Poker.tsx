import "./Poker.css";
import { Link } from "react-router-dom";
import Card from "../../components/cards";
import { useEffect, useState } from "react";
import ClearButton from "../../components/clear";

function Poker() {
  const [cardNumbers, setCardNumbers] = useState<{ [key: string]: string }>({});
  const [cardColors] = useState<{ [key: string]: string }>({});

  // Opciones para el título
  const titleOptions = ["|CALL", "|RAISE", "|FOLD"];

  // Estado inicial del título sincronizado con el localStorage
  const [titleText, setTitleText] = useState<string>("| - - -");

  // Cargar datos iniciales (título y cartas) desde el localStorage
  useEffect(() => {
    // Carga el título del localStorage
    const storedTitle = localStorage.getItem("titleText") || "| - - -";
    setTitleText(storedTitle);

    // Carga los números de las cartas
    const storedNumbers: { [key: string]: string } = {};
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7"].forEach((id) => {
      const number = localStorage.getItem(id) || "";
      storedNumbers[id] = number;
    });
    setCardNumbers(storedNumbers);
  }, []);

  const handleCardClick = (id: string, navigate: boolean = false) => {
    // Guarda la carta seleccionada en el localStorage
    localStorage.setItem("selectedCardId", id);

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

  const handleClear = () => {
    // Restablece el título y limpia las cartas
    setTitleText("| - - -");
    setCardNumbers({});
    localStorage.setItem("titleText", "| - - -");
  };

  return (
    <>
      <div className="containter-poker">
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
      <div className="containter-poker-title">
        <ClearButton label="TABLE" onClick={handleClear} />
      </div>
      <div className="container-poker mt-4">
        <div className="row mb-3">
          <Card
            number={cardNumbers["P3"] || ""}
            color={cardColors["P3"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P3"
            onClick={() => handleCardClick("P3")}
          />
          <Card
            number={cardNumbers["P4"] || ""}
            color={cardColors["P4"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P4"
            onClick={() => handleCardClick("P4")}
          />
          <Card
            number={cardNumbers["P5"] || ""}
            color={cardColors["P5"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P5"
            onClick={() => handleCardClick("P5")}
          />
        </div>
        <div className="row">
          <Card
            number={cardNumbers["P6"] || ""}
            color={cardColors["P6"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P6"
            onClick={() => handleCardClick("P6")}
          />
          <Card
            number={cardNumbers["P7"] || ""}
            color={cardColors["P7"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P7"
            onClick={() => handleCardClick("P7")}
          />
        </div>
      </div>
      <div className="containter-poker-title">
        <ClearButton label="YOU" onClick={handleClear} />
      </div>
      <div className="container-poker">
        <div className="row">
          <Card
            number={cardNumbers["P1"] || ""}
            color={cardColors["P1"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P1"
            onClick={() => handleCardClick("P1", true)}
          />
          <Card
            number={cardNumbers["P2"] || ""}
            color={cardColors["P2"] || ""}
            game="/CardsColor"
            card="rectangle"
            id="P2"
            onClick={() => handleCardClick("P2", true)}
          />
        </div>
      </div>
    </>
  );
}

export default Poker;
