import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Collision",
  description: "Experience the birthday paradox by colliding truncated UUIDs in real time.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
