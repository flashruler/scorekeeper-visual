import { QualsAlliance } from "./QualsAlliance";

export interface MatchBrief {
  red: QualsAlliance,
  field: number,
  blue: QualsAlliance,
  matchName: string,
  matchState: string,
  finished: boolean,
  time: number,
  matchNumber: number,
}