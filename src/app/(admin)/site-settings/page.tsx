"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function SiteSettingsPage() {
  const [formData, setFormData] = useState({
    heroStatement: "",
    heroStatementSubline: "",
    contactCtaLabel: "Let's talk",
    contactCtaType: "mailto",
    contactCtaValue: "hello@example.com",
    seoTitle: "",
    seoDescription: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // In production, this would save to database
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 className="font-display text-[--text-2xl] mb-[--space-6]">Site Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-[--space-5] max-w-2xl">
        <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-4]">
          <h2 className="font-display text-lg mb-[--space-4]">Homepage</h2>
          
          <div className="space-y-[--space-4]">
            <div>
              <label htmlFor="heroStatement" className="block font-body text-sm mb-[--space-1]">
                Hero Statement *
              </label>
              <textarea
                id="heroStatement"
                value={formData.heroStatement}
                onChange={(e) => setFormData(prev => ({ ...prev, heroStatement: e.target.value }))}
                required
                rows={3}
                className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none resize-none"
              />
            </div>

            <div>
              <label htmlFor="heroStatementSubline" className="block font-body text-sm mb-[--space-1]">
                Hero Subline (optional)
              </label>
              <input
                type="text"
                id="heroStatementSubline"
                value={formData.heroStatementSubline}
                onChange={(e) => setFormData(prev => ({ ...prev, heroStatementSubline: e.target.value }))}
                className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-4]">
          <h2 className="font-display text-lg mb-[--space-4]">Contact</h2>
          
          <div className="space-y-[--space-4]">
            <div>
              <label htmlFor="contactCtaLabel" className="block font-body text-sm mb-[--space-1]">
                CTA Button Label
              </label>
              <input
                type="text"
                id="contactCtaLabel"
                value={formData.contactCtaLabel}
                onChange={(e) => setFormData(prev => ({ ...prev, contactCtaLabel: e.target.value }))}
                className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="contactCtaType" className="block font-body text-sm mb-[--space-1]">
                CTA Type
              </label>
              <select
                id="contactCtaType"
                value={formData.contactCtaType}
                onChange={(e) => setFormData(prev => ({ ...prev, contactCtaType: e.target.value as any }))}
                className="w-full bg-[--color-paper] border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
              >
                <option value="mailto">Email (mailto link)</option>
                <option value="form">Contact Form</option>
                <option value="link">Custom Link</option>
              </select>
            </div>

            <div>
              <label htmlFor="contactCtaValue" className="block font-body text-sm mb-[--space-1]">
                {formData.contactCtaType === "mailto" ? "Email Address" : 
                 formData.contactCtaType === "link" ? "URL" : "Email for Form Submissions"}
              </label>
              <input
                type={formData.contactCtaType === "mailto" ? "email" : "url"}
                id="contactCtaValue"
                value={formData.contactCtaValue}
                onChange={(e) => setFormData(prev => ({ ...prev, contactCtaValue: e.target.value }))}
                className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-4]">
          <h2 className="font-display text-lg mb-[--space-4]">SEO</h2>
          
          <div className="space-y-[--space-4]">
            <div>
              <label htmlFor="seoTitle" className="block font-body text-sm mb-[--space-1]">
                Site Title
              </label>
              <input
                type="text"
                id="seoTitle"
                value={formData.seoTitle}
                onChange={(e) => setFormData(prev => ({ ...prev, seoTitle: e.target.value }))}
                className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="seoDescription" className="block font-body text-sm mb-[--space-1]">
                Meta Description
              </label>
              <textarea
                id="seoDescription"
                value={formData.seoDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, seoDescription: e.target.value }))}
                rows={3}
                maxLength={160}
                className="w-full bg-transparent border border-[--color-line] rounded-md px-3 py-2 focus:border-[--color-ink] focus:outline-none resize-none"
              />
              <p className="text-xs text-[--color-ink-soft] mt-1">
                {formData.seoDescription.length}/160 characters
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" variant="primary" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Settings"}
          </Button>
          {saved && (
            <span className="text-green-600 text-sm">Settings saved!</span>
          )}
        </div>
      </form>
    </div>
  );
}
