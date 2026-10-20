(function () {
  if (window.__jbcChat) return; window.__jbcChat = 1;
  var API = '/api/chat', BOOK = 'https://calendly.com/joelifeanyichukwu6/20min';
  var css = '\
#jbc-b{position:fixed;right:18px;bottom:18px;z-index:90;width:58px;height:58px;border-radius:50%;border:0;cursor:pointer;background:linear-gradient(135deg,#95dec4,#b8a9ea);color:#150c24;display:grid;place-items:center;box-shadow:0 10px 30px rgba(8,4,18,.45);transition:transform .2s}\
#jbc-b:hover{transform:scale(1.06)}#jbc-b svg{width:26px;height:26px}\
#jbc-b .dot{position:absolute;top:4px;right:4px;width:12px;height:12px;border-radius:50%;background:#ff6b8b;border:2px solid #150c24}\
#jbc-p{position:fixed;right:18px;bottom:88px;z-index:91;width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 110px));display:none;flex-direction:column;overflow:hidden;border-radius:22px;background:#1e1332;color:#f7f4fb;border:1px solid rgba(184,169,234,.28);box-shadow:0 24px 70px rgba(8,4,18,.6);font:15px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}\
#jbc-p.open{display:flex}\
#jbc-h{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#281a40;border-bottom:1px solid rgba(184,169,234,.2)}\
#jbc-h .av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#95dec4,#b8a9ea);display:grid;place-items:center;color:#150c24;font-weight:800;font-size:14px}\
#jbc-h b{display:block;font-size:15px}#jbc-h small{color:#aaa0c4;font-size:12px}\
#jbc-h button{margin-left:auto;background:none;border:0;color:#f7f4fb;font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}\
#jbc-m{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}\
.jbc-r{max-width:86%;padding:10px 13px;border-radius:16px;word-wrap:break-word;white-space:pre-wrap}\
.jbc-r.bot{align-self:flex-start;background:#2d2046;border-bottom-left-radius:5px}\
.jbc-r.me{align-self:flex-end;background:#95dec4;color:#150c24;border-bottom-right-radius:5px}\
.jbc-r a{color:inherit;text-decoration:underline;text-underline-offset:2px;font-weight:600}\
.jbc-r.bot a{color:#95dec4}\
.jbc-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:2px}\
.jbc-chips button{background:transparent;border:1px solid rgba(149,222,196,.55);color:#95dec4;border-radius:999px;padding:7px 12px;font:inherit;font-size:13px;cursor:pointer}\
.jbc-chips button:hover{background:rgba(149,222,196,.12)}\
.jbc-ty{align-self:flex-start;display:flex;gap:4px;padding:12px 14px;background:#2d2046;border-radius:16px}\
.jbc-ty i{width:7px;height:7px;border-radius:50%;background:#aaa0c4;animation:jbcb 1s infinite}.jbc-ty i:nth-child(2){animation-delay:.15s}.jbc-ty i:nth-child(3){animation-delay:.3s}\
@keyframes jbcb{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}\
#jbc-f{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(184,169,234,.2);background:#1e1332}\
#jbc-i{flex:1;min-width:0;background:#150c24;color:#f7f4fb;border:1px solid rgba(184,169,234,.3);border-radius:999px;padding:11px 15px;font:inherit;font-size:15px;outline:none}\
#jbc-i:focus{border-color:#95dec4}\
#jbc-s{border:0;border-radius:50%;width:42px;height:42px;background:#95dec4;color:#150c24;cursor:pointer;display:grid;place-items:center;flex:none}\
#jbc-s:disabled{opacity:.5;cursor:default}\
#jbc-n{padding:0 14px 10px;font-size:11px;color:#8f86a8;text-align:center;background:#1e1332}\
@media(max-width:900px){#jbc-b{bottom:84px}#jbc-p{bottom:152px;height:min(520px,calc(100vh - 170px))}}\
@media(max-width:480px){#jbc-p{right:12px}}\
@media(prefers-reduced-motion:reduce){#jbc-b,.jbc-ty i{transition:none;animation:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var wrap = document.createElement('div');
  wrap.innerHTML = '\
<button id="jbc-b" type="button" aria-label="Chat with Joel\'s assistant" aria-expanded="false"><span class="dot" aria-hidden="true"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/></svg></button>\
<section id="jbc-p" role="dialog" aria-label="Chat with Joel\'s assistant">\
<div id="jbc-h"><div class="av">J</div><div><b>Joel\'s assistant</b><small>Ask about services, work or booking</small></div><button type="button" id="jbc-x" aria-label="Close chat">&times;</button></div>\
<div id="jbc-m" aria-live="polite"></div>\
<form id="jbc-f" autocomplete="off"><input id="jbc-i" type="text" maxlength="500" placeholder="Type your question" aria-label="Your message"><button id="jbc-s" type="submit" aria-label="Send"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg></button></form>\
<div id="jbc-n">AI assistant. Joel replies personally to every enquiry.</div></section>';
  document.body.appendChild(wrap);

  var b = document.getElementById('jbc-b'), p = document.getElementById('jbc-p'), m = document.getElementById('jbc-m'),
      f = document.getElementById('jbc-f'), inp = document.getElementById('jbc-i'), sb = document.getElementById('jbc-s');
  var hist = [], busy = false, started = false;
  try { var s = JSON.parse(sessionStorage.getItem('jbc') || '[]'); if (Array.isArray(s)) hist = s.slice(-14); } catch (e) {}
  function save() { try { sessionStorage.setItem('jbc', JSON.stringify(hist.slice(-14))); } catch (e) {} }

  function esc(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function fmt(t) {
    var h = esc(t).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g, function (u) {
      var label = /calendly/.test(u) ? 'Book a 20 min call' : u.replace(/^https?:\/\/(www\.)?/, '');
      return '<a href="' + u + '" target="_blank" rel="noopener">' + label + '</a>';
    });
    h = h.replace(/([\w.+-]+@[\w-]+\.[\w.-]+[\w])/g, '<a href="mailto:$1">$1</a>');
    return h;
  }
  function add(role, text) {
    var d = document.createElement('div'); d.className = 'jbc-r ' + (role === 'user' ? 'me' : 'bot');
    if (role === 'user') d.textContent = text; else d.innerHTML = fmt(text);
    m.appendChild(d); m.scrollTop = m.scrollHeight; return d;
  }
  function chips() {
    var c = document.createElement('div'); c.className = 'jbc-chips';
    ['What do you build?', 'Show me your work', 'How does a project start?', 'I want to book a call'].forEach(function (q) {
      var x = document.createElement('button'); x.type = 'button'; x.textContent = q;
      x.onclick = function () { c.remove(); send(q); }; c.appendChild(x);
    });
    m.appendChild(c); m.scrollTop = m.scrollHeight;
  }
  function typing() {
    var t = document.createElement('div'); t.className = 'jbc-ty'; t.innerHTML = '<i></i><i></i><i></i>';
    m.appendChild(t); m.scrollTop = m.scrollHeight; return t;
  }
  function start() {
    if (started) return; started = true;
    if (hist.length) { hist.forEach(function (h) { add(h.role, h.content); }); }
    else { add('assistant', 'Hi, I\'m Joel\'s assistant. I can tell you what he builds, show you his work, or help you book a free 20 minute call. What are you working on?'); chips(); }
  }
  function open(v) {
    p.classList.toggle('open', v); b.setAttribute('aria-expanded', v ? 'true' : 'false');
    var dot = b.querySelector('.dot'); if (dot) dot.remove();
    if (v) { start(); setTimeout(function () { inp.focus(); }, 50); }
  }
  b.onclick = function () { open(!p.classList.contains('open')); };
  document.getElementById('jbc-x').onclick = function () { open(false); b.focus(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && p.classList.contains('open')) open(false); });

  function send(text) {
    text = (text || '').trim(); if (!text || busy) return;
    busy = true; sb.disabled = true; inp.value = '';
    add('user', text); hist.push({ role: 'user', content: text }); save();
    var t = typing();
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: hist.slice(-12) }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (o) {
        t.remove();
        var reply = o.ok && o.j.reply ? o.j.reply : (o.j.error || 'Sorry, something went wrong. You can book a call here: ' + BOOK);
        add('assistant', reply);
        if (o.ok && o.j.reply) { hist.push({ role: 'assistant', content: o.j.reply }); save(); }
        else { hist.pop(); save(); }
      })
      .catch(function () { t.remove(); add('assistant', 'I could not connect. You can book a call here: ' + BOOK); hist.pop(); save(); })
      .then(function () { busy = false; sb.disabled = false; inp.focus(); });
  }
  f.addEventListener('submit', function (e) { e.preventDefault(); send(inp.value); });
  if (/(^|[?&])chat=open/.test(location.search)) open(true);
})();
