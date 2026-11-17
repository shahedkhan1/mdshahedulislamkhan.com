# mdshahedulislamkhan.com

Shahed's portfolio site and chatbot, hosted on Cloudflare Pages.

- `public/` — the static site. All content comes from `public/data.json`; edit that to update the site.
- `functions/api/chat.js` — the chatbot (Pages Function at `/api/chat`), calls Claude Haiku 5.5.
- `lib/knowledge.js` — what the chatbot knows. **Everything in it is public.**

Cloudflare Pages settings: build command none, output directory `public`.
Secret: `ANTHROPIC_API_KEY` (encrypted, set in the Pages project settings; never commit it).
Local test: `wrangler pages dev public --binding ANTHROPIC_API_KEY=...`
