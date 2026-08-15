export type Story = {
  slug: string;
  name: string;
  project: string;
  unit: string;
  headline: string;
  summary: string;
  proof: string[];
  /**
   * Optional photo for this buyer story.
   * Path convention: /images/stories/{slug}.jpg
   * Drop the file into public/images/stories/ and add the path here.
   * If null/undefined, the story renders an intentional unavailable state.
   */
  photo?: string | null;
};

export const stories: Story[] = [
  {
    slug: "mehta-family",
    name: "The Mehta Family",
    project: "Aakar Heights",
    unit: "B-402",
    headline: "Delivered three months early.",
    summary: "The Mehta family was concerned about delays, having experienced them before. We provided them with weekly updates, milestone tracking, and delivered possession three months ahead of the RERA timeline.",
    proof: ["Handover document", "Possession letter", "Final milestone photos"],
    photo: "/images/stories/story-mehta-delivery.jpg",
  },
  {
    slug: "sharma-family",
    name: "The Sharma Family",
    project: "Aakar Heights",
    unit: "A-105",
    headline: "Transparent pricing from day one.",
    summary: "When the Sharmas booked their home, they received a detailed cost sheet. There were no hidden charges at possession, and the final payment matched their initial agreement exactly.",
    proof: ["Cost sheet agreement", "Final payment receipt"],
    photo: "/images/stories/story-sharma-transparency.jpg",
  },
  {
    slug: "desai-family",
    name: "The Desai Family",
    project: "Aakar Heights",
    unit: "C-201",
    headline: "Material quality verified at every stage.",
    summary: "The Desais requested regular quality checks. We provided them with batch test reports for cement and steel used in their tower, ensuring they knew exactly what their home was built with.",
    proof: ["Material test reports", "Stage-wise QA sign-offs"],
    photo: "/images/stories/story-desai-quality.jpg",
  }
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
