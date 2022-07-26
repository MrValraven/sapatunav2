import React from "react";
import "./styles.scss";

const Player = ({ id, name, sexuality, gender, removePlayer }) => {
  const updateGender = (e) => {
    console.log(e.target.value);
  };

  const updateSexuality = (e) => {
    console.log(e.target.value);
  };

  return (
    <li className="player">
      <div className="nome">
        <p>
          <span>Nome:&nbsp;</span>
          {name}
        </p>
        <div className="deleteKey" onClick={() => removePlayer(id)}>
          X
        </div>
      </div>
      <div className="otherInfo">
        <p>
          <span>Sexualidade:&nbsp;</span>
          {sexuality}
        </p>
        <p>
          <span>Género:&nbsp;</span>
          {gender}
        </p>
      </div>
      {/* <select
        name="orientacaoSexual"
        id="orientacaoSexual"
        onChange={(e) => updateSexuality(e, id)}
        value={sexuality}
      >
        <option value="bisexual">Bissexual</option>
        <option value="heterosexual">Heterossexual</option>
        <option value="homosexual">Homossexual</option>
        <option value="lesbian">Lésbica</option>
        <option value="pansexual">Pansexual</option>
      </select>
      <select
        name="gender"
        id="gender"
        value={gender}
        onChange={(e) => updateGender(e, id)}
      >
        <option>{gender}</option>
        <option value="man">Homem</option>
        <option value="woman">Mulher</option>
        <option value="nonBinary">Não-Binário</option>
      </select> */}
    </li>
  );
};

export default Player;
