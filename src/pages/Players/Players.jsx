import { useEffect } from "react";
import Button from "../../components/Button/Button";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import Player from "../../components/Player/Player";
import PlayerInput from "../../components/PlayerInput/PlayerInput";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import usePlayers from "../../hooks/usePlayers";

const Players = () => {
  const navigate = useNavigate();
  const { players, setPlayers } = usePlayers();

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
      { id: uuid(), name: value, sexuality: "Bisexual", gender: "Woman" },
    ]);
  };

  useEffect(() => {
    if (players.length > 0) {
      localStorage.setItem("players", JSON.stringify(players));
    }
  }, [players]);

  useEffect(() => {
    console.log("players", players)
  }, []);

  return (
    <section className="players">
      <div>
        <h1>Player List</h1>
        <ul>
          {players.map((player) => (
            <Player
              removePlayer={removePlayer}
              setPlayers={setPlayers}
              players={players}
              id={player.id}
              key={player.id}
              name={player.name}
              sexuality={player.sexuality}
              gender={player.gender}
            />
          ))}
        </ul>
      </div>
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
