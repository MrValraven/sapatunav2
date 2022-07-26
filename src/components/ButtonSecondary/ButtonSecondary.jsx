import React from "react";
import "./styles.scss";

const ButtonSecondary = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick} className="pushable2">
      <span className="shadow2"></span>
      <span className="edge2"></span>
      <span className="front2">{buttonText}</span>
    </button>
  );
};

export default ButtonSecondary;
