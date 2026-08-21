export type CompanyIdentifiers = {
  gstin: string;
  rera: string;
  cin: string | null;
};

export const company = {
  name: "Aakar Developers",
  legalName: "AAKAR DEVELOPERS",
  entityType: "Partnership",
  city: "Pune",
  state: "Maharashtra",
  establishedYear: 2010,
  gstRegistrationDate: "01 July 2017",
  principalPlaceOfBusiness: "Flat No. 9, Fourth Floor, Paud Road, Kothrud, Pune, Maharashtra 411038",
  publicPortfolioCount: 11,
  identifiers: {
    gstin: "27AAPFA6311D1ZP",
    rera: "P52100001661",
    cin: null,
  } satisfies CompanyIdentifiers,
  phone: null,
  whatsapp: null,
  email: null,
} as const;

export const verificationPending = "Verification pending";

export const companySources = [
  {
    label: "GST registration record",
    detail: "GSTIN 27AAPFA6311D1ZP · regular partnership · Pune · registered 01 July 2017",
    href: "https://www.knowyourgst.com/gst-number-search/aakar-developers-27AAPFA6311D1ZP/",
  },
  {
    label: "MahaRERA project record",
    detail: "Balaji Empire · RERA P52100001661 · promoter AAKAR DEVELOPERS",
    href: "https://www.maharera.maharashtra.gov.in/",
  },
  {
    label: "Public project profile",
    detail: "Aakar Developers · Pune · publicly listed portfolio and establishment information",
    href: "https://housing.com/buy-projects-by-aakar-developers-bid-334593-Abmto0thuwr1fdlsqveu851iat",
  },
] as const;
