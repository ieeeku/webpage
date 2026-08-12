import Link from "next/link";
import IeeeSBKU from "./IeeeSBKU";

const quickLinks = [
  { label: "People", href: "/people" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact & FAQs", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/ieeeku" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ieeeku" },
  { label: "Github", href: "https://github.com/ieeeku/" },
  { label: "YouTube", href: "https://youtube.com/@IEEEKUStudentBranch/" },
];

export function MembershipCall() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:px-10 md:pt-16">
        <div className="rounded-lg bg-surface px-6 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-label uppercase text-tertiary">
                # Apply
              </p>
              <h2 className="mt-3 max-w-md text-h1 text-primary">
                Membership can be obtained throughout the year.
              </h2>
              <p className="mt-2 max-w-md text-body text-secondary">

              The IEEE Student Membership is currently available at a temporary
              promotional rate of $2.50. Get your membership while the offer is available.
              </p>
              <p className="mt-2 max-w-md text-body text-secondary">
              No prior experience required — just curiosity.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full rounded-md bg-tertiary px-6 py-3 text-center font-mono text-label uppercase text-on-primary transition-opacity hover:opacity-90 sm:w-auto"
            >
              Apply now
            </Link>
          </div>
        </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <IeeeSBKU className="h-9 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-body text-secondary">
              The IEEE Student Branch at Kathmandu University, Dhulikhel. Run by
              students, for students.
            </p>
          </div>

          <div>
            <p className="font-mono text-label uppercase text-secondary">
              Quick links
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-primary transition-colors hover:text-tertiary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-label uppercase text-secondary">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-body text-primary">
              <li>Kathmandu University, Dhulikhel, Nepal</li>
              <li>
                <a
                  href="mailto:ieeekusb@ku.edu.np"
                  className="transition-colors hover:text-tertiary"
                >
                  ieeekusb@ku.edu.np
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-label uppercase text-secondary">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-body text-primary transition-colors hover:text-tertiary"
                  >
                  {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="scanline-divider mt-14" />

        <div className="mt-6 flex flex-col gap-2 font-mono text-[0.68rem] uppercase tracking-[0.04em] text-secondary md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} IEEE Kathmandu University Student
            Branch
          </span>
          <span>IEEE Nepal Section · Region 10</span>
        </div>
      </div>
    </footer>
  );
}
