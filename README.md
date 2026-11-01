# Campus Tech — React assignment

Complete local React 18 + TypeScript + Tailwind CSS + Vite project, based on the supplied Campus Tech screenshots. No hosted deployment or external image service is required.

## Run

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run typecheck
npm run build
npm run preview
```

The production output is `dist/`. Serve it with a static web server; opening `index.html` directly through `file://` is not supported.

## Structure

```text
public/assets/          Supplied reference and carousel artwork
src/components/         Navbar, Hero, Solutions, Benefits, Trust, Contact, Footer
                        Shared Artwork, Button and EnquiryDialog
src/data/assets.ts      Artwork coordinates and accessible descriptions
src/data/content.ts     Typed mock content and contact configuration
src/types.ts            Shared TypeScript interfaces
src/styles.css          Tailwind utilities and reference-specific layouts
src/App.tsx             Page composition and interaction state
src/main.tsx            Application entry
```

## Covered interactions

- Responsive mobile menu, solutions/resources dropdowns, outside-click and Escape dismissal.
- Four hero slides, previous/next controls, clickable indicators and live announcements.
- Horizontally scrollable solution cards with a working range control, touch scrolling and Learn More actions.
- Demo, contact, about and solution enquiry dialogs with native focus trapping and focus restoration.
- Required form fields, email validation and a clearly labelled email-app handoff.
- Email and telephone links, section navigation, keyboard focus, skip link and reduced-motion support.

## Fidelity and scope

The Figma Dev Mode file was reviewed for the 1512 × 4581 desktop frame, four hero slide variants and the solution card's default and raised hover states. Original artwork, logos, benefit icons, university strip and photograph are displayed through CSS image windows into the unchanged local images; the layout, text, controls and responsive behavior are real React/HTML. Only those individual asset regions are shown as images. The Figma file did not include separate tablet or phone frames, so those layouts adapt the desktop design. No GIF assets appeared in the frame's asset panel.

Desktop layout targets the supplied 1512px reference. Tablet and phone layouts adapt the desktop design because separate mobile designs were not supplied. Arial is used because the source font file and exact Figma typography tokens were not provided. The fourth solution's curriculum copy comes from the supplied Component 9 reference.

Authentication, a submission backend and official social-profile URLs were not supplied. Set `contact.loginUrl` in `src/data/content.ts` to connect the real portal. Until then, Login opens a support prompt instead of pretending to authenticate. Enquiries open the user's email app and are not silently stored or submitted. Social marks reproduce the design and are intentionally noninteractive until verified destinations are supplied. Statistics and the 2022 copyright are reference content, not independently verified claims.

The assignment marks this work as confidential. Keep the project private; do not publish it on GitHub, a public site or a portfolio.

For a production handoff with separate original exports, update `src/data/assets.ts` and simplify `Artwork` to use those images directly. No temporary Figma URLs or remote fonts are used.
