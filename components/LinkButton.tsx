"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Magnetic from "./Magnetic";

/** Magnetic gold button that links to another page — and hides itself on that page. */
export default function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  if (usePathname() === href) return null;
  return (
    <Magnetic>
      <Link href={href} className="btn">{children}</Link>
    </Magnetic>
  );
}
