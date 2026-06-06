'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CheckeredDivider from './CheckeredDivider';

const NAV_SECTIONS = [
  { index: '01', label: 'Specification', href: '/spec' },
  { index: '02', label: 'Quick Start', href: '/#quickstart' },
  { index: '03', label: 'Blog', href: '/blog' },
  { index: '04', label: 'Contributors', href: '/#contributors' },
  { index: '05', label: 'GitHub', href: 'https://github.com/seomd/cli', external: true },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Mobile toggle ── */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 font-mono text-[11px] uppercase tracking-widest bg-primary text-on-primary px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        id="sidebar-toggle"
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* ── Mobile overlay backdrop ── */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Mobile drawer (fixed, slide-in) ── */}
      <aside
        className={`
          lg:hidden fixed top-0 left-0 h-full z-40
          w-[280px] bg-surface border-r border-outline-variant
          flex flex-col pt-8 pb-8
          transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-label="Mobile navigation"
      >
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ── Desktop sidebar (sticky, in-flow) ── */}
      <aside
        className="hidden lg:flex flex-col w-[280px] shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-outline-variant"
        aria-label="Site navigation"
      >
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  );
}

function SidebarContent({ pathname }) {
  return (
    <div className="flex flex-col h-full pt-8 pb-8">
      {/* Logo */}
      <div className="px-6 mb-6">
        <Link href="/" className="block">
          <span className="font-display text-headline-md uppercase tracking-wide leading-headline">
            SEO.MD
          </span>
        </Link>
      </div>

      <CheckeredDivider className="mb-6" />

      <p className="px-6 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
        NAVIGATION
      </p>

      <nav className="flex-1 px-6" aria-label="Primary navigation">
        <ul className="space-y-1">
          {NAV_SECTIONS.map((item) => {
            const isActive = !item.external && pathname === item.href;
            return (
              <li key={item.index}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`
                    flex items-baseline gap-3 py-2 group
                    transition-colors duration-100
                    ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}
                  `}
                  id={`nav-${item.index}`}
                >
                  <span className="font-mono text-[11px] font-semibold shrink-0 w-5">
                    {item.index}
                  </span>
                  <span className={`font-body text-body-md ${isActive ? 'underline underline-offset-2' : 'group-hover:underline group-hover:underline-offset-2'}`}>
                    {item.label}
                  </span>
                  {item.external && (
                    <span className="font-mono text-[10px] text-secondary ml-auto">↗</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom version info */}
      <div className="px-6 mt-6 pt-6 border-t border-outline-variant">
        <span className="version-badge text-[10px]">V1.0-ALPHA</span>
        <p className="font-mono text-[10px] text-secondary mt-2">
          npx seomd@latest init
        </p>
      </div>
    </div>
  );
}
