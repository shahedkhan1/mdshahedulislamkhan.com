# Claude Code sessions in this repo
Portfolio site (Cloudflare Pages, output dir `public/`) plus chatbot Pages Function (`functions/api/chat.js`) using `lib/knowledge.js`.
Never commit API keys; the key is the Pages secret `ANTHROPIC_API_KEY`. Everything in `lib/knowledge.js` and `public/` is public: no private details (dates of birth, family details beyond what Shahed approved, referee contacts, salary, visa matters).
Pushing to `main` deploys the live site.

## Session log rule (Work Hub)
Shahed's Work Hub (claude.ai Project "Project Manager") reports this project's status from `PROGRESS.md`.
1. **Start:** `git pull`, read `PROGRESS.md`, and catch it up with any commits since it was last changed
   (`git log --oneline $(git log -1 --format=%H -- PROGRESS.md)..HEAD`), marked "caught up from git history".
2. **Before your context fills, before /clear or /compact, and when work stops:** update `PROGRESS.md`
   (current state, next step, and a dated entry: date, computer, branch, done, decisions, blockers, next) and push.
