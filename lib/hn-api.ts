import type { HNStory } from "@/types/hn";

const BASE = "https://hacker-news.firebaseio.com/v0";

export async function getTopStoryIds(limit = 30): Promise<number[]> {
  const res = await fetch(`${BASE}/topstories.json`, {
    next: { revalidate: 60 },
  });
  const ids: number[] = await res.json();
  return ids.slice(0, limit);
}

export async function getStory(id: number): Promise<HNStory> {
  const res = await fetch(`${BASE}/item/${id}.json`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
