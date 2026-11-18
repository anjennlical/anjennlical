# Profile audit — 18 November 2026

## Before

The profile repository is `https://github.com/anjennlical/anjennlical`, default branch `main`. The entire current README was read from a fresh clone, based on commit `7a8405a`. It contains an illustrated sakura/cat banner hosted as a GitHub attachment, an English introduction, three Shields badges, two project descriptions, a mixed toolkit/learning list and a personal footer. No existing stats, GIFs, SVGs or Actions were found in the cloned repository. The banner was downloaded and visually inspected locally.

What works: coherent pink/night/sakura identity, recognizable greeting, clear interest in security and AI, and a memorable tagline. What needs improvement: no linked project cards, no direct demo or contact section, limited engineering detail, generic project statuses, and badges that duplicate the subtitle. The web search snapshot was older than the actual clone; the clone and current API inventory were used as the source of truth.

## Public inventory

GitHub's public API returned exactly these non-archived repositories for `anjennlical` during this audit:

| Repository | Verified scope | Profile treatment |
| --- | --- | --- |
| `anjennlical` | Current profile README | Evolve its voice and palette |
| `nekostrike` | Local MVP, React/TypeScript/Vite, Python/FastAPI, SQLite, deterministic lab checks, optional OpenAI Responses API, tests | Featured project; local status and optional AI explicit |
| `cyber-kitty-technical-showcase` | Public TypeScript/HTML/CSS demo, five save slots, classification, persistence, localization, tests | Featured project; real screenshot and public demo |

NekoStrike has no public demo URL in its repository metadata. Its public documentation says that hosted multi-user operation requires further design. The README explicitly confirms an implemented optional OpenAI integration; this is more specific than describing the entire project as a planned AI platform.

Cyber Kitty's public demo is `https://cyber-kitty-technical-showcase.vercel.app/`. Its README separates the technical showcase from the full game and offers Chapter 1 playtesting by email. Therefore the profile uses that public demo, not a private game deployment. The full game's local README and package manifest confirm Phaser, TypeScript and Vite; the public showcase itself does not use Phaser or Vite. No private code or private deployment is copied into this profile. After reviewing the first draft, the owner explicitly approved publication and requested full-game captures instead of the demo screenshot. The final assets therefore include two selected game captures, with clear captions and the fan-project attribution preserved.

No public repository named Nocturne AI or ALT was returned. Nocturne AI is omitted from the featured and current-work sections because its implementation stage could not be verified. ALT is likewise omitted rather than publishing details from a private workspace. AWS, Gemini, SIEM/SOC and MITRE ATT&CK are not presented as demonstrated practical skills without supporting public evidence. Linux, networking, Wireshark and Nmap are retained from the prior profile under study/interests. FIAP enrollment is supplied by the owner in the brief.

## Sources

- Public inventory: `https://api.github.com/users/anjennlical/repos?per_page=100`
- Existing profile and LinkedIn: `https://github.com/anjennlical`
- NekoStrike: public README, frontend package manifest, AI, screenshot, status and security documentation.
- Cyber Kitty: public README, package manifest, source tree, screenshots and provenance notes.
- GitHub profile README: https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme
- GitHub collapsed sections: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections

The public email was already present in the Cyber Kitty public README. The LinkedIn URL was already on the profile. No new private contact information was introduced.

## Design review

- **Designer:** one palette, authored SVGs, shared spacing and typography, recurring original mascot; actual product screenshots keep their own interfaces.
- **Developer:** dependency-free asset generator, self-contained SVGs, unchanged public JPEGs, explicit static alternatives, no credentials or remote badge services.
- **Recruiter:** identity, degree area, concrete project behavior, actual stack, source, demo and contact in accessible text.
- **Visitor:** clickable cards, public demo, expandable technical detail and navigation anchors provide useful routes beyond the opening visual.
