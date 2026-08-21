export type ProjectStatus = "under_construction" | "completed" | "upcoming";

export type ProjectUnit = {
  id: string;
  label: string;
  facing: string;
  view: string;
  availability: "available" | "reserved" | "sold" | "unknown";
  price: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  handover: string;
  priceBand: string;
  rera: string;
  heroImage: string | null;
  galleryImages?: string[];
  proof: {
    existence: string[];
    delivery: string[];
    legitimacy: string[];
    transparency: string[];
    people: string[];
  };
  floorPlan: {
    title: string;
    image: string | null;
    units: ProjectUnit[];
  };
  floorPlans?: Array<{
    id: string;
    title: string;
    image: string | null;
    units: ProjectUnit[];
  }>;
  milestones: Array<{
    stage: string;
    promisedDate: string;
    actualDate: string;
    status: "planned" | "in_progress" | "done" | "delayed";
    photos: string[];
    detail: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: "aakar-heights-baner",
    name: "Aakar Heights",
    location: "Baner, Pune",
    description:
      "A premium residential project in Pune presented through a clear project record. Approved documents and dated construction updates will be added as they are verified.",
    highlights: ["Premium 2 & 3 BHK", "Under construction", "Registration verification pending"],
    status: "under_construction",
    handover: "Verification pending",
    priceBand: "Verification pending",
    rera: "Verification pending",
    heroImage: "/images/real/aakar-heights-reference.jpg",
    proof: {
      existence: ["Verification pending"],
      delivery: [],
      legitimacy: ["RERA certificate — verification pending", "Building plan approval — verification pending"],
      transparency: ["Cost sheet — verification pending", "Draft agreement — verification pending"],
      people: ["Professional team records — verification pending"],
    },
    floorPlan: {
      title: "Typical floor plan — verification pending",
      image: null,
      units: [],
    },
    milestones: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
