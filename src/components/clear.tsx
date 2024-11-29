import React, { useState } from "react";

type ClearButtonProps = {
  onClick?: (value: string) => void; // Optional function handler
  label: string; // Initial button text
};

const ClearButton: React.FC<ClearButtonProps> = ({ onClick, label }) => {
  const [hover, setHover] = useState(false); // State to track hover status

  const handleMouseEnter = () => setHover(true); // Change to "CLEAR" on hover
  const handleMouseLeave = () => setHover(false); // Revert to original label on leave

  const handleClick = () => {
    // Clear all relevant numbers from local storage
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7"].forEach((id) => {
      localStorage.removeItem(id);
    });

    // Call the onClick handler if provided
    if (onClick) {
      onClick(""); // Pass an empty string back to the parent
    }
  };

  return (
    <button
      className="subtitle"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? "CLEAR" : label}
    </button>
  );
};

export default ClearButton;
