"use client";

import { motion } from "framer-motion";

export function PageContent({ children }: { children: React.ReactNode }) {
  const items = Array.isArray(children) ? children : [children];
  
  return (
    <section>
      {items.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {child}
        </motion.div>
      ))}
    </section>
  );
}