import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[--color-line] bg-[--color-paper-alt]">
      <div className="max-w-[--max-width-content] mx-auto px-[--margin-mobile] md:px-[--margin-tablet] lg:px-0 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[--color-ink-soft]">
            © {currentYear} Personal Site. All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/work"
                  className="font-body text-sm text-[--color-ink-soft] hover:text-[--color-ink] transition-colors duration-[--duration-micro]"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="font-body text-sm text-[--color-ink-soft] hover:text-[--color-ink] transition-colors duration-[--duration-micro]"
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-[--color-ink-soft] hover:text-[--color-ink] transition-colors duration-[--duration-micro]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-[--color-ink-soft] hover:text-[--color-ink] transition-colors duration-[--duration-micro]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
