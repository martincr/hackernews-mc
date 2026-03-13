import type { HNStory } from "@/types/hn";
import StoryItem from "./StoryItem";

interface Props {
  stories: HNStory[];
}

export default function StoryList({ stories }: Props) {
  return (
    <ol className="space-y-0">
      {stories.map((story, index) => (
        <StoryItem key={story.id} story={story} rank={index + 1} />
      ))}
    </ol>
  );
}
