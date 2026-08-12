export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-08-22"
  time?: string; // e.g. "3:00 PM – 6:00 PM"
  location: string;
  society?: "PES" | "CS" | "RAS" | "WIE" | "Branch";
  tags: string[];
  summary: string;
  description: string[]; // paragraphs
  cover?: string; // path under /public, e.g. "/events/pcb-workshop.jpg"
  gallery?: string[]; // additional asset paths
  registerUrl?: string;
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    slug: "hackforuhc-2026",
    title: "HackForUHC: Digital Innovation for openIMIS, HIB, and SSF",
    date: "2026-06-18",
    time: "9:00 AM onwards",
    location: "Dhulikhel Resort, Dhulikhel, Nepal",
    society: "Branch",
    tags: ["Hackathon", "Digital Health", "openIMIS", "Healthcare"],
    summary:
      "IEEE KU Student Branch supported HackForUHC 2026 as a Community Partner, bringing developers, engineers, and innovators together to build digital solutions for Nepal's health financing and Universal Health Coverage ecosystem.",
    description: [
      "HackForUHC 2026 brought together developers, engineers, data scientists, and health informatics innovators to build practical digital solutions for Nepal's health financing and Universal Health Coverage ecosystem.",
      "The hackathon focused on the open-source openIMIS platform and its integration with the Health Insurance Board (HIB) and Social Security Fund (SSF), addressing real-world challenges in financial reconciliation, provider and benefit management, and clinical compliance.",
      "Track 1: The SSF Expansion & Financial Loop — Build a reconciliation engine linking openIMIS claims with SOSYS payment logs to track successful, partial, and anomalous transfers.",
      "Track 2: The HIB Smart System Track — Create a dynamic registry mapping benefit packages to authorized providers to prevent invalid claims.",
      "Track 3: The Clinical Compliance & Standards Core — Validate ICD codes against billed drugs and procedures during claim entry, and check clinical sequences against national Standard Treatment Protocols to assess care legitimacy before claim submission.",
      "The event was organized by the Health Informatics Lab (HI Lab), supported by GIZ, with HIB and the Social Security Fund as technical collaborators, TinkerTechnology and Travelling Technology as technology partners, and IEEE KU Student Branch as the Community Partner.",
    ],
    cover: "/events/2026/openimis-health-innovation-hackathon/20260618_111626.jpg",
    gallery: [
      "/events/2026/openimis-health-innovation-hackathon/IMG-20260619-WA0022.jpg",
      "/events/2026/openimis-health-innovation-hackathon/20260619_184720.jpg",
    ],
    status: "past",
  },
  {
    slug: "exploring-the-horizon",
    title: "Explore the Horizon with Dr. Suyog Shrestha",
    date: "2026-06-23",
    time: "12:00 PM – 3:00 PM",
    location: "NTIC Multipurpose Hall, Kathmandu University",
    society: "Branch",
    tags: ["Guest Lecture", "Particle Physics", "CERN", "Research"],
    summary:
      "An inspiring guest lecture exploring CERN, particle physics, collider technology, and opportunities for Nepalese engineers to contribute to the next generation of global scientific experiments.",
    description: [
      "IEEE KU Student Branch hosted an interactive guest lecture, “Engineering the Universe: Why Nepal's Engineers Should Be Part of the Next Generation of CERN Experiments,” featuring Dr. Suyog Shrestha, Assistant Professor of Physics at Washington College and Research Scientist with the ATLAS Collaboration at CERN.",
      "The session explored CERN's Large Hadron Collider, the mysteries beyond the Standard Model, the engineering behind collider technology, and the role of advanced computing and research in modern particle physics.",
      "The talk also highlighted Nepal's growing engagement with CERN and emerging opportunities for Nepalese engineers, students, and researchers to contribute to global scientific collaborations.",
      "The session brought together participants from diverse academic disciplines, including Mathematics, Applied Physics, Computer Science and Engineering, and Electrical Engineering, and concluded with an engaging Q&A session where Dr. Shrestha addressed students' questions and curiosities.",
      "As part of the program, participants also visited Kathmandu University's High Performance Computing (HPC) Room, providing an opportunity to explore the university's computational infrastructure and its role in research and scientific computing.",
      "IEEE KU Student Branch was also honored by the presence of Prof. Dr. Bal Krishna Bal, Associate Dean of the School of Engineering, Kathmandu University, whose encouraging opening remarks emphasized the importance of building stronger connections with global scientific experiments and research communities.",
    ],
    cover: "/events/2026/explore-the-horizon/group-photo.jpg",
    gallery: [
      "/events/2026/explore-the-horizon/20260623_142156.jpg",
      "/events/2026/explore-the-horizon/20260623_142208.jpg",
      "/events/2026/explore-the-horizon/PXL_20260623_083212674.jpg",
      "/events/2026/explore-the-horizon/PXL_20260623_083219536.jpg",
    ],
    status: "past",
  },
];

export function getUpcomingEvents(limit?: number) {
  const upcoming = events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}

export function getPastEvents() {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
