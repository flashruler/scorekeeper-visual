import { MatchDetailed } from "../types/MatchDetailed";

export default function MatchResults({
  activeMatchResults,
}: {
  activeMatchResults: MatchDetailed;
}) {
  console.log("activeMatchResults", activeMatchResults);
  return <h1>Match Results </h1>;
}
