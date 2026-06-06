'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { index: '01', label: 'Spec', href: '/spec' },
  { index: '02', label: 'Blog', href: '/blog' },
  { index: '03', label: 'GitHub', href: 'https://github.com/seomd/cli', external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-surface border-b-2 border-primary transition-shadow duration-200 ${scrolled ? 'shadow-[0_2px_0_0_#000]' : ''}`}
    >
      {/* ── Checkered top accent bar ── */}
      <div className="checkered-divider" style={{ height: '8px' }} />

      {/* ── Main nav row ── */}
      <div className="flex items-center justify-between px-6 md:px-10 h-14">

        {/* Left: Logo */}
        <Link
          href="/"
          className="font-display text-[22px] uppercase tracking-wide leading-none hover:opacity-70 transition-opacity shrink-0"
          id="nav-logo"
        >
          SEO.MD
        </Link>

        {/* Center: Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {NAV_LINKS.map((item) => {
            const isActive = !item.external && (
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            );
            return (
              <Link
                key={item.index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                id={`nav-link-${item.index}`}
                className={`
                  flex items-center gap-1.5 px-4 py-1.5 font-mono text-[13px] font-semibold uppercase tracking-wider
                  transition-colors duration-100 border border-transparent
                  ${isActive
                    ? 'text-primary border-primary bg-surface-container'
                    : 'text-secondary hover:text-primary hover:border-outline-variant'
                  }
                `}
              >
                <span className="text-[10px] opacity-50">{item.index}</span>
                {item.label}
                {item.external && <span className="text-[10px] opacity-40">↗</span>}
              </Link>
            );
          })}
        </nav>

        {/* Right: Version badge + CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <span className="version-badge">v1.0-ALPHA</span>
          <Link
            href="/spec"
            className="btn-primary py-2 px-4 text-[12px]"
            id="nav-cta"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => {
              const isActive = !item.external && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-6 py-4 font-mono text-[13px] font-semibold uppercase tracking-wider border-b border-outline-variant
                    ${isActive ? 'bg-surface-container text-primary' : 'text-secondary'}`}
                >
                  <span className="text-[11px] opacity-50 w-5">{item.index}</span>
                  {item.label}
                  {item.external && <span className="ml-auto text-[11px] opacity-40">↗</span>}
                </Link>
              );
            })}
            <div className="px-6 py-4 flex items-center gap-3">
              <span className="version-badge">V1.0-ALPHA</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
