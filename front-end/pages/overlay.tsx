import TopOverlay from "../components/topOverlay";
import Intermission from "../components/intermission.js";
import Results from "../components/results";
import getMatchResults from "../api/getMatchResults";
import { MatchResults } from "../types/MatchResults.js";
import { useEffect, useState } from "react";
import getOverlayState from "../api/getOverlayState";

export default function overlay(props) {

  const { overlayData, overlayIsLoading, overlayIsError } = getOverlayState();
  const { data, isLoading, isError } = getMatchResults(1);

  let matchData: MatchResults = data;

  
  // useEffect(() => {
  //   results
  // }, []);

  return (
    <>
      {console.log(overlayData)}
      {overlayData && (
        <div className=" w-screen h-screen">
          {overlayData[0].state === "intermission" && <Intermission />}
          {overlayData[0].state === "match-results" && <Results data={matchData} />}
          {overlayData[0].state === "top-overlay" && <TopOverlay />}
          <div className="flex flex-row justify-center">{/* <TopOverlay/> */}</div>
        </div>
      )}
    </>
  );
}
