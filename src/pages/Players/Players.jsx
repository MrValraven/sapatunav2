import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import Player from "../../components/Player/Player";
import PlayerInput from "../../components/PlayerInput/PlayerInput";
import { v4 as uuid } from "uuid";
import "./styles.scss";

const Players = () => {
  const [players, setPlayers] = useState([]);

  const addNewPlayer = (value) => {
    if (value === "") return;

    const isPlayerAlreadyInPlayers = players.filter(
      (player) => player.name === value
    );

    if (isPlayerAlreadyInPlayers.length > 0) {
      return;
    }

    setPlayers((previousValue) => [
      ...previousValue,
      { id: uuid(), name: value, sexuality: "heterosexual", gender: "man" },
    ]);
  };

  return (
    <section className="players">
      <h1>Lista de Jogadores</h1>
      <ul>
        {players.map((player) => (
          <Player
            key={player.id}
            name={player.name}
            sexuality={player.sexuality}
            gender={player.gender}
          />
        ))}
      </ul>
      <div className="playerInputs">
        <PlayerInput addNewPlayer={addNewPlayer} />
        <div className="buttons">
          <Button buttonText="Start game" />
          <ButtonSecondary buttonText="Reset players" />
        </div>
      </div>
    </section>
  );
};

export default Players;
