"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/site-settings", label: "Site Settings" },
  { href: "/admin/media", label: "Media" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[--color-paper-alt] border-r border-[--color-line] min-h-screen">
      <div className="p-[--space-4]">
        <Link href="/" className="font-display text-lg mb-[--space-6] block">
          ← Back to Site
        </Link>
        <nav>
          <ul className="space-y-1">
            {adminLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== "/admin/dashboard" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-[--duration-micro] ${
                      isActive
                        ? "bg-[--color-ink] text-[--color-paper]"
                        : "text-[--color-ink-soft] hover:bg-[--color-paper] hover:text-[--color-ink]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
