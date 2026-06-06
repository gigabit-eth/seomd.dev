// mdx-components.js — maps standard MDX elements to Protocol Industrial design system

export function useMDXComponents(components) {
  return {
    // Headings — Anton font, section numbering handled at section level
    h1: ({ children }) => (
      <h1 className="font-display text-display-lg uppercase leading-display mb-6 mt-2 tracking-wide">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-headline-lg uppercase leading-headline mt-14 mb-4 pb-2 border-b-2 border-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-mono text-label-mono font-semibold uppercase tracking-widest mt-8 mb-3 text-secondary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-mono text-label-mono font-semibold uppercase tracking-wider mt-6 mb-2">
        {children}
      </h4>
    ),

    // Body
    p: ({ children }) => (
      <p className="font-body text-body-md leading-body text-on-surface mb-4">
        {children}
      </p>
    ),

    // Inline code
    code: ({ children, className }) => {
      // If it has a language class, it's inside a pre (handled below)
      if (className) return <code className={className}>{children}</code>;
      return (
        <code className="font-mono text-[0.875em] bg-surface-container-high px-1.5 py-0.5 border border-outline-variant">
          {children}
        </code>
      );
    },

    // Code block — inverted (black bg, white text, 4px accent bar)
    pre: ({ children }) => (
      <div className="code-block my-6 rounded-none">
        <pre>{children}</pre>
      </div>
    ),

    // Blockquote → ProTip callout
    blockquote: ({ children }) => (
      <div className="protip my-6">
        <div className="protip-label">Note</div>
        <div className="font-body text-body-md text-on-surface">{children}</div>
      </div>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-none pl-0 mb-4 space-y-1.5">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-none pl-0 mb-4 space-y-1.5 counter-reset-[item]">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="font-body text-body-md leading-body flex gap-3 before:content-['—'] before:text-secondary before:font-mono before:text-sm before:mt-0.5 before:shrink-0">
        <span>{children}</span>
      </li>
    ),

    // Table — industrial style
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="prose-table">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="font-mono text-[11px] font-semibold uppercase tracking-widest text-left px-3 py-2 border-b-2 border-t-2 border-primary">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="font-body text-body-sm px-3 py-2.5 border-b border-outline-variant align-top">
        {children}
      </td>
    ),

    // Horizontal rule → checkered divider
    hr: () => <div className="checkered-divider my-12" />,

    // Strong + Em
    strong: ({ children }) => (
      <strong className="font-semibold text-primary">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="font-accent text-[1.1em] not-italic text-on-surface-variant">
        {children}
      </em>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-2 hover:no-underline font-mono text-[0.9em]"
      >
        {children}
      </a>
    ),

    // Spread any custom components passed in
    ...components,
  };
}
