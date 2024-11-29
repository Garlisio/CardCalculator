import React, { useState } from "react";
import "./ColorChange.css";
type Props = { setColor: React.Dispatch<React.SetStateAction<string>> };

function ColorChangingButton({ setColor }: Props) {
  // Array of texts to rotate through
  const texts = [" ♠", " ♥", " ♦", " ♣"];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle button click and rotate through texts
  const handleClick = () => {
    const newIndex = (currentIndex + 1) % texts.length;
    setCurrentIndex(newIndex);
    setColor(texts[newIndex]);
  };

  return (
    <button
      className="symbol"
      onClick={handleClick}
      style={{
        backgroundColor: "gray",
        color: "black",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {texts[currentIndex]}
    </button>
  );
}

export default ColorChangingButton;
