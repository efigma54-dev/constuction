export type Document = {
  id: string;
  title: string;
  note: string;
  path?: string | null;
  previewImage?: string | null;
};

export const documents: Document[] = [
  {
    id: "rera-certificate",
    title: "RERA certificate",
    note: "Certificate of registration for all active projects.",
    path: null,
    previewImage: "/docs-preview/doc-rera-certificate.jpg",
  },
  {
    id: "project-approvals",
    title: "Project approvals",
    note: "Commencement certificate, NA permission, building plan sanction.",
    path: null,
    previewImage: "/docs-preview/doc-project-approvals.jpg",
  },
  {
    id: "quality-certifications",
    title: "Quality certifications",
    note: "ISO certification and relevant safety or process credentials.",
    path: null,
    previewImage: "/docs-preview/doc-quality-certifications.jpg",
  },
  {
    id: "floor-plans",
    title: "Typical floor plans",
    note: "Floor plans per unit configuration, per project.",
    path: null,
    previewImage: "/docs-preview/doc-floor-plans.jpg",
  },
  {
    id: "cost-sheets",
    title: "Cost sheets",
    note: "Full pricing breakdown and cost logic per project and unit type.",
    path: null,
    previewImage: "/docs-preview/doc-cost-sheets.jpg",
  },
  {
    id: "legal-documents",
    title: "Legal documents",
    note: "Draft agreement for sale, schedules, and disclosure statements.",
    path: null,
    previewImage: "/docs-preview/doc-legal-documents.jpg",
  },
];
