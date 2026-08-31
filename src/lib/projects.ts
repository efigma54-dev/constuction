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
    slug: "aakar-balaji-empire",
    name: "Balaji Empire",
    location: "Vikas Nagar, Dehu Road, Pune, Maharashtra",
    description:
      "A completed residential development by AAKAR DEVELOPERS, registered under Maharashtra RERA as P52100001661. Public project records identify 32 apartments across 1, 2 and 3 BHK configurations, with RERA registration in 2017 and a proposed completion date of 31 December 2018.",
    highlights: ["32 residential apartments", "1, 2 & 3 BHK configurations", "341–644 sq ft published sizes", "MahaRERA registered"],
    status: "completed",
    handover: "Completed · 31 December 2018",
    priceBand: "Historical public listings vary; current sale availability is not represented here.",
    rera: "P52100001661",
    heroImage: "/images/generated/Modern_residential_apartment_bui…_2K_202608151424.jpeg",
    galleryImages: [
      "/images/generated/Modern_residential_apartment_bui…_2K_202608151424.jpeg",
    ],
    proof: {
      existence: ["MahaRERA project record: P52100001661", "Project: BALAJI EMPIRE", "District: Pune · Taluka: Haveli"],
      delivery: ["RERA proposed completion: 31 December 2018", "Public property records list the project as completed / ready to move"],
      legitimacy: ["Promoter: AAKAR DEVELOPERS", "Promoter type: Partnership", "Registration date: 29 July 2017"],
      transparency: ["RERA registration number published", "Project configuration published in public records", "Land area recorded as 814.39 sq m"],
      people: ["RERA promoter members: Vijay Popatrao Shinde and Ratilal Onkar More", "Public RERA record lists appointed project professionals"],
    },
    floorPlan: {
      title: "Published unit configuration",
      image: null,
      units: [
        { id: "1bhk", label: "1 BHK · 31.70 sq m", facing: "Unknown", view: "Unknown", availability: "unknown", price: "Historical listing" },
        { id: "2bhk", label: "2 BHK · 45.93 sq m", facing: "Unknown", view: "Unknown", availability: "unknown", price: "Historical listing" },
        { id: "3bhk", label: "3 BHK · 59.83 sq m", facing: "Unknown", view: "Unknown", availability: "unknown", price: "Historical listing" },
      ],
    },
    milestones: [
      { stage: "RERA registration", promisedDate: "29 July 2017", actualDate: "29 July 2017", status: "done", photos: [], detail: "Public RERA records list the project registration date as 29 July 2017." },
      { stage: "Project completion", promisedDate: "31 December 2018", actualDate: "31 December 2018", status: "done", photos: [], detail: "The public RERA record lists the proposed completion date as 31 December 2018; property records subsequently list the project as completed." },
    ],
  },
  {
    slug: "balaji-square",
    name: "Balaji Square",
    location: "Ravet, Pimpri-Chinchwad, Pune, Maharashtra",
    description: "A completed AAKAR DEVELOPERS project identified in the promoter's publicly available past-experience record associated with Balaji Empire.",
    highlights: ["Completed project", "Ravet", "Promoter past-experience record"],
    status: "completed",
    handover: "Completed · date not independently verified",
    priceBand: "Not published",
    rera: "Not independently verified",
    heroImage: null,
    proof: { existence: ["Listed as promoter past experience in the Balaji Empire record"], delivery: ["Status recorded as completed"], legitimacy: ["Promoter: AAKAR DEVELOPERS"], transparency: ["Detailed project registration record not yet attached"], people: [] },
    floorPlan: { title: "Floor plan pending source record", image: null, units: [] },
    milestones: [],
  },
  {
    slug: "dangat-corner",
    name: "Dangat Corner",
    location: "Ravet, Pimpri-Chinchwad, Pune, Maharashtra",
    description: "A completed AAKAR DEVELOPERS project identified in the promoter's publicly available past-experience record associated with Balaji Empire.",
    highlights: ["Completed project", "Ravet", "Promoter past-experience record"],
    status: "completed",
    handover: "Completed · date not independently verified",
    priceBand: "Not published",
    rera: "Not independently verified",
    heroImage: null,
    proof: { existence: ["Listed as promoter past experience in the Balaji Empire record"], delivery: ["Status recorded as completed"], legitimacy: ["Promoter: AAKAR DEVELOPERS"], transparency: ["Detailed project registration record not yet attached"], people: [] },
    floorPlan: { title: "Floor plan pending source record", image: null, units: [] },
    milestones: [],
  },
  {
    slug: "balaji-residency",
    name: "Balaji Residency",
    location: "Kiwale, Pimpri-Chinchwad, Pune, Maharashtra",
    description: "A completed AAKAR DEVELOPERS project identified in the promoter's publicly available past-experience record associated with Balaji Empire.",
    highlights: ["Completed project", "Kiwale", "Promoter past-experience record"],
    status: "completed",
    handover: "Completed · date not independently verified",
    priceBand: "Not published",
    rera: "Not independently verified",
    heroImage: null,
    proof: { existence: ["Listed as promoter past experience in the Balaji Empire record"], delivery: ["Status recorded as completed"], legitimacy: ["Promoter: AAKAR DEVELOPERS"], transparency: ["Detailed project registration record not yet attached"], people: [] },
    floorPlan: { title: "Floor plan pending source record", image: null, units: [] },
    milestones: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
