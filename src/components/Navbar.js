'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const NAV_LINKS = [
  { index: '01', label: 'Spec', href: '/spec' },
  { index: '02', label: 'Providers', href: '/providers' },
  { index: '03', label: 'Connect', href: '/connect' },
  { index: '04', label: 'Blog', href: '/blog' },
  // { index: '05', label: 'GitHub', href: 'https://github.com/seomd/cli', external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-surface border-b-2 border-primary transition-shadow duration-200 ${scrolled ? 'shadow-[0_2px_0_0_var(--color-primary)]' : ''}`}
    >
      {/* ── Checkered top accent bar ── */}
      <div className="checkered-divider" style={{ height: '8px' }} />

      {/* ── Main nav row ── */}
      <div className="flex items-center justify-between px-6 md:px-10 h-14">

        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[22px] uppercase tracking-wide leading-none hover:opacity-70 transition-opacity shrink-0"
          id="nav-logo"
        >
          <Logo className="w-6 h-6 text-primary" />
          <span>SEO.MD</span>
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

        {/* Right: Theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <label
            className="slider-v2 text-[10px]"
            htmlFor="theme-toggle"
            aria-label="Toggle dark mode"
          />
          <Link
            href="/connect"
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
            <div className="px-6 py-4 flex items-center justify-between border-b border-outline-variant">
              <span className="font-mono text-[12px] font-semibold uppercase tracking-wider text-secondary">
                DARK MODE
              </span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="theme-toggle-mobile"
                  className="sr-only"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <label
                  className="slider-v2 text-[10px]"
                  htmlFor="theme-toggle-mobile"
                  aria-label="Toggle dark mode"
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
