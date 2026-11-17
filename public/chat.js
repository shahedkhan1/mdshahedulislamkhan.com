// Floating chat widget, bottom-right on every page. Talks to the bot at /api/chat.
(function () {
  const ENDPOINT = "/api/chat";
  const hist = []; // last turns of this conversation, sent with each question
  let sid;
  try { sid = sessionStorage.getItem("sk_sid"); } catch (e) {}
  if (!sid) {
    sid = (self.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
    try { sessionStorage.setItem("sk_sid", sid); } catch (e) {}
  }

  const css = `
  .skc-btn{position:fixed;right:20px;bottom:20px;z-index:1000;width:56px;height:56px;border-radius:50%;border:1px solid var(--accent,#2dd4bf);background:var(--panel,#121a30);color:var(--accent,#2dd4bf);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(0,0,0,.35);font:600 14px var(--mono,monospace)}
  .skc-btn::after{content:"";position:absolute;top:3px;right:3px;width:12px;height:12px;border-radius:50%;background:#22c55e;border:2px solid var(--bg,#0b1020)}
  .skc-btn:hover{background:var(--accent,#2dd4bf);color:var(--bg,#0b1020)}
  .skc-win{position:fixed;right:20px;bottom:86px;z-index:999;width:min(360px,calc(100vw - 40px));height:min(480px,calc(100vh - 120px));display:none;flex-direction:column;background:var(--bg,#0b1020);color:var(--text,#e6ebf5);border:1px solid var(--line,#222c48);border-radius:14px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,.45);font:14px/1.5 var(--sans,system-ui,sans-serif)}
  .skc-win.open{display:flex}
  .skc-head{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--line,#222c48);background:var(--panel,#121a30)}
  .skc-head b{font-size:14px}.skc-head small{display:block;color:var(--mute,#8d99b5);font:11px var(--mono,monospace)}
  .skc-x{background:none;border:0;color:var(--mute,#8d99b5);font-size:20px;cursor:pointer;line-height:1}
  .skc-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
  .skc-m{max-width:85%;padding:9px 12px;border-radius:12px;white-space:pre-wrap;word-wrap:break-word}
  .skc-m.bot{align-self:flex-start;background:var(--panel,#121a30);border:1px solid var(--line,#222c48)}
  .skc-m.me{align-self:flex-end;background:var(--accent,#2dd4bf);color:var(--bg,#0b1020)}
  .skc-form{display:flex;gap:8px;padding:10px;border-top:1px solid var(--line,#222c48);background:var(--panel,#121a30)}
  .skc-in{flex:1;padding:9px 11px;border-radius:8px;border:1px solid var(--line,#222c48);background:var(--bg,#0b1020);color:var(--text,#e6ebf5);font:inherit}
  .skc-send{padding:9px 14px;border-radius:8px;border:1px solid var(--accent,#2dd4bf);background:none;color:var(--accent,#2dd4bf);font:600 13px var(--mono,monospace);cursor:pointer}
  .skc-send:disabled{opacity:.5;cursor:default}
  @media(max-width:640px){.skc-btn{right:14px;bottom:14px}.skc-win{left:0;right:0;width:auto;bottom:auto;top:0;height:100dvh;border-radius:0;border:0}.skc-in{font-size:16px}}`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);

  const btn = document.createElement("button");
  btn.className = "skc-btn"; btn.type = "button"; btn.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><circle cx="8.5" cy="12" r="0.9" fill="currentColor"/><circle cx="12" cy="12" r="0.9" fill="currentColor"/><circle cx="15.5" cy="12" r="0.9" fill="currentColor"/></svg>';
  btn.setAttribute("aria-label", "Open chat about Shahed");
  const win = document.createElement("div");
  win.className = "skc-win"; win.setAttribute("role", "dialog"); win.setAttribute("aria-label", "Chat about Shahed");
  win.innerHTML = '<div class="skc-head"><div><b>Questions? Ask here</b><small>AI assistant</small></div><button class="skc-x" type="button" aria-label="Close chat">×</button></div><div class="skc-log" aria-live="polite"></div><form class="skc-form"><input class="skc-in" maxlength="500" placeholder="Ask a question…" aria-label="Your question"><button class="skc-send" type="submit">Send</button></form>';
  document.body.append(btn, win);

  const log = win.querySelector(".skc-log"), form = win.querySelector("form"),
        input = win.querySelector("input"), send = win.querySelector(".skc-send");
  const add = (text, who) => { const m = document.createElement("div"); m.className = "skc-m " + who; m.textContent = text; log.append(m); log.scrollTop = log.scrollHeight; return m; };
  add("Hi! I can answer questions about Shahed's background, projects, research and services. What would you like to know?", "bot");

  const mobile = () => window.matchMedia("(max-width:640px)").matches;
  const fit = () => {
    const vv = window.visualViewport, open = win.classList.contains("open");
    if (mobile() && open && vv) { win.style.top = vv.offsetTop + "px"; win.style.height = vv.height + "px"; }
    else { win.style.top = ""; win.style.height = ""; }
    btn.style.display = mobile() && open ? "none" : "";
  };
  const toggle = (open) => { win.classList.toggle("open", open); fit(); if (open) input.focus(); };
  if (window.visualViewport) { visualViewport.addEventListener("resize", fit); visualViewport.addEventListener("scroll", fit); }
  btn.onclick = () => toggle(!win.classList.contains("open"));
  win.querySelector(".skc-x").onclick = () => toggle(false);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });

  window.skAsk = (t) => { toggle(true); input.value = t; form.requestSubmit(); };
  form.onsubmit = async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    add(text, "me"); input.value = ""; send.disabled = true;
    const wait = add("…", "bot");
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text, history: hist.slice(-10) }) });
      if (r.status === 429) wait.textContent = "You've reached the chat limit for now. Please try again later or email me directly.";
      else if (!r.ok) wait.textContent = "Sorry, something went wrong. Please try again.";
      else { const reply = (await r.json()).response; wait.textContent = reply; hist.push({ role: "user", content: text }, { role: "assistant", content: reply }); }
    } catch (err) { wait.textContent = "Sorry, I couldn't reach the assistant. Please try again."; }
    send.disabled = false; log.scrollTop = log.scrollHeight;
  };
})();
