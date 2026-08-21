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
  heroImage: string | null;            // Optional actual image path, e.g. "/images/projects/aakar-heights-baner/hero.jpg"
  galleryImages?: string[];            // Optional gallery image paths
  proof: {
    existence: string[];
    delivery: string[];
    legitimacy: string[];
    transparency: string[];
    people: string[];
  };
  floorPlan: {
    title: string;
    image: string | null;              // Optional actual floor plan image path, e.g. "/images/projects/aakar-heights-baner/floor-plan.jpg"
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
    photos: string[];                  // Optional list of actual milestone photos, e.g. ["/images/progress/aakar-heights-baner/foundation-1.jpg"]
    detail: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: "aakar-heights-baner",
    name: "Aakar Heights",
    location: "Baner, Pune",
    description: "A premium residential project in Pune presented through a clear project record. Approved documents and dated construction updates will be added as they are verified.",
    highlights: ["Premium 2 & 3 BHK", "Under construction", "MahaRERA Registered"],
    status: "under_construction",
    handover: "Q4 2024",
    priceBand: "₹85 L - 1.2 Cr",
    rera: "P52100000001",
    heroImage: "/images/real/aakar-heights-reference.jpg",
    proof: {
      existence: ["Commencement Certificate", "Excavation Photos"],
      delivery: [],
      legitimacy: ["RERA Certificate", "Building Plan Approval"],
      transparency: ["Cost Sheet", "Draft Agreement"],
      people: ["Architect: Horizon Design", "Structural Engineer: Apex Struct"],
    },
    floorPlan: {
      title: "Typical floor plan — 2BHK",
      image: null,
      units: [
        { id: "A-101", label: "A-101", facing: "East", view: "Garden", availability: "available", price: "₹85 L" },
        { id: "A-102", label: "A-102", facing: "West", view: "City", availability: "sold", price: "₹85 L" }
      ],
    },
    milestones: [
      {
        stage: "Foundation",
        promisedDate: "Jan 2023",
        actualDate: "Feb 2023",
        status: "done",
        photos: ["/images/real/foundation-reference.jpg"],
        detail: "Foundation work completed."
      },
      {
        stage: "Plinth",
        promisedDate: "Apr 2023",
        actualDate: "May 2023",
        status: "done",
        photos: ["/images/real/construction-reference.jpg"],
        detail: "Plinth level reached."
      },
      {
        stage: "1st Floor Slab",
        promisedDate: "Jul 2023",
        actualDate: "Pending",
        status: "in_progress",
        photos: ["/images/real/finishing-reference.jpg"],
        detail: "Formwork for 1st floor slab in progress."
      }
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
