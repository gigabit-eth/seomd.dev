import './globals.css';
import ThemeSync from '@/components/ThemeSync';
import { Anton, Hanken_Grotesk, EB_Garamond, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://seomd.dev'),
  title: {
    default: 'SEO.md — The Open Standard for AI Search Optimization',
    template: '%s | SEO.md',
  },
  description:
    'SEO.md is an open standard for AI Engine Optimization (AEO) — a version-controlled spec file that tells AI search engines how to cite your brand.',
  keywords: ['SEO.md', 'AEO', 'AI Engine Optimization', 'LLM SEO', 'citation tracking', 'open standard', 'seomd'],
  authors: [{ name: 'SEO.md Contributors' }],
  alternates: {
    canonical: 'https://seomd.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seomd.dev',
    siteName: 'SEO.md',
    title: 'SEO.md — The Open Standard for AI Search Optimization',
    description:
      'SEO.md is an open standard for AI Engine Optimization (AEO) — a version-controlled spec file that tells AI search engines how to cite your brand.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SEO.md — The Open Standard for AI Search Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@foxcite',
    title: 'SEO.md — The Open Standard for AI Search Optimization',
    description:
      'SEO.md is an open standard for AI Engine Optimization (AEO) — a version-controlled spec file that tells AI search engines how to cite your brand.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${hankenGrotesk.variable} ${ebGaramond.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemDark)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased">
        {/* Structured Schema Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SEO.md",
              "url": "https://seomd.dev",
              "description": "The open standard for AI Engine Optimization (AEO).",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://seomd.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3J37MRM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T3J37MRM');
            `,
          }}
        />
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
