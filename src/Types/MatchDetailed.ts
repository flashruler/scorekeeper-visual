import { MatchBrief } from "./MatchBrief"

interface AllianceScoring {
  auto: number,
  dq2: boolean,
  dq1: boolean,
  robot1: number,
  penalty: number,
  end: number,
  robot2: number,
  teleop: number,
}

export interface MatchDetailed {
  red: AllianceScoring
  redScore: number,
  scheduledTime: number,
  blue: AllianceScoring,
  randomization: number,
  matchBrief: MatchBrief,
  startTime: number,
  blueScore: number
  resultPostedTime: number,
}