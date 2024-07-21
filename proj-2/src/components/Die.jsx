import React from "react";
import { useEffect } from "react";
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
  const faceIcons = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];
  if (face < 1 || face > 6) {
    console.error(
      "Invalid face value for Die component. Must be between 1 and 6."
    );
    return null; // or handle error gracefully
  }
  return (
    <div>
      <FontAwesomeIcon
        icon={rolling ? faDiceTwo : faceIcons[face - 1]}
        className={`Die ${rolling && "Die-shaking"}`}
      />
    </div>
  );
};

export default Die;
