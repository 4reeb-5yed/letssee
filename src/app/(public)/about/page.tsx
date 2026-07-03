import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, and approach",
};

export default function AboutPage() {
  return (
    <div className="py-[--space-7] px-[--margin-mobile] md:px-[--margin-tablet]">
      <div className="max-w-[--max-width-content] mx-auto">
        <div className="max-w-[--max-width-text]">
          <ScrollReveal>
            <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl] mb-[--space-6]">
              About
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-[--space-4] text-[--text-md]">
              <p>
                I&apos;m a designer and developer focused on creating thoughtful digital 
                experiences that resonate with people. My work sits at the intersection 
                of design thinking and technical craft.
              </p>
              <p>
                With over a decade of experience working with startups, agencies, 
                and Fortune 500 companies, I&apos;ve developed a process that prioritizes 
                understanding user needs before jumping to solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-[--space-7] pt-[--space-6] border-t border-[--color-line]">
              <h2 className="font-display text-[--text-xl] mb-[--space-4]">Approach</h2>
              <div className="space-y-[--space-4] text-[--color-ink-soft]">
                <p>
                  I believe that great design emerges from deep empathy and rigorous 
                  thinking. Every project starts with understanding the problem space 
                  before exploring potential solutions.
                </p>
                <p>
                  My process is collaborative and iterative. I work closely with clients 
                  and stakeholders to ensure the final product not only meets technical 
                  requirements but also feels right to the people who use it.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-[--space-7] pt-[--space-6] border-t border-[--color-line]">
              <h2 className="font-display text-[--text-xl] mb-[--space-4]">Experience</h2>
              <div className="space-y-[--space-4]">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">Senior Designer</span>
                  <span className="font-mono text-sm text-[--color-ink-soft]">2020 — Present</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">Design Lead</span>
                  <span className="font-mono text-sm text-[--color-ink-soft]">2016 — 2020</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">Product Designer</span>
                  <span className="font-mono text-sm text-[--color-ink-soft]">2012 — 2016</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
