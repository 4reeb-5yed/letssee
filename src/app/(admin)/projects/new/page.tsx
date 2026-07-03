"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import type { JSONContent } from "@tiptap/react";

export default function NewProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    summary: "",
    roleContext: "",
    tags: "",
    body: undefined as JSONContent | undefined,
    featured: false,
    status: "draft" as "draft" | "published",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // In production, this would call an API endpoint to create the project
    console.log("Form data:", {
      ...formData,
      tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
    });

    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push("/admin/projects");
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-[--space-6]">
        <h1 className="font-display text-[--text-2xl]">New Project</h1>
        <Button variant="secondary" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-[--space-5] max-w-3xl">
        <div>
          <label htmlFor="title" className="block font-body text-sm mb-[--space-1]">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => {
              setFormData(prev => ({
                ...prev,
                title: e.target.value,
                slug: generateSlug(e.target.value),
              }));
            }}
            required
            className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block font-body text-sm mb-[--space-1]">
            URL Slug *
          </label>
          <input
            type="text"
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
            required
            pattern="[a-z0-9-]+"
            className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="summary" className="block font-body text-sm mb-[--space-1]">
            Summary *
          </label>
          <textarea
            id="summary"
            value={formData.summary}
            onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
            required
            rows={2}
            className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none resize-none"
          />
        </div>

        <div>
          <label htmlFor="roleContext" className="block font-body text-sm mb-[--space-1]">
            Role & Context
          </label>
          <input
            type="text"
            id="roleContext"
            value={formData.roleContext}
            onChange={(e) => setFormData(prev => ({ ...prev, roleContext: e.target.value }))}
            placeholder="e.g., Design & Development, 2024"
            className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block font-body text-sm mb-[--space-1]">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
            placeholder="Design, Development, UX"
            className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-body text-sm mb-[--space-2]">
            Content *
          </label>
          <RichTextEditor
            content={formData.body}
            onChange={(content) => setFormData(prev => ({ ...prev, body: content }))}
            placeholder="Write your case study content here..."
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
              className="w-4 h-4 rounded border-[--color-line] text-[--color-accent] focus:ring-[--color-focus]"
            />
            <span className="text-sm">Feature on homepage</span>
          </label>
        </div>

        <div className="flex items-center gap-4 pt-[--space-4] border-t border-[--color-line]">
          <Button type="submit" variant="primary" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Draft"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setFormData(prev => ({ ...prev, status: "published" }))}
            disabled={isSaving}
          >
            Save & Publish
          </Button>
        </div>
      </form>
    </div>
  );
}
