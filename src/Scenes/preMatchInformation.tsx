import { FreightFrenzyMatchDetailed } from "../types/FreightFrenzyMatchDetailed";
import { Ranking } from "../types/Ranking";

const findTeamName = (rankingList: Ranking[], teamNumber: number) => {
  return rankingList[rankingList.findIndex((rank) => rank.team === teamNumber)]
    .teamName;
};

const findTeamRank = (rankingList: Ranking[], teamNumber: number) => {
  const rank =
    rankingList[rankingList.findIndex((rank) => rank.team === teamNumber)]
      .ranking;
  return rank > -1 ? rank : "NP";
};

export default function PreMatchInformation({
  rankingList,
  activeMatch,
}: {
  rankingList: Ranking[];
  activeMatch: FreightFrenzyMatchDetailed;
}) {
  console.log("rankingList", rankingList);
  console.log("activeMatch", activeMatch);
  return (
    <div className="w-[1920px] h-[1080px] bg-green-500">
      <div className=" flex flex-row z-10 absolute w-[1177px] h-[91px] ml-[371px] mt-[53px] bg-[#323232] rounded-[8px]  justify-center items-center">
        <h1 className="text-center text-white leading-[58.59px] text-[50px] italic">
          San Diego Regional Championship
        </h1>
      </div>
      {/* Matches */}
      <h1 className="absolute mt-[255px] ml-[41px] text-2xl text-black italic uppercase font-light">
        Qualification Match {activeMatch.matchBrief.matchNumber}
      </h1>
      {/* Red */}
      <div className=" flex flex-row absolute w-[660px] h-[57px] mt-[302px] ml-[41px] bg-[#CC4D4D] rounded-md items-center">
        <h1 className="text-right text-3xl mx-2 font-light italic text-white w-[80px]">
          {activeMatch.matchBrief.red.team1}
        </h1>
        <h1 className="text-3xl font-light italic mx-16 text-white uppercase  w-[380px]">
          {findTeamName(rankingList, activeMatch.matchBrief.red.team1)}
        </h1>
        <h1 className="text-3xl font-light italic text-white">
          {findTeamRank(rankingList, activeMatch.matchBrief.red.team1)}
        </h1>
      </div>
      <div className="flex flex-row  items-center absolute w-[660px] h-[57px] mt-[369px] ml-[41px] bg-[#CC4D4D] rounded-md">
        <h1 className="text-right text-3xl mx-2 font-light italic text-white w-[80px]">
          {activeMatch.matchBrief.red.team2}
        </h1>
        <h1 className="text-3xl font-light italic mx-16 text-white uppercase  w-[380px]">
          {findTeamName(rankingList, activeMatch.matchBrief.red.team2)}
        </h1>
        <h1 className="text-3xl font-light italic text-white ">
          {findTeamRank(rankingList, activeMatch.matchBrief.red.team2)}
        </h1>
      </div>
      {/* Blue */}
      <div className="flex flex-row  items-center absolute w-[660px] h-[57px] mt-[471px] ml-[41px] bg-[#4885bd] rounded-md">
        <h1 className="text-right text-3xl mx-2 font-light italic text-white w-[80px]">
          {activeMatch.matchBrief.blue.team1}
        </h1>
        <h1 className="text-3xl font-light italic mx-16 text-white uppercase w-[380px]">
          {findTeamName(rankingList, activeMatch.matchBrief.blue.team1)}
        </h1>
        <h1 className="text-3xl font-light italic text-white justify-self-end">
          {findTeamRank(rankingList, activeMatch.matchBrief.blue.team1)}
        </h1>
      </div>
      <div className="flex flex-row  items-center absolute w-[660px] h-[57px] mt-[538px] ml-[41px] bg-[#4885bd] rounded-md">
        <h1 className="text-right text-3xl mx-2 font-light italic text-white w-[80px]">
          {activeMatch.matchBrief.blue.team2}
        </h1>
        <h1 className="text-3xl font-light italic mx-16 text-white uppercase w-[380px]">
          {findTeamName(rankingList, activeMatch.matchBrief.blue.team2)}
        </h1>
        <h1 className="text-3xl font-light italic text-white justify-self-end">
          {findTeamRank(rankingList, activeMatch.matchBrief.blue.team2)}
        </h1>
      </div>
      <h1 className="absolute z-10 uppercase font-light text-2xl ml-[815px] mt-[208px] text-black italic">
        Francis Parker High School
      </h1>
      <div className="z-10 absolute w-[1011px] h-[569px] ml-[815px] mt-[255px] bg-black"></div>
      <h1 className="absolute z-10 uppercase font-light text-3xl ml-[1592px] mt-[836px] text-black italic w-60">
        March 26, 2022
      </h1>
      {/* <h1 className="absolute mt-[623px] ml-[156px] text-[200px] italic font-light">
        4:20
      </h1> */}
    </div>
  );
}
