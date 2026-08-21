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

const balajiEmpirePhoto =
  "https://is1-3.housingcdn.com/4f2250e8/529671ac2127f19f26f860e2f281bfb5/v0/fs/aakar_balaji_empire-vikas_nagar_2-pune-aakar_developers.jpeg";

export const media: MediaItem[] = [
  {
    src: balajiEmpirePhoto,
    alt: "Balaji Empire residential building in Vikas Nagar, Pune, with the project name displayed on the facade",
    title: "Balaji Empire · exterior photograph",
    category: "hero",
    projectId: "aakar-balaji-empire",
    verified: true,
    sourceType: "verified",
    sourceUrl: "https://housing.com/in/buy/projects/page/117415-aakar-balaji-empire-by-aakar-developers-in-vikas-nagar",
    sourceLabel: "Housing.com project gallery",
  },
  {
    src: balajiEmpirePhoto,
    alt: "Published exterior photograph of Balaji Empire in Vikas Nagar, Pune",
    title: "Balaji Empire · published project image",
    category: "gallery",
    projectId: "aakar-balaji-empire",
    verified: true,
    sourceType: "verified",
    sourceUrl: "https://housing.com/in/buy/projects/page/117415-aakar-balaji-empire-by-aakar-developers-in-vikas-nagar",
    sourceLabel: "Housing.com project gallery",
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
