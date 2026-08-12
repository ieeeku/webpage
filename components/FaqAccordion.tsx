"use client";

import { useState } from "react";
import { Faq } from "@/lib/data/faqs";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-secondary/15 rounded-lg bg-surface">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[0.98rem] font-medium text-primary">
                {faq.question}
              </span>
              <span
                className={`font-mono text-tertiary transition-transform ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {open && (
              <p className="px-6 pb-5 text-body text-secondary">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
