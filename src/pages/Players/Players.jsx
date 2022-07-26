import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import Player from "../../components/Player/Player";
import PlayerInput from "../../components/PlayerInput/PlayerInput";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Players = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  const startGame = () => {
    if (players.length <= 0) {
      return;
    }

    navigate("/gamemodes");
  };

  const resetPlayers = () => {
    setPlayers([]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

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
      { id: uuid(), name: value, sexuality: "Heterosexual", gender: "Homem" },
    ]);
  };

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <section className="players">
      <h1>Lista de Jogadores</h1>
      <ul>
        {players.map((player) => (
          <Player
            removePlayer={removePlayer}
            id={player.id}
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
          <Button buttonText="Start game" onClick={startGame} />
          <ButtonSecondary buttonText="Reset players" onClick={resetPlayers} />
        </div>
      </div>
    </section>
  );
};

export default Players;
