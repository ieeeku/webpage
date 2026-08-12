export type Member = {
  name: string;
  position: string;
  department: string;
  avatar?: string; // path under /public
  email?: string;
  tel?: string;
  tier: 0 | 1 | 2 | 3 | 4;
};

// Tier 0 — Advisors
// Tier 1 — Branch leadership
// Tier 2 — Executive committee
// Tier 3 — Society coordinators / leads
// Tier 4 — General committee members
export const members: Member[] = [
  {
    name: "Prof. Dr. Rabindra Bista",
    position: "Branch Counselor",
    department: "Department of Computer Science and Engineering",
    avatar: "/teams/advisors/prof-rabindra-bista.png",
    email: "#",
    tier: 0,
  },
  {
    name: "A. Prof. Dr. Rajani Chulyadyo",
    position: "Advisor",
    department: "Department of Computer Science and Engineering",
    avatar: "/teams/advisors/a-prof-rajani-chulyadyo.png",
    email: "#",
    tier: 0,
  },
  {
    name: "Prof. Dr. Ram Kaji Budhathoki",
    position: "Advisor",
    department: "Department of Electrical and Electronics Engineering",
    avatar: "/teams/advisors/prof-ram-kaji-budhathoki.png",
    email: "#",
    tier: 0,
  },
  {
    name: "James Bhattarai",
    position: "Chair",
    department: "Department of Computer Science and Engineering",
    avatar: "/teams/board/james_bhattarai_chair.jpg",
    email: "jb03229422@student.ku.edu.np",
    tel: "+977-9806677998",
    tier: 1,
  },
  {
    name: "Sanjay Pahari",
    position: "Co-Chair (Acting Chair)",
    department: "Department of Computer Science and Engineering",
    avatar: "/teams/board/sanjay_pahari_co_chair.jpg",
    email: "paharisanjay@gmail.com",
    tel: "+977-9806677998",
    tier: 1,
  },
  {
    name: "Purnima Acharya",
    position: "Secretary",
    department: "Department of Electrical and Electronics Engineering",
    avatar: "/teams/board/purnima_acharya_secretary.jpg",
    email: "#",
    tier: 1,
  },
  {
    name: "Rajat Dahal",
    position: "Webmaster",
    department: "Department of Computer Science and Engineering",
    email: "contact@rajatdahal.com.np",
    avatar: "/teams/board/rajat_dahal_meow.png",
    tier: 1,
  },
  {
    name: "Aayushman Bajracharya",
    position: "Design & Marketing Lead",
    email:"aayushmanbajracharya5@gmail.com",
    department: "Department of Computer Science and Engineering",
    avatar: "/teams/executive/aayushman_bajracharya_design_and_marketing_lead.jpg",
    tier: 2,
  },
  {
    name: "Rupak Chaulagain",
    position: "Associate Design & Marketing Lead",
    department: "Department of Computer Science and Engineering",
    email: "rupakchaulagainexists@gmail.com",
    avatar: "/teams/executive/rupak_chaulagain_associate_design_and_marketing_lead.jpg",
    tier: 2,
  },
  {
    name: "Kridip Pandey",
    position: "Program Coordinator",
    email:"kridip06@gmail.com",
    department: "Department of Electrical and Electronics Engineering",
    avatar: "/teams/executive/kridip_pandey_program_coordinator.jpg",
    tier: 2,
  },
];

export const tierLabels: Record<
  Member["tier"],
  { label: string; kicker: string }
> = {
  0: { label: "Advisor", kicker: "# 00 — Branch Advisor" },
  1: { label: "Board Members", kicker: "# 01 — Branch Leadership" },
  2: { label: "Executive committee", kicker: "# 02 — Leads & Coordinators" },
  3: { label: "Society coordinators", kicker: "# 03 — Leads & coordinators" },
  4: { label: "Committee members", kicker: "# 04 — General committee" },
};

export function membersByTier(tier: Member["tier"]) {
  return members.filter((m) => m.tier === tier);
}
