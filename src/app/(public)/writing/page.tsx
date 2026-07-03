import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on design, technology, and craft",
};

export default function WritingPage() {
  return (
    <div className="py-[--space-7] px-[--margin-mobile] md:px-[--margin-tablet]">
      <div className="max-w-[--max-width-content] mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl] mb-[--space-6]">
            Writing
          </h1>
        </ScrollReveal>
        
        <div className="max-w-[--max-width-text] space-y-[--space-6]">
          <ScrollReveal delay={100}>
            <article className="border-b border-[--color-line] pb-[--space-5]">
              <p className="font-mono text-xs text-[--color-ink-soft] mb-[--space-2]">
                January 2024
              </p>
              <h2 className="font-display text-[--text-lg] mb-[--space-2]">
                <a href="/writing/first-article" className="hover:text-[--color-accent] transition-colors">
                  The Art of Thoughtful Design
                </a>
              </h2>
              <p className="text-[--color-ink-soft] text-sm">
                Exploring the principles that guide great design decisions and why they matter.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
