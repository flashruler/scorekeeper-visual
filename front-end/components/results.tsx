import { MatchResults } from "../types/MatchResults";
import MatchupComponent from "./matchupComponent";

export default function Results(props: { data: MatchResults}) {
  let matchResult = props.data;
  console.log(matchResult)
  if (matchResult) {
    return (
      <div className="bg-green-500">
        <div className="grid grid-cols-6 grid-rows-5 h-screen">
          <div className="col-span-8 row-span-1 self-center">
            <div className="h-20 bg-dark-gray grid grid-cols-9 items-center bg-gradient-to-r from-blue-500 to-red-500">
              <h1 className="text-center text-white text-2xl"></h1>
              <h1 className="text-center text-white text-2xl">{matchResult.matchBrief.blue.team1}</h1>
              <h1 className="text-center text-white text-2xl">{matchResult.matchBrief.blue.team2}</h1>
              <h1 className="text-center text-white text-5xl italic">{matchResult.blueScore}</h1>
              <h1 className="text-center text-white text-2xl">{matchResult.redScore > matchResult.blueScore ? 'Red Alliance Wins' : matchResult.redScore < matchResult.blueScore ? 'Blue Alliance Wins': 'Tie'}</h1>
              <h1 className="text-center text-white text-5xl italic">{matchResult.redScore}</h1>
              <h1 className="text-center text-white text-2xl">{matchResult.matchBrief.red.team1}</h1>
              <h1 className="text-center text-white text-2xl">{matchResult.matchBrief.red.team2}</h1>
              <h1 className="text-center text-white text-2xl"></h1>
            </div>
          </div>
          <div className="col-start-1 col-span-3 row-start-2 row-span-4 p-10">
            <div className="grid grid-cols-3 grid-rows-4 h-5/6 items-center">
              <h1 className="text-center text-white text-5xl">{matchResult.blue.auto}</h1>
              <h1 className="text-center text-black  italic text-2xl">AUTONOMOUS</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.red.auto}</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.blue.teleop}</h1>
              <h1 className="text-center text-black  italic text-2xl">DRIVER CONTROL</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.red.teleop}</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.blue.end}</h1>
              <h1 className="text-center text-black  italic text-2xl">ENDGAME</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.red.end}</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.blue.penalty}</h1>
              <h1 className="text-center text-black  italic text-2xl">PENALTIES</h1>
              <h1 className="text-center text-black  text-5xl">{matchResult.red.penalty}</h1>
            </div>
          </div>

          <div className="col-start-4 col-span-3 row-start-2 row-span-3 p-3 items-center">
            <h1>test</h1>
            <div className="bg-black h-full">Video Feed URL</div>
          </div>
          {/* <div className="col-start-4 col-span-3 p-5 text-black  text-2xl italic">
            Upcoming Match
            <MatchupComponent />
          </div> */}
        </div>
      </div>
    );
  }
  return <></>;
}
