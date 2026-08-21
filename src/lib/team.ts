export type TeamMember = {
  /** Unique slug used in the photo path: /images/team/{slug}.jpg */
  slug: string;
  role: string;
  name: string;
  bio: string;
  /**
   * Optional portrait photo path.
   * Path convention: /images/team/{slug}.jpg
   * Drop the file into public/images/team/ and set the path here.
   * If null/undefined, the profile renders an intentional unavailable state.
   */
  photo?: string | null;
};

/**
 * Core team members displayed on the About page.
 */
export const team: TeamMember[] = [
  {
    slug: "rajesh-aakar",
    role: "Founder & Managing Director",
    name: "Rajesh Aakar",
    bio: "Rajesh founded Aakar in 2013 and continues to steer land acquisition, project vision, and the firm's transparency-first operating philosophy.",
    photo: "/images/team/rajesh-aakar.jpg",
  },
  {
    slug: "ravi-kulkarni",
    role: "Head of Construction",
    name: "Ravi Kulkarni",
    bio: "Ravi leads site execution across all Aakar projects. A structural engineer by training, he ensures quality standards are maintained from excavation to handover.",
    photo: "/images/team/ravi-kulkarni.jpg",
  },
  {
    slug: "suhas-patil",
    role: "Lead Architect",
    name: "Suhas Patil",
    bio: "Suhas is responsible for the design and spatial planning of Aakar homes, focusing on natural light, ventilation, and practical family living spaces.",
    photo: "/images/team/suhas-patil.jpg",
  }
];
