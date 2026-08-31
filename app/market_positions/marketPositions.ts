export type MarketPosition = {
  top: string;
  left: string;
};

export type MarketKey =
  | "North America"
  | "South America"
  | "Europe"
  | "Middle East & North Africa"
  | "Africa"
  | "Asia"
  | "Australia";

export const marketPositions: Record<MarketKey, MarketPosition> = {
  "North America": {
    top: "32%",
    left: "12%",
  },
  "South America": {
    top: "70%",
    left: "23%",
  },
  Europe: {
    top: "30%",
    left: "49%",
  },
  "Middle East & North Africa": {
    top: "44%",
    left: "60%",
  },
  Africa: {
    top: "64%",
    left: "54%",
  },
  Asia: {
    top: "38%",
    left: "74%",
  },
  Australia: {
    top: "72%",
    left: "87%",
  },
};