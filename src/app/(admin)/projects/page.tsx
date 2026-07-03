import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AdminProjectsPage() {
  // Placeholder - will be replaced with actual data fetching
  const projects: { id: string; title: string; status: string }[] = [];

  return (
    <div>
      <div className="flex justify-between items-center mb-[--space-6]">
        <h1 className="font-display text-[--text-2xl]">Projects</h1>
        <Link href="/admin/projects/new">
          <Button variant="primary">New Project</Button>
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-[--space-8] border border-dashed border-[--color-line] rounded-md">
          <p className="text-[--color-ink-soft] mb-[--space-4]">No projects yet</p>
          <Link href="/admin/projects/new">
            <Button variant="secondary">Create your first project</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex justify-between items-center p-[--space-4] bg-[--color-paper-alt] border border-[--color-line] rounded-md"
            >
              <div>
                <h3 className="font-display">{project.title}</h3>
                <span className="font-mono text-xs text-[--color-ink-soft]">
                  {project.status}
                </span>
              </div>
              <Link href={`/admin/projects/${project.id}/edit`}>
                <Button variant="secondary" size="sm">Edit</Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
