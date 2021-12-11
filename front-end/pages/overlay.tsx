import TopOverlay from "../components/topOverlay";
import Intermission from "../components/intermission.js";
import Results from "../components/results";
import getMatchResults from "../api/getMatchResults";
import { MatchResults } from "../types/MatchResults.js";
import { useEffect, useState } from "react";
import getOverlayState from "../api/getOverlayState";
import getActiveMatches from "../api/getActiveMatches";
import axios from "axios";

export default function overlay(props) {
  // const { overlayData, overlayIsLoading, overlayIsError } = getOverlayState();
  // const { data, isLoading, isError } = getMatchResults(1);

  // let matchData: MatchResults = data;

  // const [matchData, setMatchData] = useState();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     loadData();
  //   }, 6000);
  // });

  // function loadData() {
  //   axios.get("http://localhost/api/v1/events/test/matches/active/").then(function (response) {
  //     setTimeout(function () {
  //       console.log(response);
  //       if (response.data.matches[0]) {
  //         axios.get("http://localhost/api/2022/v1/events/test/matches/" + response.data.matches[0].matchNumber).then(function (response) {
  //           setMatchData(response.data);
  //         });
  //       }
  //     }, 3000);
  //   });
  // }

  const {data, isLoading, isError } = getActiveMatches();

  return (
    <>
    {data && console.log(data)}
      {data && (
        <div className=" w-screen h-screen">
          <TopOverlay data={data.matches[0]}></TopOverlay>
        </div>
      )}
    </>
  );
}
