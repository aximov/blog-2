"use client";

import { formatDate } from "app/blog/format";
import { BlogPost } from "app/blog/types";
import Link from "next/link";

type BlogPostsProps = {
  posts: BlogPost[];
};

export function BlogPosts({ posts }: BlogPostsProps) {
  let allBlogs = [...posts];

  return (
    <div className="flex flex-col">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          const safeSlug = encodeURIComponent(post.slug);
          return (
            <Link
              key={safeSlug}
              className="group block hard-border-b py-6 hover:bg-fg-primary hover:text-bg-primary transition-colors"
              href={`/blog/${safeSlug}`}
            >
              <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
                <div className="col-span-4 md:col-span-3">
                  <p className="font-mono text-xs uppercase text-secondary group-hover:text-bg-secondary tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-9 flex justify-between items-baseline">
                  <p className="text-xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {post.metadata.title}
                  </p>
                  <span className="font-mono text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ml-4">
                    Read -&gt;
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
