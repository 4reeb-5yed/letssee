import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies",
};

// Placeholder data
const allProjects = [
  { id: "1", slug: "project-one", title: "Project One", summary: "A compelling project that showcases creative problem-solving.", tags: ["Design", "Development"] },
  { id: "2", slug: "project-two", title: "Project Two", summary: "An innovative solution that pushed boundaries.", tags: ["Strategy", "UX"] },
  { id: "3", slug: "project-three", title: "Project Three", summary: "A thoughtful approach to complex challenges.", tags: ["Research", "Design"] },
  { id: "4", slug: "project-four", title: "Project Four", summary: "Another showcase of excellence.", tags: ["Development"] },
];

const allTags = [...new Set(allProjects.flatMap(p => p.tags))];

export default function WorkPage() {
  return (
    <div className="py-[--space-7] px-[--margin-mobile] md:px-[--margin-tablet]">
      <div className="max-w-[--max-width-content] mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl] mb-[--space-6]">
            Work
          </h1>
        </ScrollReveal>
        
        {/* Filter tags */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-[--space-6]">
            {allTags.map((tag) => (
              <button
                key={tag}
                className="font-mono text-xs px-3 py-1.5 border border-[--color-line] rounded hover:border-[--color-accent] hover:text-[--color-accent] transition-colors duration-[--duration-micro]"
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[--space-5]">
          {allProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 75}>
              <Link href={`/work/${project.slug}`}>
                <Card variant="hoverable" className="h-full">
                  <div className="aspect-[4/3] bg-[--color-line] rounded-t-md">
                    <div className="w-full h-full bg-gradient-to-br from-[--color-paper-alt] to-[--color-line]" />
                  </div>
                  <div className="p-[--space-4]">
                    <h2 className="font-display text-[--text-lg] mb-[--space-2]">
                      {project.title}
                    </h2>
                    <p className="text-[--color-ink-soft] text-sm mb-[--space-3]">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs px-2 py-1 bg-[--color-paper] border border-[--color-line] rounded">
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
      </div>
    </div>
  );
}
