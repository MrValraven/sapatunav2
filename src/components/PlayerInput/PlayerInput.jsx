import React, { useState } from "react";
import "./styles.scss";

const PlayerInput = ({ addNewPlayer }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="playerInputContainer">
      <label htmlFor="jogador">Adicionar um jogador</label>
      <div className="playerInput">
        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addNewPlayer(e.target.value);
              setInputValue("");
            }
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div
          className="addKey"
          onClick={() => {
            addNewPlayer(inputValue);
            setInputValue("");
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default PlayerInput;
