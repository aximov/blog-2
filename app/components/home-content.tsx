"use client";

import { BlogPosts } from "app/components/posts";
import { BlogPost } from "app/blog/types";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  },
};

type HomeContentProps = {
  posts: BlogPost[];
};

export function HomeContent({ posts }: HomeContentProps) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full col-span-full"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="mb-24 md:mb-32">
        <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase break-all">
          NAKAYAMA
          <br />
          DAICHI
        </h1>
        <div className="mt-8 grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-5 md:col-start-8">
            <p className="text-lg md:text-xl leading-tight font-medium text-secondary">
              Senior Software Engineer building mission-critical architecture.
              Specialized in backend systems, cloud infrastructure, and security.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Current Status - Grid Layout */}
      <motion.div variants={item} className="mb-24 hard-border-b pb-12">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-y-8 md:gap-x-6">
          <div className="col-span-4 md:col-span-3">
            <span className="font-mono text-sm uppercase text-accent mb-2 block">
              Current Role
            </span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-xl">Legalscape</span>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3">
            <span className="font-mono text-sm uppercase text-accent mb-2 block">
              Status
            </span>
            <span className="font-bold text-xl text-secondary">
              Open to Opportunities
            </span>
          </div>

          <div className="col-span-4 md:col-span-6 flex flex-col md:flex-row gap-4 md:justify-end">
            <Link
              href="/cv"
              className="px-8 py-4 bg-primary text-secondary hard-border font-bold hover:bg-secondary hover:text-primary transition-colors text-center uppercase"
            >
              View CV
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-white font-bold hover:bg-black transition-colors text-center uppercase"
            >
              Connect
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Core Expertise */}
      <motion.div variants={item} className="mb-32">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-8">
          <div className="col-span-4 md:col-span-3">
            <h2 className="text-4xl font-bold uppercase tracking-tighter">
              Expertise
            </h2>
          </div>

          <div className="col-span-4 md:col-span-4 md:col-start-5">
            <h3 className="font-mono text-sm uppercase text-accent mb-4">
              Backend & Arch
            </h3>
            <p className="text-xl font-bold mb-4">Scalable Systems</p>
            <p className="text-secondary leading-relaxed mb-6">
              Designing services that handle complexity with grace. TypeScript,
              Python, Node.js, and MySQL.
            </p>
          </div>

          <div className="col-span-4 md:col-span-4">
            <h3 className="font-mono text-sm uppercase text-accent mb-4">
              Infrastructure
            </h3>
            <p className="text-xl font-bold mb-4">Cloud Native</p>
            <p className="text-secondary leading-relaxed mb-6">
              Secure, compliant infrastructure on Google Cloud. Containers,
              Security, and Compliance.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Recent Work / Insights */}
      <motion.div variants={item}>
        <div className="flex items-center justify-between mb-12 border-b-2 border-secondary pb-4">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">
            Insights
          </h2>
          <Link
            href="/blog"
            className="font-mono text-sm uppercase hover:text-accent font-bold"
          >
            View All →
          </Link>
        </div>
        <BlogPosts posts={posts} />
      </motion.div>
    </motion.section>
  );
}
