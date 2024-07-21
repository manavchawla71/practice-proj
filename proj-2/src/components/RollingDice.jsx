import React, { useState } from "react";
import "./RollingDice.css";
import Die from "./Die";

const RollingDice = () => {
  const [die1, setDie1] = useState(1); // Initial die face value
  const [die2, setDie2] = useState(1); // Initial die face value
  const [rolling, setRolling] = useState(false);

  const handleButtonClick = () => {
    if (!rolling) {
      const newDie1 = Math.floor(Math.random() * 6) + 1;
      const newDie2 = Math.floor(Math.random() * 6) + 1;

      // Update state to start rolling animation
      setDie1(newDie1);
      setDie2(newDie2);
      setRolling(true);

      setTimeout(() => {
        setRolling(false);
      }, 1000);
    }
  };

  const handleBtnClass = () => {
    return rolling ? "RollDice-Rolling" : "";
  };

  return (
    <div>
      <Die face={die1} rolling={rolling} />
      <Die face={die2} rolling={rolling} />
      <button
        className={handleBtnClass()}
        disabled={rolling}
        onClick={handleButtonClick}
      >
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
};

export default RollingDice;
