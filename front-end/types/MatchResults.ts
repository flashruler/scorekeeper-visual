export interface MatchResults {
        red: {
          auto: number;
          dq2: boolean,
          dq1: boolean,
          penalty: number;
          end: number;
          teleop: number;
        },
        redScore: number;
        scheduledTime: number;
        blue: {
          auto: number;
          dq2: boolean,
          dq1: boolean,
          penalty: number;
          end: number;
          teleop: number;
        },
        randomization: number;
        matchBrief: {
          red: {
            team1: number;
            team2: number;
            isTeam1Surrogate: boolean;
            isTeam2Surrogate: boolean;
          },
          field: number;
          blue: {
            team1: number;
            team2: number;
            isTeam1Surrogate: boolean;
            isTeam2Surrogate: boolean;
          },
          matchName: string,
          matchState: string,
          finished: boolean,
          time: number;
          matchNumber: number;
        },
        startTime: number;
        blueScore: number;
        resultPostedTime: number;
}