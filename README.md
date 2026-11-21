# PLAYROOM

A bilingual (English / Chinese) game navigation homepage for four independent interactive worlds.

## Included worlds

- Wangwang Coffee — https://wangwang-coffee.pages.dev/
- Tidewater Resort — https://tidewater-resort.pages.dev/
- Helix Temple — https://helixtemple.com
- Breaking Bad World — https://breakingbad-world.pages.dev

## Deploy with Cloudflare Pages

This is a static site with no build step.

1. Create a Cloudflare Pages project connected to `nequex-eng/gaming`.
2. Production branch: `main`.
3. Build command: leave empty.
4. Build output directory: `/` (repository root).
5. Deploy.

The homepage is `index.html`. Language switching defaults to English and remembers the visitor's choice in local storage.
