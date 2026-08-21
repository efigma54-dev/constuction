export type TeamMember = {
  slug: string;
  role: string;
  name: string;
  bio: string;
  photo?: string | null;
};

/**
 * Team profiles stay empty until names, roles, biographies, and photographs
 * have been approved for publication and supported by source records.
 */
export const team: TeamMember[] = [];
