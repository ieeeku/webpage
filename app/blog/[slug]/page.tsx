import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaCover from "@/components/MediaCover";
import { posts, getPostBySlug, formatPostDate } from "@/lib/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  return { title: post ? post.title : "Blog" };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main>
      <div className="mx-auto max-w-3xl px-6 pt-10 md:px-10">
        <Link
          href="/blog"
          className="font-mono text-label uppercase text-secondary transition-colors hover:text-tertiary"
        >
          ← All posts
        </Link>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-8 md:px-10">
        <MediaCover
          src={post.cover}
          alt={post.title}
          label={post.title}
          kicker="Blog"
          className="aspect-[16/9] w-full rounded-lg"
        />

        <p className="mt-8 font-mono text-label uppercase text-secondary">
          {formatPostDate(post.date)} · {post.author}
        </p>
        <h1 className="mt-3 text-display-sm text-primary">{post.title}</h1>

        <div className="mt-8 space-y-4">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-body text-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-secondary/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.02em] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}
