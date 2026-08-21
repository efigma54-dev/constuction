export type Story = {
  slug: string;
  name: string;
  project: string;
  unit: string;
  headline: string;
  summary: string;
  proof: string[];
  photo?: string | null;
};

// Client stories are intentionally withheld until client approval and supporting evidence are available.
export const stories: Story[] = [];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
