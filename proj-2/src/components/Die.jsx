import React from "react";
import { useState, useEffect } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const Die = ({ face, rolling }) => {
  const [currentface, setcurrentface] = useState(face);
  useEffect(() => {
    if (rolling) {
      return;
    }
    const newface = Math.floor(Math.random() * 6) + 1;
    setcurrentface(newface);
  }, [rolling]);
  const faceIcons = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];
  if (currentface < 1 || currentface > 6) {
    console.error(
      "Invalid face value for Die component. Must be between 1 and 6."
    );
    return null; // or handle error gracefully
  }
  return (
    <div>
      <FontAwesomeIcon
        icon={rolling ? faceIcons[currentface - 1] : faceIcons[currentface - 1]}
        className={`Die ${rolling && "Die-shaking"}`}
      />
    </div>
  );
};

export default Die;
