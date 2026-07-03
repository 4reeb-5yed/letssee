import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

interface WritingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    description: "Article",
  };
}

export default async function WritingArticlePage({ params }: WritingPageProps) {
  const { slug } = await params;
  const articleTitle = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <article className="py-[--space-7] px-[--margin-mobile] md:px-[--margin-tablet]">
      <div className="max-w-[--max-width-content] mx-auto">
        <div className="max-w-[--max-width-text]">
          <ScrollReveal>
            <header className="mb-[--space-7]">
              <p className="font-mono text-xs text-[--color-ink-soft] mb-[--space-2]">
                January 2024 · 5 min read
              </p>
              <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl]">
                {articleTitle}
              </h1>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-[--space-4]">
              <p>
                This is placeholder content for the writing article. When real content 
                is added through the admin interface, this page will display the full 
                article with the design system&apos;s typography.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </article>
  );
}
