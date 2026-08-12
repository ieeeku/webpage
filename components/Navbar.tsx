"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20 bg-neutral/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <Link href="/" className="flex items-center">
          <IeeeSBKU className="h-10 w-auto sm:h-12" />
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

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-secondary/30 text-primary transition-colors hover:border-tertiary/40 hover:text-tertiary md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div id="mobile-nav-menu" className="border-t border-secondary/20 md:hidden">
          <ul className="mx-auto grid max-w-6xl gap-2 px-4 py-3 sm:px-6">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md border px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.04em] transition-colors ${
                      active
                        ? "border-tertiary/40 text-tertiary"
                        : "border-secondary/25 text-secondary hover:border-tertiary/30 hover:text-tertiary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
