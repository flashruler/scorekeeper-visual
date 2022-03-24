import React, { useState, useEffect } from "react";
import PreMatchInformation from "./Scenes/preMatchInformation";
import MatchPlay from "./Scenes/matchPlay";
import Obs, { useObsWebSocket } from "./Api/useObsWebSocket";
import { useScoringSystemWebSocket } from "./Api/useScoringSystemWebSocket";
import { UpdateMessage } from "./Types/UpdateMessage";
import { Ranking } from "./Types/Ranking";
import { MatchDetailed } from "./Types/MatchDetailed";
import Randomization from "./Scenes/randomization";
import { SceneOptions } from "./Types/SceneOptions";

export default function App() {
  const [rankingList, setRankingList] = useState<Ranking[]>([]);
  const [activeMatchNumber, setActiveMatchNumber] = useState<number>(1);
  const [activeMatch, setActiveMatch] = useState<MatchDetailed>();
  const [scene, setScene] = useState<SceneOptions>();

  const lastMessage = useScoringSystemWebSocket();
  useObsWebSocket(Obs);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log("Last Message", lastMessage);
      setActiveMatchNumber(lastMessage.payload.field);
      switch (lastMessage.updateType) {
        case "MATCH_LOAD": {
          setScene(SceneOptions.PreMatchInformation);
        }
      }

      Obs.send("SetCurrentScene", {
        "scene-name": "Field " + lastMessage.payload.field,
      });
    }
  }, [lastMessage]);

  useEffect(() => {
    // TODO: remove hardcoded event codes
    fetch("http://localhost/api/v1/events/tes/rankings/")
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log("result", result);
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
          // console.log("result", result);
          setActiveMatch(result);
        },
        (error) => {}
      );
  }, [activeMatchNumber]);

  const sceneDisplay = () => {
    switch (scene) {
      case "Randomization":
        return <Randomization />;
      case "PreMatchInformation":
        return (
          <PreMatchInformation
            rankingList={rankingList!}
            activeMatch={activeMatch!}
          />
        );
    }
  };

  // return <div>{sceneDisplay()}</div>;

  return(<div><MatchPlay/></div>)
}
