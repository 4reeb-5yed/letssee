"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[--z-sticky] bg-[--color-paper]/95 backdrop-blur-sm border-b border-[--color-line]">
      <nav
        className="max-w-[--max-width-content] mx-auto px-[--margin-mobile] md:px-[--margin-tablet] lg:px-0"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display text-lg font-semibold hover:text-[--color-accent] transition-colors duration-[--duration-micro]"
          >
            Home
          </Link>

          <ul className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      font-body text-sm md:text-base
                      relative
                      after:absolute after:bottom-0 after:left-0 after:w-full after:h-px
                      after:bg-[--color-accent]
                      transition-all duration-[--duration-micro]
                      ${
                        isActive
                          ? "text-[--color-ink] after:scale-x-100"
                          : "text-[--color-ink-soft] hover:text-[--color-ink] after:scale-x-0 hover:after:scale-x-100"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
