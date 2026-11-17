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
- Broadened research tags: focus and interests now lead with Natural language processing (clinical bias is one application among several, alongside Ticket Matcher and the Chinese text classification paper).
- Focus tags merged to three: Cybersecurity, Applied NLP & LLMs, Data engineering (avoids duplicating Applied AI & LLMs).
- Toned down the commercial feel: yellow status pills replaced by a quiet navy left-rule label; skill chips underline neutral. Yellow now only on hover and keyboard focus. Merge held pending owner's view.
- Status labels shortened (the section heading already says Delivered): 'Used by the IT service desk' / 'Used across DTS'.
- Checked preview at 500px and 820px widths (no overflow, readable). Shortened the Delivered products subtitle to one line on phones: 'In use at the University of Newcastle.'
- Merged the products heading and subtitle into one line: 'Delivered at the University of Newcastle' (subtitle removed).
- Skills section: slash-separated lists replaced with outlined pills (same style as card tech tags).
- Products heading restored to the short one-line 'Delivered products' (long version wrapped onto several lines in the heading column); who uses each product is stated on the cards.
- Section heading column widened to 230px with no-wrap so 'Delivered products' stays on one line on desktop.
- Product status labels now name where each is used in full, no 'DTS' abbreviation: 'Used by the IT service desk, University of Newcastle' / 'Used across Digital Technology Solutions, University of Newcastle'. Heading stays 'Delivered products'.
- Desktop width: main/footer max-width raised from 1080px to 1360px and the nav aligned to the same edges (less empty margin on full-size monitors).
- Contact email now sizes itself to its container (cqw units) so it never breaks mid-address at any window size.
- Ultra-wide screens: content max-width raised to 2000px (nav aligned) and project/product cards switch to three columns at 1800px+; below that the layout stays fluid.
- 2026-11-17: `redesign` merged to `main` (fast-forward) at owner's instruction ("live it"); live at mdshahedulislamkhan.com and verified loading with the new design. Open: owner to check on phone and ultra-wide; chatbot answers to be re-tested on the live site; LinkedIn update next.
- Name heading no longer forced onto two lines (removed 12ch cap; font scales with window width, wraps only when the window is too narrow).
- Top-left brand now shows the full name 'Md Shahedul Islam Khan' on all three pages (was 'Shahed Khan').
- Resume PDF rebuilt from the site's current facts (AI security practitioner headline, DTS role, Security+ booked, delivered products) and re-uploaded as public/shahed_resume.pdf. Referee phone numbers and emails removed from the public file ('Available on request'); the old PDF with them remains in git history.
