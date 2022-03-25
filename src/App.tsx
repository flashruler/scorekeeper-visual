import React, { useState, useEffect } from "react";
import PreMatchInformation from "./scenes/preMatchInformation";
import Obs, { useObsWebSocket } from "./api/useObsWebSocket";
import { useScoringSystemWebSocket } from "./api/useScoringSystemWebSocket";
import { UpdateMessage } from "./types/UpdateMessage";
import { Ranking } from "./types/Ranking";
import { MatchDetailed } from "./types/MatchDetailed";
import Randomization from "./scenes/randomization";
import { SceneOptions } from "./types/SceneOptions";
import MatchPlay from "./scenes/matchPlay";
import MatchResults from "./scenes/matchResults";
import { useInterval } from "./hooks/useInterval";

export default function App() {
  const [rankingList, setRankingList] = useState<Ranking[]>([]);
  const [activeMatchNumber, setActiveMatchNumber] = useState<number>(1);
  const [activeMatch, setActiveMatch] = useState<MatchDetailed>();
  const [scene, setScene] = useState<SceneOptions>();
  const [randomization, setRandomization] = useState<number>();
  const [savedLastMessage, setSavedLastMessage] = useState<UpdateMessage>();

  const lastMessage: UpdateMessage = useScoringSystemWebSocket();
  useObsWebSocket(Obs);
  useInterval(() => {
    fetch(
      `http://localhost/api/2022/v1/events/tes/matches/${activeMatchNumber}/`
    )
      .then((res) => res.json())
      .then(
        (result: MatchDetailed) => {
          console.log("Looped for match ", activeMatchNumber, result);
          setActiveMatch(result);
          setRandomization(result.randomization);
        },
        (error) => {}
      );
  }, 4000);

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
          // Start Timer
          setScene(SceneOptions.MatchPlay);
          break;
        case "MATCH_ABORT":
          break;
        case "MATCH_COMMIT":
          break;
        case "MATCH_POST":
          setScene(SceneOptions.MatchResults);
          break;
      }

      Obs.send("SetCurrentScene", {
        "scene-name": "Field " + lastMessage.payload.field,
      });
    }
  }, [lastMessage]);

  const getActiveMatchLoop = (activeMatchNumber: number) => {
    console.log("starting loop");
    return setInterval(() => {
      console.log("Looped for match ", activeMatchNumber);
    }, 10 * 1000);
  };

  useEffect(() => {
    // TODO: remove hardcoded event codes
    fetch("http://localhost/api/v1/events/tes/rankings/")
      .then((res) => res.json())
      .then(
        (result) => {
          setRankingList(result.rankingList);
        },
        (error) => {}
      );

    fetch(
      `http://localhost/api/2022/v1/events/tes/matches/${activeMatchNumber}/`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setActiveMatch(result);
        },
        (error) => {}
      );
  }, []);

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
        return <MatchPlay />;
      case "MatchResults":
        return <MatchResults />;
      default:
        return <h1>Default</h1>;
    }
  };

  return <div>{sceneDisplay()}</div>;
}
