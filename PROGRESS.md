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

## 2026-11-17 (API key cleanup)
- Deleted the old legacy Anthropic key (the one the old Namecheap chatbot used; last used 27 Oct). Only the portfolio-cloudflare key (expires 17 Nov 2027) and an expired key remain.
- Monthly Anthropic spend limit lowered from $200,000 to $5.
- Chatbot re-tested after both changes: working.
- Remaining: Namecheap 2FA, let hosting lapse, transfer registration to Cloudflare before 14 Apr 2027, resume/Open Graph, then LinkedIn.

## 2026-11-17 (redesign, on branch `redesign`, NOT merged to main)
- Redesign built on branch `redesign`; preview: https://redesign.mdshahedulislamkhan-com.pages.dev (chat shows an error there only because the API key secret is set for Production, not Preview).
- Look: harbour blue / salt grey / hazard-yellow accent; Bricolage Grotesque + Source Serif 4; ruled entries instead of boxed cards; sticky section headings; auto dark mode.
- Decisions: hero "ask my assistant" box tried and removed (owner: doesn't fit); floating chat button kept. New "Products" section (Ticket Matcher, Ticket Matcher in ZoomMate, Guarded Browser Assistant) placed before Experience; other work under "Other projects". data.json projects now have a `kind` field.
- Products now carry a "Delivered · used by ..." status chip (facts from owner: Ticket Matcher, ZoomMate agent and Guarded Browser Assistant used by the IT service desk; ZoomMate side panel used across DTS). Section titled "Delivered products".
- Tagline changed to "AI security practitioner" (page title, meta, data.json headline, chatbot knowledge intro).
- ZoomMate side panel split into its own product card (owner request); Products now: Ticket Matcher, Ticket Matcher in ZoomMate, ZoomMate Side Panel, Guarded Browser Assistant.
- "Ticket Matcher in ZoomMate" renamed "Deskmate" (service desk ticket helper powered by ZoomMate), at owner request.
- Product order changed so Ticket Matcher and Deskmate are not adjacent (2x2 grid, opposite corners): Ticket Matcher, Guarded Browser Assistant, ZoomMate Side Panel, Deskmate.
- ZoomMate Side Panel card expanded with the pane-redesign details (from the zoommate-sidepanel repo tidy.js).
- Deskmate and ZoomMate Side Panel cards rewritten to four formal bullets each (owner wanted a professional, formal register).
- Next: owner reviews preview; then merge `redesign` to `main` (deploys live).
- Formal-register pass over the whole site (owner: "formal language makes the whole website formal"): tagline, all product and project cards, experience points, services page, research intro and contact line rewritten in a formal register. Facts unchanged.
