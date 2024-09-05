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
  const [currentChallenge, setCurrentChallenge] = useState("")
  const [currentChallengeMode, setCurrentChallengeMode] = useState("")
  const [currentPlayer, setCurrentPlayer] = useState({
    name: "",
    id: "",
    gender: "",
    sexuality: "",
  });
  const { mode } = useParams();

  const selectedRandomPlayer = (playersArr) => {
    const randomIndex = Math.floor(playersArr.length * Math.random());
    return playersArr[randomIndex];
  }

  const chooseCompatiblePlayer = (currentPlayer) => {
    const playersArrayWithoutCurrentPlayer = players.filter((currentPlayerObj) => currentPlayerObj.id !== currentPlayer.id);

    return playersArrayWithoutCurrentPlayer;
  }

  const getRandomIndex = (array) => {
    return Math.floor(array.length * Math.random());
  }

  const handleClick = (challengeType) => {
    console.log('handleClick', challengeType)
    if (challengeType === 'truth') {
      setCurrentChallenge(truths[getRandomIndex(truths)]);
      setCurrentChallengeMode('truth');
      return;
    }

    setCurrentChallenge(dares[getRandomIndex(dares)]);
    setCurrentChallengeMode('dare');
  }

  useEffect(() => {
    setDares(daresFile[mode.trim()]);
    setTruths(truthsFile[mode.trim()]);
    setCurrentPlayer(selectedRandomPlayer(players));
  }, []);

  return (
    <section className="questions">
      <div className="modes">
        <div className="modeButton" onClick={() => handleClick('truth')}>Truth</div>
        <div>{currentPlayer?.name || 'Random'}</div>
        <div className="modeButton" onClick={() => handleClick('dare')}>Dare</div>
      </div>
      <div className="currentChallenge">
        <span>{ } / {currentChallengeMode === 'truth' ? truths.length : dares.length}</span>
        <p>Current: {currentChallenge}</p>
      </div>

    </section>
  );
}

export default Questions;
