import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-display text-[--text-2xl] mb-[--space-6]">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[--space-4] mb-[--space-6]">
        <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-4]">
          <p className="font-mono text-xs text-[--color-ink-soft] mb-[--space-1]">Projects</p>
          <p className="font-display text-[--text-xl]">0</p>
        </div>
        <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-4]">
          <p className="font-mono text-xs text-[--color-ink-soft] mb-[--space-1]">Published</p>
          <p className="font-display text-[--text-xl]">0</p>
        </div>
        <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-4]">
          <p className="font-mono text-xs text-[--color-ink-soft] mb-[--space-1]">Drafts</p>
          <p className="font-display text-[--text-xl]">0</p>
        </div>
      </div>

      <div className="space-y-3">
        <Link href="/admin/projects/new">
          <Button variant="primary">Create New Project</Button>
        </Link>
        <Link href="/admin/site-settings">
          <Button variant="secondary">Edit Site Settings</Button>
        </Link>
      </div>
    </div>
  );
}
