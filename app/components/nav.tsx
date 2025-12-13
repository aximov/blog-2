"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "HOME" }, // Uppercase for brutalist feel
  "/cv": { name: "CV" },
  "/blog": { name: "BLOG" },
  "/contact": { name: "CONTACT" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full hard-border-b bg-primary sticky top-0 z-50">
      <div className="layout-grid py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="col-span-2 md:col-span-3 flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
            AXIMOV
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="col-span-2 md:col-span-9 flex justify-end gap-x-6 md:gap-x-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path || (pathname.startsWith(path) && path !== "/");
            return (
              <Link
                key={path}
                href={path}
                className={`text-sm md:text-base font-bold tracking-tight transition-colors ${isActive
                    ? "text-accent"
                    : "text-secondary hover:text-primary"
                  }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
