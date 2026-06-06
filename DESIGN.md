---
name: Protocol Industrial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-accent:
    fontFamily: EB Garamond
    fontSize: 20px
    fontWeight: '400'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  base: 8px
  gutter: 24px
  margin-page: 64px
  sidebar-width: 280px
---

## Brand & Style

This design system is rooted in **Neo-Brutalism** and **Industrial Futurism**. It is designed for technical environments where authority, precision, and security are paramount. The aesthetic rejects decorative softness in favor of raw structural elements, heavy line weights, and high-contrast information density.

The target audience is developers, systems engineers, and protocol architects. The emotional response is one of "Technical Sovereignty"—the interface should feel like a secure terminal for high-stakes autonomous operations. Key visual motifs include checkered safety patterns, stark monochrome surfaces, and a hierarchical structure that prioritizes rapid data scanning.

## Colors

The palette is strictly achromatic to maintain an "official document" feel.

- **Primary (#000000):** Used for all primary text, heavy borders, and solid structural elements.
- **Secondary (#FFFFFF):** Used for code block backgrounds and high-contrast labels.
- **Neutral (#E0E0E0):** The primary page background. It provides a non-glare, industrial paper-like surface.
- **Accent (#D1D1D1):** Used for subtle dividers and secondary containers to maintain hierarchy without introducing hue.

## Typography

The typographic system utilizes a triple-font stack to differentiate between instruction, data, and emphasis.

- **Headlines (Anton):** Massive, condensed, and all-caps. These serve as the structural anchors of the page.
- **Body (Hanken Grotesk):** A clean, modern grotesque for high legibility in long-form technical documentation.
- **Technical/Metadata (JetBrains Mono):** Used for code, version numbers, and sidebar navigation to reinforce the machine-readable nature of the content.
- **Emphasis (EB Garamond):** Used sparingly for "standardized" terms or protocol definitions to provide a human, "legal-deposit" contrast to the machine aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** model inspired by industrial blueprints.

- **Sidebar:** A left-aligned navigation column (280px) remains fixed, using large index numbers (01, 02) for rapid section jumping.
- **Content Area:** A centered or wide-margin single column that maximizes readability. 
- **Dividers:** Checkered "Racing Flag" patterns (16px height) are used to mark major phase shifts or the "End of Specification."
- **Grids:** Use a 12-column grid for dashboard views, but default to a single-column flow for documentation. Heavy black 2px lines should define the top and bottom of sections.

## Elevation & Depth

This design system avoids z-axis depth and shadows. Hierarchy is achieved through **Tonal Layering** and **Line Weight**.

- **Flat Surfaces:** All elements exist on the same plane.
- **Outlines:** Depth is suggested by 2px or 3px solid black borders.
- **Inversion:** High-priority elements (like Code Blocks) use a black background with white text to create a visual "hole" in the page.
- **Overlays:** Technical warnings use thin, overlapping oval containers to break the rigid grid, suggesting a "stamp" or "seal" applied to the document.

## Shapes

The primary shape language is **Sharp (0px)** to maintain an aggressive, industrial look. 

- **Exceptions:**
    - **Pill Badges:** Versioning (e.g., V2.0.4) uses a 100px radius (pill-shape) with a 1px border.
    - **Requirement Seals:** Critical requirements use a wide, horizontal oval (ellipse) with a 1px border.
    - **Checkered Dividers:** These are repeating 8x8px square tiles in a staggered pattern.

## Components

### Buttons & Inputs
- **Primary Action:** Solid black rectangle, white all-caps mono text. No rounded corners.
- **Secondary Action:** 2px black border, white background, black text.
- **Inputs:** 1px black border, neutral background, monospace font for user entry.

### Indicators & Badges
- **Status Pills:** Small, pill-shaped containers with monospace labels. Use solid black for "Active" and bordered for "Pending."
- **Critical Requirement:** A large elliptical container centered on the page. Text inside must be all-caps and bold.

### Code Blocks
- Black background (#000000 or deep gray #1A1A1A).
- White JetBrains Mono text.
- No padding on the left; use a solid 4px accent bar to denote the start of the block.

### Navigation Sidebar
- Vertical list of sections.
- Large numbers (01, 02) followed by the section name.
- Hover state: The section name becomes underlined; the number remains static.