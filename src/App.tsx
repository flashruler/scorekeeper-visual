import React, { useState, useEffect, useRef } from "react";
import PreMatchInformation from "./scenes/preMatchInformation";
import Obs, { useObsWebSocket } from "./api/useObsWebSocket";
import { useScoringSystemWebSocket } from "./api/useScoringSystemWebSocket";
import { UpdateMessage } from "./types/UpdateMessage";
import { Ranking } from "./types/Ranking";
import { FreightFrenzyMatchDetailed } from "./types/FreightFrenzyMatchDetailed";
import Randomization from "./scenes/randomization";
import { SceneOptions } from "./types/SceneOptions";
import MatchPlay from "./scenes/matchPlay";
import MatchResults from "./scenes/matchResults";
import { useInterval } from "./hooks/useInterval";
import { MatchDetailed } from "./types/MatchDetailed";
import { useTimer } from "react-timer-hook";

export default function App() {
  const [rankingList, setRankingList] = useState<Ranking[]>([]);
  const [activeMatchNumber, setActiveMatchNumber] = useState<number>(1);
  const [activeMatch, setActiveMatch] = useState<FreightFrenzyMatchDetailed>();
  const [scene, setScene] = useState<SceneOptions>();
  const [randomization, setRandomization] = useState<number>();
  const [activeMatchResults, setActiveMatchResults] = useState<MatchDetailed>();
  // const [seconds, setSeconds] = useState<number>(150);
  // const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 150);
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
    });

  useEffect(() => {
    if (minutes == 2 && seconds == 0) {
      pause();
      setTimeout(() => {
        resume();
      }, 8000);
    }
  }, [seconds, minutes]);

  const lastMessage: UpdateMessage = useScoringSystemWebSocket();
  useObsWebSocket(Obs);
  useInterval(() => {
    fetch(
      `http://localhost/api/2022/v1/events/tes/matches/${activeMatchNumber}/`
    )
      .then((res) => res.json())
      .then(
        (result: FreightFrenzyMatchDetailed) => {
          console.log("Looped for match ", activeMatchNumber, result);
          setActiveMatch(result);
          setRandomization(result.randomization);
        },
        (error) => {
          setScene(SceneOptions.AudienceDisplay);
        }
      );
  }, 4000);

  useInterval(() => {
    fetch("http://localhost/api/v1/events/tes/rankings/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Looped for ranking ", activeMatchNumber, result);
          setRankingList(result.rankingList);
        },
        (error) => {
          setScene(SceneOptions.AudienceDisplay);
        }
      );
  }, 10000);

  useEffect(() => {
    fetch("http://localhost/api/v1/events/tes/rankings/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Looped for ranking ", activeMatchNumber, result);
          setRankingList(result.rankingList);
        },
        (error) => {
          setScene(SceneOptions.AudienceDisplay);
        }
      );
  }, []);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log("Last Message", lastMessage);
      console.log(
        "setting active match number as ",
        lastMessage.payload.number
      );
      setActiveMatchNumber(lastMessage.payload.number);
      switch (lastMessage.updateType) {
        case "MATCH_LOAD":
          break;
        case "MATCH_START":
          restart(expiryTimestamp);
          start();
          setScene(SceneOptions.MatchPlay);
          break;
        case "MATCH_ABORT":
          break;
        case "MATCH_COMMIT":
          break;
        case "MATCH_POST":
          getMatchResults();
          setScene(SceneOptions.MatchResults);
          break;
      }

      Obs.send("SetCurrentScene", {
        "scene-name": "Field " + lastMessage.payload.field,
      });
    }
  }, [lastMessage]);

  useEffect(() => {
    if (activeMatch) {
      if (activeMatch.matchBrief.matchState === "RANDOMIZED") {
        setScene(SceneOptions.Randomization);
      }
      if (activeMatch.matchBrief.matchState === "UNPLAYED") {
        setScene(SceneOptions.PreMatchInformation);
      }
    }
  }, [activeMatch]);

  const setAudienceDisplay = () => {
    Obs.send("SetCurrentScene", {
      "scene-name": "Audience Display",
    });
  };

  const getMatchResults = () => {
    fetch(`http://localhost/api/v1/events/tes/matches/${activeMatchNumber}/`)
      .then((res) => res.json())
      .then(
        (result) => {
          setActiveMatchResults(result);
        },
        (error) => {
          setScene(SceneOptions.AudienceDisplay);
        }
      );
  };

  const sceneDisplay = () => {
    switch (scene) {
      case "Randomization":
        return <Randomization randomization={randomization!} />;
      case "PreMatchInformation":
        return (
          <PreMatchInformation
            rankingList={rankingList!}
            activeMatch={activeMatch!}
          />
        );
      case "MatchPlay":
        return (
          <MatchPlay
            activeMatch={activeMatch!}
            seconds={seconds}
            minutes={minutes}
          />
        );
      case "MatchResults":
        return <MatchResults activeMatchResults={activeMatchResults!} />;
      case "AudienceDisplay":
        setAudienceDisplay();
        return <h1>Showing Audience Display</h1>;
      default:
        setAudienceDisplay();
        return <h1>Showing Audience Display</h1>;
    }
  };

  return <div>{sceneDisplay()}</div>;
}
