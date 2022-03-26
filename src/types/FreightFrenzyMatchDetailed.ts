import { MatchBrief } from "./MatchBrief"

enum EndGamePark {
  NONE, IN_WAREHOUSE, COMPLETELY_IN_WAREHOUSE
}

enum BarcodeElement {
  DUCK, TEAM_SHIPPING_ELEMENT
}

enum AutoNavigated {
  NONE, IN_STORAGE, COMPLETELY_IN_STORAGE, IN_WAREHOUSE, COMPLETELY_IN_WAREHOUSE
}

interface AllianceDetailedScoring {
  driverControlledStoragePoints: number,
  allianceBalancedPoints: number,
  minorPenalties: number,
  capped: number,
  endgameParked2: string
  endgameParkingPoints: number,
  sharedFreight: number,
  carousel: boolean
  endgameParked1: string
  driverControlledFreight1: number,
  driverControlledFreight2: number,
  driverControlledFreight3: number,
  autoFreightPoints: number,
  barcodeElement1: string,
  barcodeElement2: string,
  allianceBalanced: boolean,
  sharedUnbalanced: boolean,
  sharedUnbalancedPoints: number,
  autoBonus2: boolean,
  carouselPoints: number,
  autoNavigated2: string,
  autoNavigated1: string,
  autoBonus1: boolean,
  driverControlledAllianceHubPoints: number,
  autoFreight2: number,
  autoStorageFreight: number,
  autoFreight3: number,
  endgameDeliveryPoints: number,
  autoFreight1: number,
  endgameDelivered: number,
  driverControlledStorageFreight: number,
  autoBonusPoints: number,
  cappingPoints: number,
  totalPoints: number,
  driverControlledSharedHubPoints: number,
  majorPenalties: number,
  autoNavigationPoints: number,
}

export interface FreightFrenzyMatchDetailed {
  red: AllianceDetailedScoring
  redScore: number,
  scheduledTime: number,
  blue: AllianceDetailedScoring,
  randomization: number,
  matchBrief: MatchBrief,
  startTime: number,
  blueScore: number
  resultPostedTime: number,
}