import React from "react";
import "./styles.scss";

const Button = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick} className="pushable">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{buttonText}</span>
    </button>
  );
};

export default Button;
