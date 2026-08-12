export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  cover?: string; // path under /public
  content: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "meet-the-2026-committee",
    title: "Meet the 2026 committee",
    date: "2026-02-20",
    author: "Rajat Dahal",
    tags: ["Announcement"],
    excerpt:
      "Introducing the branch's leadership and society coordinators for the year ahead.",
    cover: "/other-assets/KUieeeStudentBranchRect.png",
    content: [
      "This year's committee brings together members from electrical, electronics, and computer engineering, spanning all four of the branch's active societies and affinity groups.",
      "Full bios and department breakdowns are on the People page — reach out to any coordinator directly if you want to get involved with their group.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsSorted() {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
