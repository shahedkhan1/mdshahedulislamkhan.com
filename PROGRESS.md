# Progress: mdshahedulislamkhan.com

## Current state (17 Nov 2026)
- Moving from Namecheap shared hosting (Stellar plan, expired 13 Nov 2026, in grace) to Cloudflare Pages (free) with the chatbot as a Pages Function on Claude Haiku 5.5.
- Content updated 17 Nov 2026 with Shahed: DTS role (Aug 2026), Research Assistant (Apr 2026, current), teaching ended Jul 2026, research under peer review (no numbers yet), Network+ is a course not a cert, ZoomMate and browser-assistant descriptions corrected.
- Next: connect this repo to Cloudflare Pages, set the `ANTHROPIC_API_KEY` secret (new key), move DNS to Cloudflare, verify, then delete the old Anthropic key and set a spend limit. Domain registration renews 14 Apr 2027 (consider transferring to Cloudflare).

## Log
### 2026-11-17, Work Hub chat (Zord)
- Done: backed up the live site and chatbot from cPanel; rewrote the chatbot from Python (cPanel) to a Pages Function; replaced the April site in this repo with the live site.
- Decisions: Cloudflare Pages + Pages Function (cheapest that keeps the chatbot); Haiku 4.5 → Haiku 5.5 (10x cheaper).
- Open: resume PDF (May 2026) is out of date and lists referee phone numbers publicly.

## 2026-11-17 (chatbot fixed)
- Chatbot on Cloudflare Pages now works (Haiku 5.5). Cause of the 401: the secret held the console key ID, not the sk-ant key. Re-saved the real key.
- Removed the temporary key diagnostics from functions/api/chat.js.
- Next: add the domain to Cloudflare (free), attach it to the Pages project, switch Namecheap nameservers, then delete the old legacy API key and set a monthly spend limit.

## 2026-11-17 (domain moved to Cloudflare)
- mdshahedulislamkhan.com now serves from Cloudflare Pages (free plan); chatbot works on the real domain.
- Cloudflare DNS zone active; Namecheap nameservers set to Cloudflare (domain is still registered at Namecheap, renews to 14 Apr 2027).
- Deleted the old apex A and www CNAME; Pages CNAMEs added for apex and www. Mail (MX/SPF/DKIM) and cPanel-subdomain records left as imported.
- Next: transfer registration to Cloudflare Registrar before 14 Apr 2027 (at-cost renewal); delete old Anthropic key GLz…ZQAA; set a monthly spend limit; let Namecheap hosting lapse; resume/Open Graph updates; then LinkedIn.
