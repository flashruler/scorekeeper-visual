import { FreightFrenzyMatchDetailed } from "../types/FreightFrenzyMatchDetailed";
import UnscoredDuck from "../svgs/unscoredDuck"
import ScoredDuck from "../svgs/scoredDuck"
import Hub from "../svgs/hub"
import Depot from "../svgs/depot"
import InWarehouse from "../svgs/inWarehouse"
import FullyInWarehouse from "../svgs/fullyInWarehouse"
import InStorage from "../svgs/inStorage"
import FullyInStorage from "../svgs/fullyInStorage"
import AutoUnparked from "../svgs/autoUnparked"
import PreloadScore from "../svgs/preloadScore"
import OneTse from "../svgs/oneTse"
import TwoTse from "../svgs/twoTse"
import Parked from "../svgs/parked"
import CompletelyParked from "../svgs/completelyParked"
import UnbalancedHub from "../svgs/unbalancedHub"
import RedTipped from "../svgs/redTipped";
import SharedHub from "../svgs/sharedHub";
import BlueTipped from "../svgs/blueTipped";
import { Ranking } from "../types/Ranking";

const findTeamName = (rankingList: Ranking[], teamNumber: number) => {
  return rankingList[rankingList.findIndex((rank) => rank.team === teamNumber)]
    .teamName;
};
// const formatTimer = (totalSeconds: number) => {
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds - minutes * 60;
//   const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
//   return `${minutes}:${displaySeconds}`;
// };

const formatSeconds = (seconds: number) => {
  return seconds < 10 ? `0${seconds}` : seconds;
};

const formatMatchStatus = (matchStatus: string) => {
  return matchStatus === "RANDOMIZED" ? "AUTO" : matchStatus;
};

export default function MatchPlay({
  activeMatch,
  rankingList,
  minutes,
  seconds,
}: {
  rankingList: Ranking[];
  activeMatch: FreightFrenzyMatchDetailed;
  minutes: number;
  seconds: number;
}) {
  return (
    <div className="w-[1920px] h-[1080px] bg-green-500">
      <div className="absolute w-[510px] h-[42px] flex flex-row items-center bg-[#323232]"><h1 className=" mx-2 text-3xl text-white font-light italic">San Diego Regional Championship {activeMatch.matchBrief.matchName}</h1></div>
      <div className="absolute w-[300px] h-[199.57px] ml-[103px] mt-[855px] flex flex-col">
        <div className="rounded-md flex items-center w-[300px] h-[61.3px] bg-[#FF6060] my-2"><h1 className="text-3xl font-light italic mx-3 text-white uppercase">{activeMatch.matchBrief.red.team1}</h1><h1 className="text-2xl font-light italic mx-1 text-white uppercase">
          {findTeamName(rankingList, activeMatch.matchBrief.red.team1)}
        </h1></div>
        <div className="rounded-md flex items-center w-[300px] h-[61.3px] bg-[#FF6060] my-2"><h1 className="text-3xl font-light italic mx-3 text-white uppercase">{activeMatch.matchBrief.red.team2}</h1><h1 className="text-2xl font-light italic mx-1 text-white uppercase">
          {findTeamName(rankingList, activeMatch.matchBrief.red.team2)}
        </h1></div>
      </div>
      <div className="absolute w-[300px] h-[199.57px] ml-[1517px] mt-[855px] flex flex-col">
        <div className="rounded-md flex items-center w-[300px] h-[61.3px] bg-[#5AA6EC] my-2"><h1 className="text-3xl font-light italic mx-3 text-white uppercase">{activeMatch.matchBrief.blue.team1}</h1><h1 className="text-2xl font-light italic mx-1 text-white uppercase">
          {findTeamName(rankingList, activeMatch.matchBrief.blue.team1)}
        </h1></div>
        <div className="rounded-md flex items-center w-[300px] h-[61.3px] bg-[#5AA6EC] my-2"><h1 className="text-3xl font-light italic mx-3 text-white uppercase">{activeMatch.matchBrief.blue.team2}</h1><h1 className="text-2xl font-light italic mx-1 text-white uppercase">
          {findTeamName(rankingList, activeMatch.matchBrief.blue.team2)}
        </h1></div>
      </div>
      {/* Phase Indicator (Auto/Tele-op/Endgame) */}
      <div className="absolute rounded-md w-[125px] h-[32px] ml-[898px] mt-[855px] bg-[#323232]">
        <h1 className="text-center text-white uppercase text-2xl italic font-light">
          {formatMatchStatus(activeMatch.matchBrief.matchState)}
        </h1>
      </div>
      {/* Timer */}
      <h1 className=" z-10 absolute leading-[42px] text-3xl ml-[931px] mt-[928px] font-normal">
        {/* {formatTimer(seconds)} */}
        {`${minutes}:${formatSeconds(seconds)}`}
      </h1>
      {/* Red Score */}
      <h1 className="min-w-[95px] absolute z-10 mt-[923px] ml-[815px] leading-[56px] text-[48px] text-white italic text-center">
        {activeMatch.redScore}
      </h1>
      {/* Blue Score */}
      <h1 className="min-w-[95px] absolute z-10 mt-[923px] ml-[1010px] leading-[56px] text-[48px] text-white italic text-center">
        {activeMatch.blueScore}
      </h1>
      <svg
        className="absolute mt-[899px] ml-[804px]"
        width="312"
        height="102"
        viewBox="0 0 312 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="19" width="312" height="65" rx="10" fill="#323232" />
        <circle cx="156" cy="51" r="51" fill="#757575" />
        <circle cx="156" cy="51" r="41" fill="#C4C4C4" />
      </svg>
      {activeMatch.matchBrief.matchState==="AUTO" ? <div>{/* Autonomous Icons Red Side*/}
      {/* If Duck is not scored */}
      {activeMatch.red.carousel ? <div className="absolute ml-[696px] mt-[855.33px]"><ScoredDuck/></div>: <div className="absolute ml-[696px] mt-[855.33px]"><UnscoredDuck/></div>}
      
      {/* Depot Score */}
      <div className="w-[98px] h-[65.48px] absolute ml-[679px] mt-[932px] flex flex-row justify-center items-center">
        <Depot/>
        <h1 className="text-[#323232] justify-self-center text-5xl font-medium text-center ml-2">
          {activeMatch.red.autoStorageFreight}
        </h1>
      </div>
      {/* Hub Score */}
      <div className="absolute w-[98px] h-[65.48px] ml-[679px] mt-[997px] flex flex-row justify-center items-center">
        <Hub/>
        <h1 className="text-[#323232] justify-self-center text-5xl font-medium text-center ml-2">
          {activeMatch.red.autoFreight1+activeMatch.red.autoFreight2+activeMatch.red.autoFreight3}
        </h1>
      </div>
      {/* Red Marker 1*/}
      {activeMatch.red.barcodeElement1==="DUCK" ? <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[867px] flex flex-row justify-center items-center">
      {activeMatch.red.autoBonus1 ? <PreloadScore/> : <Depot/>}
      </div> : <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[867px] flex flex-row justify-center items-center">
        {activeMatch.red.autoBonus1 ? <PreloadScore/> : <Depot/>}
        <h1 className="text-5xl text-[#323232] ml-2">DB</h1>
      </div>}
      
      {/* Red Marker 2 */}
      {activeMatch.red.barcodeElement2==="DUCK" ? <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[926px] flex flex-row justify-center items-center">
      {activeMatch.red.autoBonus2 ? <PreloadScore/> : <Depot/>}
      </div> : <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[926px] flex flex-row justify-center items-center">
      {activeMatch.red.autoBonus2 ? <PreloadScore/> : <Depot/>}
        <h1 className="text-5xl text-[#323232] ml-2">DB</h1>
      </div>}
      
      <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[1000px] flex flex-row justify-center items-center">
        {/* Unparked 1*/}
        {activeMatch.red.autoNavigated1 ==="IN_WAREHOUSE" ? <InWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="COMPLETELY_IN_WAREHOUSE" ? <FullyInWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="IN_STORAGE" ? <InStorage/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="COMPLETELY_IN_STORAGE" ? <FullyInStorage/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="NONE" ? <AutoUnparked/> :<div/>}
        {/* Unparked 2 */}
        {activeMatch.red.autoNavigated2 ==="IN_WAREHOUSE" ? <InWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="COMPLETELY_IN_WAREHOUSE" ? <FullyInWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="IN_STORAGE" ? <InStorage/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="COMPLETELY_IN_STORAGE" ? <FullyInStorage/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="NONE" ? <AutoUnparked/> :<div/>}
      </div>
      <div>
      {activeMatch.blue.carousel ? <div className="absolute ml-[1166px] mt-[855.33px]"><ScoredDuck/></div>: <div className="absolute ml-[1153px] mt-[855.33px]"><UnscoredDuck/></div>}
      <div className="w-[98px] h-[65.48px] absolute ml-[1178px] mt-[932px] flex flex-row justify-center items-center">
        <Depot/>
        <h1 className="text-[#323232] justify-self-center text-5xl font-medium text-center ml-2">
          {activeMatch.blue.autoStorageFreight}
        </h1>
      </div>
      <div className="absolute w-[98px] h-[65.48px] ml-[1169.76px] mt-[997px] flex flex-row justify-center items-center">
        <Hub/>
        <h1 className="text-[#323232] justify-self-center text-5xl font-medium text-center ml-2">
          {activeMatch.blue.autoFreight1+activeMatch.blue.autoFreight2+activeMatch.blue.autoFreight3}
        </h1>
      </div>

      {activeMatch.blue.barcodeElement1==="DUCK" ? <div className="absolute w-[144px] h-[56px] ml-[1284px] mt-[867px] flex flex-row justify-center items-center">
      {activeMatch.blue.autoBonus1 ? <PreloadScore/> : <Depot/>}
      </div> : <div className="absolute w-[144px] h-[56px] ml-[1284px] mt-[867px] flex flex-row justify-center items-center">
        {activeMatch.blue.autoBonus1 ? <PreloadScore/> : <Depot/>}
        <h1 className="text-5xl text-[#323232] ml-2">DB</h1>
      </div>}

      {activeMatch.blue.barcodeElement2==="DUCK" ? <div className="absolute w-[144px] h-[56px] ml-[1284px] mt-[926px] flex flex-row justify-center items-center">
      {activeMatch.blue.autoBonus2 ? <PreloadScore/> : <Depot/>}
      </div> : <div className="absolute w-[144px] h-[56px] ml-[1284px] mt-[926px] flex flex-row justify-center items-center">
      {activeMatch.blue.autoBonus2 ? <PreloadScore/> : <Depot/>}
        <h1 className="text-5xl text-[#323232] ml-2">DB</h1>
      </div>}
      <div className="absolute w-[144px] h-[56px] ml-[1284px] mt-[1000px] flex flex-row justify-center items-center">
        {/* Unparked 1*/}
        {activeMatch.red.autoNavigated1 ==="IN_WAREHOUSE" ? <InWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="COMPLETELY_IN_WAREHOUSE" ? <FullyInWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="IN_STORAGE" ? <InStorage/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="COMPLETELY_IN_STORAGE" ? <FullyInStorage/> :<div/>}
        {activeMatch.red.autoNavigated1 ==="NONE" ? <AutoUnparked/> :<div/>}
        {/* Unparked 2 */}
        {activeMatch.red.autoNavigated2 ==="IN_WAREHOUSE" ? <InWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="COMPLETELY_IN_WAREHOUSE" ? <FullyInWarehouse/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="IN_STORAGE" ? <InStorage/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="COMPLETELY_IN_STORAGE" ? <FullyInStorage/> :<div/>}
        {activeMatch.red.autoNavigated2 ==="NONE" ? <AutoUnparked/> :<div/>}
      </div>

      </div>
      
      
      
      
      </div> 
      
      
      
      
      : 
      <div>
        <div className="absolute w-[107px] h-[202px] ml-[675px] mt-[862px]">
          <div className="flex flex-row justify-center items-center"><ScoredDuck/>
          <h1 className="text-5xl ml-2 text-[#323232]">{activeMatch.red.endgameDelivered}
          </h1>
          </div>
        <div className="flex flex-row justify-center items-center"><Depot/><h1 className="text-5xl ml-2 text-[#323232]">{activeMatch.red.driverControlledStorageFreight}</h1></div>
        {activeMatch.red.capped===1 ? <OneTse/> :<div/>}
        {activeMatch.red.capped===2 ? <TwoTse/> :<div/>}
        </div>
        <div className="absolute w-[67.06px] h-[211.5px] ml-[587.59px] mt-[850px]">
          {activeMatch.red.endgameParked1==="IN_WAREHOUSE" ? <Parked/> : <div/>}
          {activeMatch.red.endgameParked1==="COMPLETELY_IN_WAREHOUSE" ? <CompletelyParked/> : <div/>}
          {activeMatch.red.endgameParked1==="NONE" ? <Depot/> : <div/>}
          {activeMatch.red.endgameParked2==="IN_WAREHOUSE" ? <Parked/> : <div/>}
          {activeMatch.red.endgameParked2==="COMPLETELY_IN_WAREHOUSE" ? <CompletelyParked/> : <div/>}
          {activeMatch.red.endgameParked2==="NONE" ? <Depot/> : <div/>}
          {activeMatch.red.allianceBalanced ? <Hub/> : <UnbalancedHub/>}
        </div>
        <div className="absolute w-[144px] h-[205px] mt-[852px] ml-[423px] flex flex-col">
          <div className="flex flex-row rounded-md h-[65px] w-[144px] justify-center items-center my-1 bg-[#323232]">
            <h1 className="text-5xl italic text-white">L3: {activeMatch.red.driverControlledFreight3}</h1>
          </div>
          <div className="flex flex-row rounded-md h-[65px] w-[144px] justify-center items-center my-1 bg-[#323232]">
            <h1 className="text-5xl italic text-white">L2: {activeMatch.red.driverControlledFreight2}</h1>
          </div>
          <div className="flex flex-row rounded-md h-[65px] w-[144px] justify-center items-center my-1 bg-[#323232]">
            <h1 className="text-5xl italic text-white">L1: {activeMatch.red.driverControlledFreight1}</h1>
          </div>
        </div>
        {/* Shared Hub Scores */}
        <div className="absolute w-[69.8px] h-[64.48px] ml-[870px] mt-[1000px]"><h1 className="text-5xl ml-2 text-[#323232]">{activeMatch.red.sharedFreight}</h1></div>
        <div className="absolute ml-[933px] mt-[1003px] w-[69.8px] h-[64.48px]">
          {activeMatch.red.sharedUnbalanced ? <RedTipped/> : <div/>}
          {activeMatch.blue.sharedUnbalanced ? <BlueTipped/> : <div/>}
          {activeMatch.blue.sharedUnbalanced ===false && activeMatch.red.sharedUnbalanced === false ? <SharedHub/> : <div/>}
        </div>
        <div className="absolute w-[69.8px] h-[64.48px] ml-[996px] mt-[1000px]"><h1 className="text-5xl ml-2 text-[#323232]">{activeMatch.blue.sharedFreight}</h1></div>
        
        <div className="absolute w-[107px] h-[202px] ml-[1139px] mt-[862px]">
          <div className="flex flex-row justify-center items-center"><ScoredDuck/>
          <h1 className="text-5xl ml-2 text-[#323232]">{activeMatch.blue.endgameDelivered}
          </h1>
          </div>
        <div className="flex flex-row justify-center items-center"><Depot/><h1 className="text-5xl ml-2 text-[#323232]">{activeMatch.blue.driverControlledStorageFreight}</h1></div>
        {activeMatch.blue.capped===1 ? <OneTse/> :<div/>}
        {activeMatch.blue.capped===2 ? <TwoTse/> :<div/>}
        </div>
        <div className="absolute w-[67.06px] h-[211.5px] ml-[1284px] mt-[850px]">
          {activeMatch.blue.endgameParked1==="IN_WAREHOUSE" ? <Parked/> : <div/>}
          {activeMatch.blue.endgameParked1==="COMPLETELY_IN_WAREHOUSE" ? <CompletelyParked/> : <div/>}
          {activeMatch.blue.endgameParked1==="NONE" ? <Depot/> : <div/>}
          {activeMatch.blue.endgameParked2==="IN_WAREHOUSE" ? <Parked/> : <div/>}
          {activeMatch.blue.endgameParked2==="COMPLETELY_IN_WAREHOUSE" ? <CompletelyParked/> : <div/>}
          {activeMatch.blue.endgameParked2==="NONE" ? <Depot/> : <div/>}
          {activeMatch.blue.allianceBalanced ? <Hub/> : <UnbalancedHub/>}
        </div>
        <div className="absolute w-[144px] h-[205px] mt-[852px] ml-[1353px] flex flex-col">
          <div className="flex flex-row rounded-md h-[65px] w-[144px] justify-center items-center my-1 bg-[#323232]">
            <h1 className="text-5xl italic text-white">L3: {activeMatch.blue.driverControlledFreight3}</h1>
          </div>
          <div className="flex flex-row rounded-md h-[65px] w-[144px] justify-center items-center my-1 bg-[#323232]">
            <h1 className="text-5xl italic text-white">L2: {activeMatch.blue.driverControlledFreight2}</h1>
          </div>
          <div className="flex flex-row rounded-md h-[65px] w-[144px] justify-center items-center my-1 bg-[#323232]">
            <h1 className="text-5xl italic text-white">L1: {activeMatch.blue.driverControlledFreight1}</h1>
          </div>
        </div>
        
        </div>
      }
      
    </div>
  );
}
