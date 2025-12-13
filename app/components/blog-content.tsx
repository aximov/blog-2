"use client";

import Link from "next/link";
import { formatDate } from "app/blog/format";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

type BlogPost = {
    slug: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        image?: string;
    };
};

export function BlogContent({ posts }: { posts: BlogPost[] }) {
    // Sort posts by date
    const sortedPosts = posts.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        return 1;
    });

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="col-span-full"
        >
            <motion.div variants={item} className="mb-24 md:mb-32">
                <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-6">
                    INSIGHTS<br />& THOUGHTS
                </h1>
                <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
                    <div className="col-span-4 md:col-span-6">
                        <p className="text-xl md:text-2xl font-bold leading-tight">
                            Technical deep dives, architectural decisions, and reflections on software engineering.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col">
                {sortedPosts.map((post) => (
                    <Link
                        key={post.slug}
                        className="group block hard-border-b py-8 md:py-12 hover:bg-fg-primary hover:text-bg-primary transition-colors"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6 items-baseline">
                            <div className="col-span-4 md:col-span-2">
                                <span className="font-mono text-sm uppercase md:text-base opacity-70 group-hover:text-bg-secondary group-hover:opacity-100">
                                    {formatDate(post.metadata.publishedAt)}
                                </span>
                            </div>

                            <div className="col-span-4 md:col-span-7">
                                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                    {post.metadata.title}
                                </h2>
                                <p className="text-secondary text-lg leading-relaxed max-w-2xl group-hover:text-bg-secondary">
                                    {post.metadata.summary}
                                </p>
                            </div>

                            <div className="col-span-4 md:col-span-3 flex justify-end">
                                <span className="font-mono text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    Read Article -&gt;
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </motion.section>
    );
}
