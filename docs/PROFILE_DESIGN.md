# Midnight Sakura // Digital Playground

Profile artwork and copy for **Larissa Albuquerque / @anjennlical**. Prepared on 18 November 2026; the owner approved publication with real game captures replacing the public-demo screenshot.

## Design and maintenance

The original profile's greeting, personal tone, pink/sakura/night palette and “building cute things with serious code” are preserved. Sakura OS adds a terminal composition and **Sakura Byte**, an original pixel cat with a circuit bow and a terminal on its chest. The earlier illustrated banner remains in Git history. No third-party character is used in the new profile artwork.

Assets live in `assets/profile/`. Run `node scripts/build-assets.mjs` from the repository root to regenerate the SVGs. The generator uses only Node built-ins. Edit the artwork there rather than editing its output. Colors: background `#110E19`, surface `#1C1628`, pink `#FF5CA8`, soft pink `#FFB5DA`, lavender `#B89CFF`, cyan `#7DE0E8`, white `#F9F4FF`. Each SVG owns its background and contrast, so the artwork works on light or dark GitHub pages.

The hero, mascot and footer each have an animated SVG and a static SVG. Project headings are static. Animation uses internal SVG CSS: slow star opacity, tail rotation, cursor opacity and a clipped terminal message. There is no JavaScript, external stylesheet, external font, remote image dependency or `foreignObject`. `prefers-reduced-motion` disables the animations where the viewer supports it; static versions are also linked in the README. With animation unsupported, the complete message remains visible. Motion preference propagation through GitHub's image proxy must be checked on the published draft; the links provide explicit static alternatives.

All essential identity, stack, project status and contact information is readable Markdown outside images. Images have alt text and SVGs have titles/descriptions. Project sections flow in one column, with no fixed-width HTML table of cards. The toolkit is a two-column text table. Banners scale using their `viewBox` and `width` attributes. Decorative text can become small on mobile; the adjacent Markdown supplies the readable information.

## Updating projects

1. Read the current public project README and relevant implementation before updating claims.
2. Keep the distinction between a public demo, local application, full game and planned work.
3. Use real screenshots from public repositories or captures explicitly approved by the owner; preserve historical/simulated labels. Do not replace them with generated application screens.
4. Update statuses and links in the README. Avoid embedding metrics likely to go stale.
5. Re-run the local validator and visually inspect SVGs, light/dark layouts and a narrow viewport.

NekoStrike's unchanged Mochi Studio capture is dated 13 November 2026, before RC26.1 spacing changes, with a simulated provider. At the owner's explicit request, Cyber Kitty uses two actual full-game captures: Byteberry Town and the interactive Cyber HQ workstation. Their PNG sources were converted to JPEG for size, without compositing or invented gameplay. The demo screenshot was removed. Captions distinguish the game images from the separately linked public technical demo. The game's fan-project status and third-party artwork attribution remain explicit.

## Activity and dependencies

This version links to GitHub's own contribution calendar and repository history. It does not add a statistics service or a scheduled workflow. A moving cat over an invented grid would imply contributions that were never fetched. A real animated calendar would need a separately maintained data-generation pipeline and GitHub rendering verification; it is deliberately deferred. There are no tokens, Actions permissions or new GitHub settings to configure.

## Review before publication

Implementation branch: `codex/midnight-sakura-profile`. The owner reviewed the initial draft, approved publication and requested only real game screenshots in place of the demo screenshot. Validate locally, commit on this branch, inspect the remote branch README, then fast-forward the profile's main branch without rewriting history. GitHub settings do not need to change.

The local preview approximates GitHub styling; it is not proof of GitHub's final rendering. Keep essential content outside images even after publication.
