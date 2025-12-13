"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const contactMethods = [
  { name: "Email", href: "mailto:d@alumni.tus.ac.jp", label: "d@alumni.tus.ac.jp" },
  { name: "GitHub", href: "https://github.com/aximov", label: "@aximov" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/%E5%A4%A7%E5%9C%B0-%E4%B8%AD%E5%B1%B1-62229318a/", label: "Nakayama Daichi" },
  { name: "Twitter / X", href: "https://twitter.com/aximovich", label: "@aximovich" },
  { name: "Facebook", href: "https://www.facebook.com/aximov3/", label: "中山 大地" },
];

export default function ContactsPage() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="col-span-full"
    >
      <motion.div variants={item} className="mb-24 md:mb-32">
        <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-6">
          GET IN<br />TOUCH
        </h1>
      </motion.div>

      <motion.div variants={item} className="mb-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-px bg-primary border-t-2 border-primary">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between p-6 md:p-12 hard-border border-t-0 -mt-[2px] -ml-[2px] hover:bg-fg-primary hover:text-bg-primary transition-colors"
            >
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">{method.name}</h3>
                <p className="font-mono text-sm uppercase text-secondary group-hover:text-bg-secondary">{method.label}</p>
              </div>
              <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </motion.div>


    </motion.section>
  );
}
