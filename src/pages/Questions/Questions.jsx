import "./styles.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import daresFile from '../../static/dares.json';
import truthsFile from '../../static/truths.json';
import usePlayers from "../../hooks/usePlayers";

const gamemodeTitles = {
}

const Questions = () => {
  const { players, setPlayers } = usePlayers();
  const [currentPlayers, setCurrentPlayers] = useState(players)
  const [status, setStatus] = useState("modes")
  const [dares, setDares] = useState([]);
  const [truths, setTruths] = useState([]);
  const [daresCounter, setDaresCounter] = useState(0);
  const [truthsCounter, setTruthsCounter] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState("")
  const [currentChallengeMode, setCurrentChallengeMode] = useState("")
  const [currentPlayer, setCurrentPlayer] = useState({
    name: "",
    id: "",
    gender: "",
    sexuality: "",
  });
  const { mode } = useParams();
  const selectRandomPlayer = (playersArr) => {
    const randomIndex = Math.floor(playersArr.length * Math.random());
    return playersArr[randomIndex];
  }

  const chooseCompatiblePlayer = (currentPlayer) => {
    const playersArrayWithoutCurrentPlayer = players.filter((currentPlayerObj) => currentPlayerObj.id !== currentPlayer.id);



    return selectRandomPlayer(playersArrayWithoutCurrentPlayer);
  }

  const getRandomIndex = (array) => {
    return Math.floor(array.length * Math.random());
  }

  const handleClick = (challengeType) => {
    setStatus('challenges');
    if (challengeType === 'truth') {
      const truthChallenge = truths[getRandomIndex(truths)].replace('-player-', chooseCompatiblePlayer(currentPlayer).name)
      setCurrentChallenge(`${currentPlayer.name}, ${truthChallenge}`);
      setCurrentChallengeMode('truth');
      setTruthsCounter((previousValue) => previousValue + 1);
      return;
    }

    const dareChallenge = dares[getRandomIndex(dares)].replace('-player-', chooseCompatiblePlayer(currentPlayer).name);

    setCurrentChallenge(`${currentPlayer.name}, ${dareChallenge}`);
    setCurrentChallengeMode('dare');
    setDaresCounter((previousValue) => previousValue + 1);
  }

  const handleNextChallenge = () => {
    setStatus('modes');
    setCurrentPlayer(selectRandomPlayer(players));
  }

  useEffect(() => {
    setDares(daresFile[mode.trim()]);
    setTruths(truthsFile[mode.trim()]);
    setCurrentPlayer(selectRandomPlayer(players));
  }, []);

  return (
    <section className="questions">
      {status === 'modes' ?
        <div className="modes">
          <h1>Playing </h1>
          <h2>It's {currentPlayer?.name || 'Random'}'s turn!</h2>
          <div className="modeButton truthBtn" onClick={() => handleClick('truth')}>Truth</div>
          <div className="modeButton" onClick={() => handleClick('dare')}>Dare</div>
        </div>
        :
        <div className="currentChallenge">
          <span>{currentChallengeMode === 'truth' ?
            truthsCounter + ' / ' + truths.length :
            daresCounter + ' / ' + dares.length}
          </span>
          <h1>{currentChallengeMode}</h1>
          <p>{currentChallenge}</p>
          <button onClick={handleNextChallenge}>Next!</button>
        </div>
      }
    </section>
  );
}

export default Questions;
