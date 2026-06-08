# SEO.md Starter Setup Skill

**What this does**
Sets up this SEO.md Next.js starter completely automatically, from initial config to validated deployment-ready state.

---

## How to Use This Skill

1. Open this repository with your coding agent
2. Paste this URL into your agent: https://seomd.dev/SKILL.md
3. Tell your agent: "Use the SEO.md Starter Setup Skill to configure this project"

---

## Step-by-Step Instructions for Agents

Follow these exactly to set up the project completely:

### 1. Gather Context First

- Read `package.json` to understand current dependencies/scripts
- Read `SEO.md` to understand the current content spec
- Read `AGENTS.md` and `README.md` to align with project conventions

### 2. Ask the User for Required Inputs

Politely ask the user to provide:

- Their brand name
- Their domain (or planned domain)
- Their primary product/keyword focus
- Whether they have an existing SEO.md config they want to use instead of the example
- (Optional) Their social links (Twitter/X, LinkedIn, GitHub)

### 3. Configure SEO.md

- Replace the example `SEO.md` content with the user's actual brand info
- Update the `site` section with their real domain
- Update the `identity` section with their brand name and socials
- Update `keywords.primary` with their main product/keyword
- Update the `intent` queries to match their actual use case
- Update the `pages` section to reflect their actual planned pages

### 4. Project Cleanup & Polish

- Ensure the landing page in `src/app/page.tsx` matches the brand vibe (keep the premium centered card layout)
- Verify `eslint.config.mjs`, `tsconfig.json`, `next.config.ts` are all correctly set up
- If a `.env.example` doesn't exist yet, create one with:
  ```
  SEOMD_API_URL=
  SEOMD_API_KEY=
  SEOMD_PAYMENT_TOKEN=
  ```

### 5. Validation & Next Steps

- Run `npm install` if needed
- Run `npm run lint` to make sure everything is clean
- Run `npm run build` to verify the project builds successfully
- Give the user a clear summary of what was changed and what they should do next (deploy, set env vars, etc.)

---

## Constraints

- Do NOT change the basic Next.js + Tailwind setup more than needed
- Do NOT remove `SEO.md`, `AGENTS.md`, `DESIGN.md`, `USAGE.md`, or the `.seomd/` directory
- Keep the centered premium card layout in `src/app/page.tsx` (just adjust copy/colors if needed to match the brand)
- Always prioritize making the setup feel trustworthy and clear (no surprise reveals or gimmicks)

---

## Success Checklist

Before saying you're done, verify:

- [ ] `SEO.md` contains real user brand/keyword info, not the example
- [ ] Project installs with `npm install`
- [ ] Lint passes with `npm run lint`
- [ ] Build passes with `npm run build`
- [ ] User knows exactly what to do next (deploy, set env vars, etc.)
