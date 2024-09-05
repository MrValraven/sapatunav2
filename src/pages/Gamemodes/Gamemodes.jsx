import React from "react";
import "./styles.scss";

import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";

import SoftImage from "../../assets/soft.png";
import HotImage from "../../assets/hot.png";
import HardImage from "../../assets/hard.png";
import Gamemode from "../../components/Gamemode/Gamemode";
import Button from "../../components/Button/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gamemodes = () => {
  const [currentGamemodeIndex, setCurrentGamemodeIndex] = useState(0);
  const navigate = useNavigate();

  const startGame = () => {
    navigate(`/${gamemodes[currentGamemodeIndex].tag}/questions`);
  };


  const changeGamemode = (action) => {
    if (action === "increment") {
      if (currentGamemodeIndex >= gamemodes.length - 1) return;

      setCurrentGamemodeIndex((previousValue) => previousValue + 1);
    } else {
      if (currentGamemodeIndex <= 0) return;

      setCurrentGamemodeIndex((previousValue) => previousValue - 1);
    }
  };

  const gamemodes = [
    {
      id: 0,
      name: "Flirty Queerness",
      image: SoftImage,
      description:
        "Amusing truth or dare with a flirty twist for friendship fun.",
      tag: "flirty",
    },
    {
      id: 1,
      name: "Spicy Gathering",
      image: HotImage,
      description:
        "A series of challenges for those who are looking to spice things up.",
      tag: "spicy",
    },
    {
      id: 2,
      name: "Hot Conundrum",
      image: HardImage,
      description:
        "It's getting HOT in here, time to leave all inhibitions at the door.",
      tag: "hot",
    },
  ];
  return (
    <section className="gamemodes">
      <div className="title">
        <button disabled={gamemodes[currentGamemodeIndex].id === 0}>
          <img
            src={ChevronLeft}
            alt="arrow left"
            onClick={() => changeGamemode("decrement")}
          />
        </button>
        <h2>{gamemodes[currentGamemodeIndex].name}</h2>
        <button disabled={gamemodes[currentGamemodeIndex].id === 3}>
          <img
            src={ChevronRight}
            alt="arrow right"
            onClick={() => changeGamemode("increment")}
          />
        </button>
      </div>
      <Gamemode
        changeGamemode={changeGamemode}
        key={gamemodes[currentGamemodeIndex].name}
        image={gamemodes[currentGamemodeIndex].image}
        description={gamemodes[currentGamemodeIndex].description}
      />
      <Button
        buttonText={`Play ${gamemodes[currentGamemodeIndex].name} mode`}
        onClick={startGame}
      />
    </section>
  );
};

export default Gamemodes;
