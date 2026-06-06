'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const active = theme === 'dark' || (!theme && systemDark) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', active);
  }, [pathname]);

  return null;
}
