export type Document = {
  id: string;
  title: string;
  note: string;
  path?: string | null;
  previewImage?: string | null;
};

/**
 * Document slots are intentionally unpublished until the underlying files
 * are supplied and approved for public release. Preview artwork is not used
 * because it could be mistaken for a scan of a real company document.
 */
export const documents: Document[] = [
  {
    id: "rera-certificate",
    title: "RERA certificate",
    note: "Not published yet. The verified Balaji Empire registration reference is shown on the project record.",
    path: null,
    previewImage: null,
  },
  {
    id: "project-approvals",
    title: "Project approvals",
    note: "Not published yet. Supporting approval records require source-file verification before release.",
    path: null,
    previewImage: null,
  },
  {
    id: "quality-certifications",
    title: "Quality certifications",
    note: "Not published yet. No certification document is currently available for public verification.",
    path: null,
    previewImage: null,
  },
  {
    id: "floor-plans",
    title: "Typical floor plans",
    note: "Not published yet. Project-specific floor plans require an approved source file.",
    path: null,
    previewImage: null,
  },
  {
    id: "cost-sheets",
    title: "Cost sheets",
    note: "Not published yet. Pricing documents require an approved source file and current project context.",
    path: null,
    previewImage: null,
  },
  {
    id: "legal-documents",
    title: "Legal documents",
    note: "Not published yet. Legal documents require an approved source file before publication.",
    path: null,
    previewImage: null,
  },
];
