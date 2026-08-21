type CompanyIdentifiers = {
  rera: string;
  cin: string;
  gstin: string;
};

export const company: {
  name: string;
  city: string;
  state: string;
  foundedYear: number | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  registeredOffice: string | null;
  identifiers: CompanyIdentifiers;
} = {
  name: "Aakar Developers",
  city: "Pune",
  state: "Maharashtra",
  foundedYear: null,
  phone: null,
  whatsapp: null,
  email: null,
  registeredOffice: null,
  identifiers: {
    rera: "Verification pending",
    cin: "Verification pending",
    gstin: "Verification pending",
  },
};

export const verificationPending = "Verification pending";
