import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

// Placeholder data - will be replaced with real data from database
const featuredProjects = [
  {
    id: "1",
    slug: "project-one",
    title: "Project One",
    summary: "A compelling project that showcases creative problem-solving and technical excellence.",
    tags: ["Design", "Development"],
  },
  {
    id: "2",
    slug: "project-two",
    title: "Project Two",
    summary: "An innovative solution that pushed boundaries and delivered measurable results.",
    tags: ["Strategy", "UX"],
  },
  {
    id: "3",
    slug: "project-three",
    title: "Project Three",
    summary: "A thoughtful approach to complex challenges, balancing user needs with business goals.",
    tags: ["Research", "Design"],
  },
];

export const metadata: Metadata = {
  title: "Home",
  description: "Personal portfolio showcasing work in design and development",
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Opening Statement */}
      <section className="py-[--space-8] md:py-[--space-9] px-[--margin-mobile] md:px-[--margin-tablet]">
        <div className="max-w-[--max-width-content] mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl] leading-[--leading-3xl] md:leading-[--leading-4xl] tracking-[--tracking-tight] text-balance max-w-4xl">
              Crafting thoughtful digital experiences that resonate with people.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-[--space-4] text-[--text-md] text-[--color-ink-soft] max-w-[--max-width-text]">
              Designer, developer, and strategist working at the intersection of 
              technology and human needs. Available for select projects.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-[--space-5]">
              <Button variant="primary" size="lg">
                <Link href="/work">View Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Proof - Featured Projects */}
      <section className="py-[--space-7] px-[--margin-mobile] md:px-[--margin-tablet] bg-[--color-paper-alt]">
        <div className="max-w-[--max-width-content] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[--text-xl] md:text-[--text-2xl] mb-[--space-6]">
              Selected Work
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[--space-4]">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <Link href={`/work/${project.slug}`}>
                  <Card variant="hoverable" className="h-full">
                    <div className="aspect-[4/3] bg-[--color-line] rounded-t-md overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[--color-paper-alt] to-[--color-line]" />
                    </div>
                    <div className="p-[--space-4]">
                      <h3 className="font-display text-[--text-lg] mb-[--space-2]">
                        {project.title}
                      </h3>
                      <p className="text-[--color-ink-soft] text-sm mb-[--space-3]">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2 py-1 bg-[--color-paper] border border-[--color-line] rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-[--space-6] text-center">
              <Link
                href="/work"
                className="font-body text-[--color-ink-soft] hover:text-[--color-accent] transition-colors duration-[--duration-micro] underline underline-offset-4"
              >
                View all work →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: The Turn Moment */}
      <section className="relative py-[--space-9] bg-[--color-ink] text-[--color-paper] overflow-hidden">
        <div className="max-w-[--max-width-content] mx-auto px-[--margin-mobile] md:px-[--margin-tablet]">
          <ScrollReveal>
            <blockquote className="font-display text-[--text-xl] md:text-[--text-2xl] lg:text-[--text-3xl] leading-[--leading-xl] max-w-3xl">
              "Design is not just what it looks like. Design is how it works — 
              and how it makes people feel."
            </blockquote>
          </ScrollReveal>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[--color-accent] opacity-10 blur-3xl" />
      </section>

      {/* Section 4: Depth Links */}
      <section className="py-[--space-8] px-[--margin-mobile] md:px-[--margin-tablet]">
        <div className="max-w-[--max-width-content] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[--space-6]">
            <ScrollReveal>
              <Link href="/work" className="group block p-[--space-5] border border-[--color-line] rounded-md hover:border-[--color-accent] transition-colors duration-[--duration-base]">
                <h3 className="font-display text-[--text-lg] mb-[--space-2] group-hover:text-[--color-accent]">
                  Work
                </h3>
                <p className="text-[--color-ink-soft] text-sm">
                  Selected projects and case studies
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link href="/writing" className="group block p-[--space-5] border border-[--color-line] rounded-md hover:border-[--color-accent] transition-colors duration-[--duration-base]">
                <h3 className="font-display text-[--text-lg] mb-[--space-2] group-hover:text-[--color-accent]">
                  Writing
                </h3>
                <p className="text-[--color-ink-soft] text-sm">
                  Thoughts on design, technology, and craft
                </p>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/about" className="group block p-[--space-5] border border-[--color-line] rounded-md hover:border-[--color-accent] transition-colors duration-[--duration-base]">
                <h3 className="font-display text-[--text-lg] mb-[--space-2] group-hover:text-[--color-accent]">
                  About
                </h3>
                <p className="text-[--color-ink-soft] text-sm">
                  Background, experience, and approach
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 5: Close / Contact */}
      <section className="py-[--space-8] px-[--margin-mobile] md:px-[--margin-tablet] bg-[--color-paper-alt]">
        <div className="max-w-[--max-width-content] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-[--text-2xl] md:text-[--text-3xl] mb-[--space-4]">
              Let&apos;s work together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-[--color-ink-soft] mb-[--space-5] max-w-[--max-width-text] mx-auto">
              Have a project in mind? I&apos;d love to hear about it. 
              Let&apos;s discuss how we can create something meaningful.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Button variant="primary" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
