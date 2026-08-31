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
  sourceUrl?: string;
  sourceLabel?: string;
};

const localArchitecturalVisual =
  "/images/generated/Modern_residential_apartment_bui…_2K_202608151424.jpeg";

export const media: MediaItem[] = [
  {
    src: localArchitecturalVisual,
    alt: "Architectural visualization of a contemporary residential apartment building",
    title: "Balaji Empire · architectural reference visual",
    category: "hero",
    projectId: "aakar-balaji-empire",
    verified: false,
    sourceType: "architectural-visualization",
    sourceLabel: "Architectural visualization · not project evidence",
  },
  {
    src: localArchitecturalVisual,
    alt: "Architectural visualization used for residential project context",
    title: "Residential architectural reference",
    category: "gallery",
    projectId: "aakar-balaji-empire",
    verified: false,
    sourceType: "architectural-visualization",
    sourceLabel: "Architectural visualization · not project evidence",
  },
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
