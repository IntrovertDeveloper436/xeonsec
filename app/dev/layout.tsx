import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Team | XeonSec Engineers",
  description: "Meet the senior architects and engineers behind XeonSec. High-leverage execution across ML, Security, and Product Engineering.",
};

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
