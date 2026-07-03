import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    description: "Project case study",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectTitle = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <article className="py-[--space-7]">
      {/* Hero */}
      <div className="aspect-[16/9] bg-[--color-ink] mb-[--space-6]">
        <div className="w-full h-full bg-gradient-to-br from-[--color-ink-soft] to-[--color-ink]" />
      </div>

      <div className="max-w-[--max-width-content] mx-auto px-[--margin-mobile] md:px-[--margin-tablet]">
        {/* Header */}
        <ScrollReveal>
          <header className="mb-[--space-7]">
            <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl] mb-[--space-3]">
              {projectTitle}
            </h1>
            <p className="font-mono text-sm text-[--color-ink-soft]">
              Design & Development, 2024
            </p>
          </header>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={100}>
          <div className="max-w-[--max-width-text] mb-[--space-7]">
            <p className="text-[--text-md] leading-relaxed mb-[--space-4]">
              This is a placeholder for the project case study content. When real content is added 
              through the admin interface, this page will display the full project details including 
              the challenge, approach, and results.
            </p>
            <p className="text-[--color-ink-soft]">
              The rich text editor ensures consistent typography and spacing throughout, 
              maintaining the design system&apos;s visual language.
            </p>
          </div>
        </ScrollReveal>

        {/* Next project */}
        <ScrollReveal delay={200}>
          <div className="border-t border-[--color-line] pt-[--space-6]">
            <Link href="/work">
              <Button variant="secondary">
                ← Back to all work
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
