export type MediaSourceType =
  | "supplied"
  | "verified"
  | "architectural-visualization"
  | "editorial"
  | "unavailable";

export type MediaItem = {
  src: string | null;
  alt: string;
  title: string;
  category: "hero" | "gallery" | "construction" | "people" | "story" | "document";
  projectId?: string;
  verified: boolean;
  sourceType: MediaSourceType;
};

export const media: MediaItem[] = [
  {
    src: "/images/real/aakar-heights-reference.jpg",
    alt: "Architectural reference image for Aakar Heights",
    title: "Aakar Heights architectural reference",
    category: "hero",
    projectId: "aakar-heights-baner",
    verified: false,
    sourceType: "architectural-visualization",
  },
  {
    src: "/images/real/construction-reference.jpg",
    alt: "Editorial construction reference image",
    title: "Construction reference",
    category: "construction",
    verified: false,
    sourceType: "editorial",
  },
];

export function getProjectMedia(projectId: string) {
  return media.filter((item) => item.projectId === projectId);
}
