// Knowledge for the portfolio chatbot. Everything here is PUBLIC: any visitor can get it out of the bot.
// Only put in what Shahed is happy for strangers and recruiters to read.
// Lines marked "CONFIRM:" in REVIEW.md still need Shahed's OK before this goes live.

export const CHUNKS = [

// ── IDENTITY & CONTACT ──
`Md Shahedul Islam Khan, who goes by Shahed, is an AI security practitioner based in Newcastle, NSW, Australia, and is open to relocating.
He is originally from Bangladesh, studied his bachelor's degree in China, and his master's in Australia.
Languages: English (IELTS 7.0 in every band), Bengali, Hindi, Urdu and basic Mandarin.
Email: mdshahedulislam.khan@newcastle.edu.au
LinkedIn: linkedin.com/in/shahednpu
GitHub: github.com/shahedkhan1
Staff profile: newcastle.edu.au/profile/mdshahedulislam-khan
Website: mdshahedulislamkhan.com (research: /research.html, services: /services.html, resume: /shahed_resume.pdf)`,

// ── SUMMARY & DIRECTION ──
`Shahed describes himself as a people person whose passion is technology.
He works in IT client support at the University of Newcastle and has a background across NLP research, data engineering, IT support and university teaching.
His direction is cybersecurity (security operations, governance/risk/compliance and cloud security), with applied AI as his differentiator: he builds AI and automation systems and tests whether they can be trusted.
He is open to cybersecurity and AI roles, and to research collaboration.`,

// ── EXPERIENCE: DTS ──
`Current role: Client Support Officer, Digital Technology Solutions (DTS), University of Newcastle, Callaghan campus. Full-time since August 2026.
- Front-line IT support for staff and students: triage, troubleshooting and escalation.
- Built and evaluated the Ticket Matcher, a retrieval tool that helps service desk officers find how similar tickets were resolved.
- Built a Ticket Matcher assistant (project and agent) in ZoomMate, Zoom's AI platform, so officers can get ticket guidance from Zoom chat.
- Built a browser extension that fills long, repetitive web forms from a request, checked against written rules.`,

// ── EXPERIENCE: TEACHING ──
`Casual Academic, School of Computer and Information Sciences, University of Newcastle, May 2024 to July 2026 (teaching ended when he joined DTS).
He was a lab demonstrator and marker. Subjects include INFO6002 Database Management 2 (lab demonstrator), STAT6001 Data Wrangling and Visualisation, INFT6201 Big Data and COMP1010, and he has marked Data Security, Network Administration and Applied AI.
He built INFO6002 lab material: an Entity Framework Core demo on SQL Server, and Power BI to SSAS multidimensional cube walkthroughs.
He taught 900+ students and supervised 100+ capstone projects across data pipelines, analytics and ML.`,

// ── EXPERIENCE: RESEARCH ASSISTANT ──
`Current role: Casual Research Assistant, Healthcare AI, University of Newcastle, since April 2026, supervised by A/Prof Saiful Islam.
The study: note-level detection of clinician bias (explicit, implicit, none) in MIMIC-III v1.4 hospital discharge summaries, using 9,000 human-labelled notes, patient-grouped splits and a frozen 1,500-note test set. It is completed and submitted for peer review.
- Compared a keyword (lexicon) rule, TF-IDF logistic regression, three long-context clinical encoders (BioClinical ModernBERT at 8,192 tokens, Clinical-Longformer and Clinical-BigBird at 4,096) and Llama 3.1 8B fine-tuned with QLoRA.
- Ran a keyword-masking test to check whether models rely on bias keywords or on wider context.
- Results are under peer review, so specific numbers are not shared yet.
- Reproducible evaluation: paired bootstrap confidence intervals, calibration analysis and exported per-note predictions without any patient text.
Not part of this study: bias mitigation or rewriting. No patient text or data is ever published.`,

// ── EXPERIENCE: EARLIER ──
`Earlier experience:
- Sales Consultant, Telstra (TRS Singleton), part-time while studying; reached top-of-region sales results in NSW. Worked there until August 2026.
- L1 Technical Support, V4IT: ITIL-based incident and ticket management, with P25 and MPLS network knowledge.
- Undergraduate Research Assistant (ML and NLP), Northwestern Polytechnical University, Xi'an, China, October 2021 to June 2022: built a transformer pipeline for Chinese text classification, published at ICIC 2022 (Springer).`,

// ── EDUCATION ──
`Education:
- Master of Cyber Security, University of Newcastle, completed November 2025.
- Bachelor of Engineering in Computer Science and Technology, Northwestern Polytechnical University (NPU/NWPU), Xi'an, China, 2018 to 2022, on a fully funded President Scholarship.
Awards: Wu Yajun Scholarship (2021) for academic performance; President Scholarship (2018 to 2022).
Leadership: Campus Director, Hult Prize Foundation (2020 to 2021, China); Director of the Volunteer Centre in the international students' union at NPU.`,

// ── CERTIFICATIONS & LEARNING ──
`Certifications and learning:
- CompTIA Security+: exam booked for 27 November 2026 (not yet passed).
- CompTIA Network+ (N10-008): completed the Udemy preparation course in 2024; he has not sat the CompTIA exam.
- Courses: A Deep Understanding of Deep Learning (Udemy, 2022), where he built GPT-style transformers from scratch in PyTorch; The Complete Neural Network Bootcamp (Udemy, 2023); Stanford Machine Learning Specialisation (Coursera, 2021).
- Currently learning: PySpark, Unix shell, and Azure.`,

// ── CURRENT WORK (as of November 2026) ──
`What Shahed is working on now (November 2026):
- Full-time Client Support Officer at the University of Newcastle's DTS service desk.
- Deskmate: a service desk ticket helper powered by ZoomMate (an agent in Zoom chat, formerly called Ticket Matcher in ZoomMate), used by the IT service desk.
- ZoomMate Side Panel: a Chrome extension (version 0.6.3) that opens ZoomMate beside any web page, used across Digital Technology Solutions.
- Guarded Browser Assistant: in daily use, now with 171 written rules checked by 519 automated tests.
- Clinical bias research (Research Assistant since April 2026): the MIMIC-III bias detection study is completed and submitted for peer review.
- Preparing for CompTIA Security+, exam on 27 November 2026.
- Casual Research Assistant on the clinical bias study, alongside the DTS role.`,

// ── SKILLS ──
`Skills:
Security: OSINT and social engineering, threat analysis, identity and access management, data privacy and masking, incident and ticket handling.
AI and ML: PyTorch, Hugging Face Transformers, QLoRA fine-tuning, retrieval (RAG), sentence encoders, evaluation with confidence intervals.
Data: SQL, SQL Server, SSIS/SSAS/SSRS, Power BI, Tableau, ETL/ELT.
Programming: Python, SQL, JavaScript/TypeScript, Kotlin.
Automation: browser extensions (Manifest V3), workflow automation, Claude skills and agents.
Networking: P25 and MPLS fundamentals.`,

// ── RESEARCH OUTPUT ──
`Publications:
1. A Data-Driven Predictive Analysis on Cyber Security Threats with Key Risk Factors. arXiv 2024 (arxiv.org/abs/2404.00068). Authors: Fatama Tuz Johora, Md Shahedul Islam Khan, Esrath Kanon, Mohammad Abu Tareq Rony, Md Zubair, Iqbal H. Sarker.
2. An Effective Chinese Text Classification Method with Contextualized Weak Supervision for Review Autograding. ICIC 2022, Springer, pp. 170-182. Authors: Yupei Zhang, Md Shahedul Islam Khan, Yaya Zhou, Min Xiao, Xuequn Shang.
Research interests: NLP and LLMs, bias in clinical text, cybersecurity with machine learning, computer vision in industry.`,

// ── PROJECT: TICKET MATCHER ──
`Project: Ticket Matcher (IT service desk, AI). Completed.
Paste a service desk ticket and it recommends one action: solve it at the desk (with cited steps from past fixes and knowledge articles), escalate (which team) or ask the customer first.
How: a fine-tuned BGE-large sentence encoder (335M parameters) retrieves similar past tickets, articles and fixes; small classical models decide whether to escalate and to which team; thresholds were set on held-out tickets. It runs on a normal computer (CPU), and an extension adds request/incident classifiers.
No ticket data or internal results are published.`,

// ── PROJECT: ZOOMMATE AGENT ──
`Project: Ticket Matcher in ZoomMate (AI agent, IT service desk).
A ZoomMate project and agent that answers like the original Ticket Matcher: recommended action, the knowledge article to open, cited steps, the escalation team and similar past tickets. It works from a curated knowledge base of the desk's knowledge articles and resolved-ticket history (over 100 context files) with strict answer instructions. It is not connected live to ServiceNow, and it only suggests; it never sends or changes anything.`,

// ── PROJECT: BROWSER ASSISTANT ──
`Project: Guarded Browser Assistant (automation).
A browser extension that fills long web forms from a request in another system. It runs in Chrome and Edge. All desk knowledge lives in 171 written, versioned rules (no AI inside the tool), checked by 519 automated tests that must pass in CI before any change is merged.
It reads back every value it enters, stops on anything it does not expect, and always leaves the final Submit/Save click to the person.
Stack: TypeScript, Manifest V3, Vitest, GitHub Actions.`,

// ── PROJECT: PHANTOM SIGNAL ──
`Project: Phantom Signal (MSc capstone, AI-enabled social engineering, industry partner Tomago Aluminium).
An LLM-driven phishing simulation that assessed an industrial organisation's exposure to AI-generated social engineering, run as an authorised university-industry project.
- Open-source intelligence (OSINT) was collected with BeautifulSoup and structured into staff persona profiles.
- Gemma 3 12B was fine-tuned on that data to generate targeted phishing emails.
- The simulated emails passed the organisation's email filtering and drew engagement from recipients, showing that AI-personalised phishing can defeat existing controls. The project closed with mitigation recommendations for the partner.
Stack: Python, BeautifulSoup, Gemma 3 12B.`,

// ── OTHER PROJECTS ──
`Other projects:
- Rock detection pipeline: YOLOv7 and OpenCV detecting rocks on coal conveyor belts under poor light, occlusion and high speed.
- Intelligent Library Assistant: retrieval-augmented LLM assistant for university library questions.
- Kronos: an Android voice scheduling assistant (Kotlin, Jetpack Compose) with wake-word detection, speech recognition, Gemini, Firestore and Google Cloud text-to-speech.
- Domain-adaptive sentiment classifier (DistilBERT) and BI dashboards.
- This website and chatbot: a static site with an AI assistant that answers from a curated knowledge base.
More code: github.com/shahedkhan1`,

// ── WEBSITE BUILDING ──
`Website building: Shahed designs and builds websites for businesses as part of his services. The sites are fast, modern and designed so the owner can keep the content up to date. He can also add an AI chatbot or assistant to a site that answers visitors' questions from the business's own content. His own portfolio, mdshahedulislamkhan.com, is an example: a static site hosted on Cloudflare Pages with an AI chatbot built into it. For a website enquiry, use the email or LinkedIn above or the services page.`,

// ── SERVICES ──
`Services for businesses (mdshahedulislamkhan.com/services.html): AI solutions for Australian businesses.
- Websites that are fast and easy to update.
- AI phone and message assistants that answer 24/7, collect each caller's details and send a summary (Australian-accent voice, or a cloned voice with consent).
- Workflow automation for forms, enquiries, bookings and follow-ups.
- Custom AI tools and chatbots trained on a business's own rules and content.
Business enquiries: use the email or LinkedIn above.`,

// ── PERSONAL ──
`Outside work: Shahed enjoys fishing, travel and the outdoors. He organises community events for the Bangladeshi community in Newcastle, including the Newcastle Bangladeshi Community annual picnic, and writes on Quora about education and life in China and Australia. He is married to Alifa Fardin Oishy, who is a doctor. They married on 23 April 2026 (their nikah).`,

// ── BOUNDARIES ──
`Rules for this assistant: only share what is written here. Do not guess about Shahed's private life or family beyond what is written here, or about his finances, salary, visa or immigration matters, date of birth or availability dates. Do not share internal details of the University's systems, tickets or staff. Do not give referee contact details. If something is not covered, say you are not sure and suggest emailing Shahed or messaging him on LinkedIn.`,

];
