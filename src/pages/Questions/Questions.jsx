import "./styles.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import daresFile from '../../static/dares.json';
import truthsFile from '../../static/truths.json';
import usePlayers from "../../hooks/usePlayers";

const Questions = () => {
  const { players, setPlayers } = usePlayers();
  const [currentPlayers, setCurrentPlayers] = useState(players)
  const [dares, setDares] = useState([]);
  const [truths, setTruths] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({
    name: "",
    id: "",
    gender: "",
    sexuality: "",
  });
  const { mode } = useParams();

  const selectedRandomPlayer = (playersArr) => {
    console.log(playersArr, ' being passed')
    const randomIndex = Math.abs(playersArr.length * Math.random());
    console.log('player being returned', playersArr[randomIndex]);
    return playersArr[randomIndex];
  }

  useEffect(() => {
    setDares(daresFile[mode]);
    setTruths(truthsFile[mode]);
  }, []);

  useEffect(() => {
    setCurrentPlayer(selectedRandomPlayer(currentPlayers));
    console.log('players changed')
  }, [currentPlayers])


  return (
    <section className="questions">
      <div>Truth</div>
      <div>{currentPlayer?.name || 'Random'}</div>
      <div>Dare</div>
      {players.map(player =>
        <div key={player.id}>
          {player.name}
        </div>)}
    </section>
  );
}

export default Questions;
