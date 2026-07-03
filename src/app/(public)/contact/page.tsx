"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus("success");
  };

  return (
    <div className="py-[--space-7] px-[--margin-mobile] md:px-[--margin-tablet]">
      <div className="max-w-[--max-width-content] mx-auto">
        <div className="max-w-[--max-width-text]">
          <ScrollReveal>
            <h1 className="font-display text-[--text-3xl] md:text-[--text-4xl] mb-[--space-4]">
              Get in touch
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-[--color-ink-soft] mb-[--space-7]">
              Have a project in mind? I&apos;d love to hear about it. Fill out the form below 
              or reach out directly at{" "}
              <a href="mailto:hello@example.com" className="text-[--color-accent] hover:underline">
                hello@example.com
              </a>
              .
            </p>
          </ScrollReveal>

          {status === "success" ? (
            <ScrollReveal>
              <div className="bg-[--color-paper-alt] border border-[--color-line] rounded-md p-[--space-5]">
                <h2 className="font-display text-[--text-lg] mb-[--space-2]">Message sent!</h2>
                <p className="text-[--color-ink-soft]">
                  Thank you for reaching out. I&apos;ll get back to you within a few days.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="space-y-[--space-4]">
                <div>
                  <label htmlFor="name" className="block font-body text-sm mb-[--space-1]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b border-[--color-line] py-2 focus:border-[--color-ink] focus:outline-none transition-colors duration-[--duration-micro]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm mb-[--space-1]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b border-[--color-line] py-2 focus:border-[--color-ink] focus:outline-none transition-colors duration-[--duration-micro]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm mb-[--space-1]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-[--color-line] py-2 focus:border-[--color-ink] focus:outline-none transition-colors duration-[--duration-micro] resize-none"
                  />
                </div>

                <div className="pt-[--space-3]">
                  <Button type="submit" variant="primary" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}
