import Link from "next/link";
import MediaCover from "./MediaCover";
import { Post, formatPostDate } from "@/lib/data/blog";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-surface transition-colors hover:bg-surface/80"
    >
      <MediaCover
        src={post.cover}
        alt={post.title}
        label={post.title}
        kicker="Blog"
        className="aspect-[16/9] w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-label uppercase text-secondary">
          {formatPostDate(post.date)} · {post.author}
        </span>
        <h3 className="mt-3 text-[1.05rem] font-medium text-primary transition-colors group-hover:text-tertiary">
          {post.title}
        </h3>
        <p className="mt-2 text-body text-secondary">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-secondary/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.02em] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
