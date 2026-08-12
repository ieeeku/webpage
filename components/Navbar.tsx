"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import IeeeSBKU from "./IeeeSBKU";

const links = [
  { label: "People", href: "/people" },
  { label: "Contact & FAQs", href: "/contact" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20 bg-neutral/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center">
          <IeeeSBKU className="h-12 w-auto" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-label uppercase transition-colors hover:text-tertiary ${
                    active ? "text-tertiary" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile: condensed link row */}
        <ul className="flex items-center gap-4 md:hidden">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.04em] transition-colors hover:text-tertiary ${
                    active ? "text-tertiary" : "text-secondary"
                  }`}
                >
                  {link.label.split(" ")[0]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
