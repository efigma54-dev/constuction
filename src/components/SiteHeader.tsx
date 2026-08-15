import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/construction-progress", label: "Progress" },
  { href: "/transparency", label: "Transparency" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header
      className="site-header sticky top-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid rgba(230, 222, 209, 0.16)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">

          {/* Wordmark */}
          <Link href="/" className="brand-lockup flex min-w-0 items-center gap-3 shrink-0">
            <Image
              src="/logo-mark.png"
              alt="Aakar Developers"
              width={2048}
              height={2048}
              priority
              className="brand-mark h-12 w-12 object-cover sm:h-14 sm:w-14"
            />
            <span className="brand-name flex flex-col leading-none">
              <span className="brand-name-main">AAKAR</span>
              <span className="brand-name-sub">DEVELOPERS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium tracking-wide text-charcoal-muted lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className="header-nav-link transition-colors"
                style={{ letterSpacing: "0.03em" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile menu — sharp dropdown, no pill */}
            <details className="relative lg:hidden">
              <summary
                className="header-menu-trigger list-none cursor-pointer px-3 py-1.5 text-sm font-medium tracking-wide transition-colors"
                style={{ border: "1px solid rgba(230, 222, 209, 0.28)" }}
              >
                Menu
              </summary>
              <div
                className="absolute right-0 z-50 mt-2 w-52 bg-charcoal"
                style={{
                  border: "1px solid rgba(230, 222, 209, 0.18)",
                  boxShadow: "0 18px 48px rgba(12, 22, 20, 0.24)",
                }}
              >
                <div className="flex flex-col">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch
                      className="header-menu-link px-4 py-3 text-sm font-medium tracking-wide transition-colors"
                      style={{ borderBottom: "1px solid rgba(230, 222, 209, 0.12)" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>

            {/* Primary CTA — sharp rectangle */}
            <Link
              href="/contact"
              prefetch
              className="btn-primary"
              style={{ height: "2.375rem", padding: "0 0.75rem", fontSize: "0.72rem" }}
            >
              <span className="hidden sm:inline">Book a site visit</span>
              <span className="sm:hidden">Book visit</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
