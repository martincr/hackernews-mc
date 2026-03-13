import { getTopStoryIds, getStory } from "@/lib/hn-api";
import StoryList from "@/components/StoryList";

export const revalidate = 60;

export default async function HomePage() {
  const ids = await getTopStoryIds(30);
  const stories = await Promise.all(ids.map(getStory));

  return (
    <main className="px-2 py-3">
      <StoryList stories={stories} />
    </main>
  );
}
