import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getPostsSorted } from "@/lib/data/blog";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getPostsSorted();

  return (
    <main>
      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 md:px-10 md:pb-14 md:pt-20">
          <p className="font-mono text-label uppercase text-tertiary"># Blog</p>
          <h1 className="mt-3 text-display-sm text-primary">
            Write-ups from the branch.
          </h1>
          <p className="mt-4 max-w-lg text-body text-secondary">
            Recaps, project notes, and the occasional opinion — written by
            whoever ran the thing.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
