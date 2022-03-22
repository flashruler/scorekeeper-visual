enum UpdateType {
  MATCH_LOAD = "MATCH_LOAD", MATCH_START = "MATCH_START", MATCH_ABORT = "MATCH_ABORT", MATCH_COMMIT = "MATCH_COMMIT", MATCH_POST = "MATCH_POST"
}

export interface UpdateMessage {
  payload: {
    number: number,
    field: number,
    shortName: string,
  }
  updateTime: number,
  updateType: UpdateType
}