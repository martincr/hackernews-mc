export interface HNStory {
  id: number;
  title: string;
  url?: string;
  by: string;
  score: number;
  time: number;
  descendants: number;
  type: "story" | "job" | "poll";
  kids?: number[];
  text?: string;
}
