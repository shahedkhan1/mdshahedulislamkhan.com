// Renders the whole site from data.json. Edit data.json to update content.
const $ = (id) => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

fetch("data.json", { cache: "no-cache" }).then((r) => r.json()).then((d) => {
  const p = d.profile;
  $("name").textContent = p.name;
  $("headline").textContent = p.headline;
  $("tagline").textContent = p.tagline;
  $("location").textContent = "// " + p.location;
  $("year").textContent = "© " + new Date().getFullYear() + " " + p.name;
  p.focus.forEach((f) => $("focus").append(el("li", "", esc(f))));

  const linkBtn = (label, href, primary) => { const a = el("a", "btn" + (primary ? " primary" : ""), esc(label)); a.href = href; return a; };
  Object.entries(p.links).filter(([, v]) => v && v !== "#").forEach(([k, v]) => $("links").append(linkBtn(k, v)));
  $("mail").textContent = p.email; $("mail").href = "mailto:" + p.email;

  // Experience with type filter
  const types = ["All", ...new Set(d.experience.map((j) => j.type))];
  const drawJobs = (type) => {
    $("timeline").replaceChildren();
    d.experience.filter((j) => type === "All" || j.type === type).forEach((j) => {
      const when = [j.start, j.end].filter(Boolean).join(" – ");
      const li = el("li", "job",
        `<h3>${esc(j.role)}<span class="tag">${esc(j.type)}</span></h3>
         <div class="meta">${esc(j.org)} · ${esc(j.place)}${when ? " · " + esc(when) : ""}</div>
         <ul>${j.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`);
      $("timeline").append(li);
    });
  };
  types.forEach((t, i) => {
    const b = el("button", i === 0 ? "on" : "", esc(t));
    b.onclick = () => { [...$("filters").children].forEach((c) => c.classList.remove("on")); b.classList.add("on"); drawJobs(t); };
    $("filters").append(b);
  });
  drawJobs("All");

  d.projects.forEach((pr) => {
    const c = el("article", "card",
      `<span class="k">${esc(pr.tag)}</span><h3>${esc(pr.title)}</h3><p>${esc(pr.desc)}</p>
       <ul class="hl">${(pr.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
       ${pr.link ? `<span class="soon">${esc(pr.linkLabel)}</span>` : ""}
       <div class="stack">${pr.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>`);
    $("projectGrid").append(c);
  });

  Object.entries(d.skills).forEach(([k, v]) => $("skillList").append(el("div", "", `<h3>${esc(k)}</h3>${v.map((s) => `<span>${esc(s)}</span>`).join("")}`)));
  ["Education", "Certifications", "Courses", "Awards"].forEach((g) => {
    const items = d.credentials.filter((c) => c.group === g);
    if (!items.length) return;
    const box = el("div", "credgroup", `<h3>${esc(g)}</h3>`);
    const ul = el("ul", "creds", "");
    items.forEach((c) => ul.append(el("li", "", `<span>${esc(c.name)}<br><small>${esc(c.issuer)}</small></span><small>${esc(c.year)}</small>`)));
    box.append(ul); $("credList").append(box);
  });
});
