import type { HNStory } from "@/types/hn";

interface Props {
  story: HNStory;
  rank: number;
}

function extractDomain(url?: string): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function timeAgo(unixSeconds: number): string {
  const diff = Math.floor(Date.now() / 1000) - unixSeconds;
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
}

export default function StoryItem({ story, rank }: Props) {
  const domain = extractDomain(story.url);
  const storyUrl = story.url ?? `https://news.ycombinator.com/item?id=${story.id}`;
  const commentsUrl = `https://news.ycombinator.com/item?id=${story.id}`;

  return (
    <li className="flex gap-2 py-1 leading-snug">
      <span className="text-[#828282] w-6 text-right shrink-0 pt-0.5">{rank}.</span>
      <div>
        <p>
          <a
            href={storyUrl}
            className="text-black hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {story.title}
          </a>
          {domain && (
            <span className="text-[#828282] text-xs ml-2">({domain})</span>
          )}
        </p>
        <p className="text-[#828282] text-xs mt-0.5">
          {story.score} points by{" "}
          <a
            href={`https://news.ycombinator.com/user?id=${story.by}`}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {story.by}
          </a>{" "}
          {timeAgo(story.time)}{" "}|{" "}
          <a href={commentsUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
            {story.descendants ?? 0} comments
          </a>
        </p>
      </div>
    </li>
  );
}
