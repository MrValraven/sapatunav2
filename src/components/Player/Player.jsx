import React from "react";
import "./styles.scss";

const Player = ({
  id,
  name,
  sexuality,
  gender,
  players,
  setPlayers,
  removePlayer,
}) => {
  const updateGender = (e) => {
    if (gender === e.target.value) return;

    const currentPlayersIndex = players.findIndex((player) => (player.id = id));

    players[currentPlayersIndex].gender = e.target.value;

    setPlayers([...players]);
  };

  const updateSexuality = (e) => {
    if (sexuality === e.target.value) return;

    const currentPlayersIndex = players.findIndex((player) => (player.id = id));

    players[currentPlayersIndex].sexuality = e.target.value;

    setPlayers([...players]);
  };

  return (
    <li className="player">
      <div className="nome">
        <p>
          <span>Name:&nbsp;</span>
          {name}
        </p>
        <div className="deleteKey" onClick={() => removePlayer(id)}>
          X
        </div>
      </div>
      <div className="sexuality">
        <p>
          <span>Sexuality:&nbsp;</span>
          <select
            name="orientacaoSexual"
            id="orientacaoSexual"
            onChange={(e) => updateSexuality(e, id)}
            value={sexuality}
          >
            <option value="queer">Asexual</option>
            <option value="bisexual">Bisexual</option>
            <option value="heterosexual">Heterosexual</option>
            <option value="homosexual">Homosexual</option>
            <option value="lesbian">Lesbian</option>
            <option value="pansexual">Pansexual</option>
            <option value="queer">Queer</option>
          </select>
        </p>
      </div>
      <div className="gender">
        <p>
          <span>Gender:&nbsp;</span>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => updateGender(e, id)}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Non-Binary (AMAB)">Non-binary (AMAB)</option>
            <option value="Non-Binary (AFAB)">Non-binary (AFAB)</option>
          </select>
        </p>
      </div>
    </li>
  );
};

export default Player;
