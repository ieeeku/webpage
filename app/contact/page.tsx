import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/data/faqs";
import { MembershipCall } from "@/components/Footer";

export const metadata: Metadata = { title: "Contact & FAQs" };

const contactDetails = [
  { label: "Email", value: "ieeekusb@ku.edu.np", href: "mailto:ieeekusb@ku.edu.np" },
  { label: "Location", value: "Kathmandu University, Dhulikhel" },
  { label: "Office hours", value: "Mon–Fri, 24/7 Online " },
];

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 md:px-10 md:pb-14 md:pt-20">
          <p className="font-mono text-label uppercase text-tertiary">// Contact</p>
          <h1 className="mt-3 text-display-sm text-primary">
            Talk to the branch.
          </h1>
          <p className="mt-4 max-w-lg text-body text-secondary">
            Questions about joining, proposing a workshop, or anything else —
            reach out directly, or check the FAQs below first.
          </p>
        </div>
      </section>

      <section className="border-b border-secondary/20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:px-10 md:py-20">
          <div className="space-y-8">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-label uppercase text-secondary">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-[1.05rem] text-primary transition-colors hover:text-tertiary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-[1rem] text-primary sm:text-[1.05rem]">{item.value}</p>
                )}
              </div>
            ))}

            <a
              href="mailto:ieeekusb@ku.edu.np?subject=Membership%20Application"
              className="inline-block rounded-md bg-tertiary px-6 py-3 font-mono text-label uppercase text-on-primary transition-opacity hover:opacity-90"
            >
              Apply for membership
            </a>
          </div>

          <div className="rounded-lg bg-surface p-5 font-mono text-[0.76rem] leading-relaxed sm:p-6 sm:text-[0.8rem]">
            <p className="text-secondary">
              <span className="text-tertiary">$</span> branch/info --detail
            </p>
            <p className="mt-3 text-secondary">
              <span className="text-primary">→</span> Office hours: 24/7 online
            </p>
            <p className="mt-1 text-secondary">
              <span className="text-primary">→</span> Membership: open year-round
            </p>
            <p className="mt-1 text-secondary">
              <span className="text-primary">→</span> Response time: within 3 working days
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:px-10 md:py-20">
          <p className="font-mono text-label uppercase text-tertiary">// FAQs</p>
          <h2 className="mt-3 text-h1 text-primary">Common questions.</h2>
          <div className="mt-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <MembershipCall />
    </main>
  );
}
