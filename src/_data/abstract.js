// _data/abstract.js
// Fetches the 6 most recent posts from The Abstract (Substack RSS).
// Uses only Node.js built-in modules — no extra dependencies.
// Returns { posts: [] } silently on any network or parse error
// so the homepage conditional hides the block gracefully.

const https = require('https');

function extractText(str) {
  const cdata = str.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  const raw = cdata ? cdata[1] : str;
  return raw
    .replace(/<[^>]+>/g, '')
    // Entità numeriche decimali (&#8212;) ed esadecimali (&#x2014;)
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    // Entità nominali più comuni nei feed (&amp; per ultima)
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

function formatDateEn(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  } catch (_) {
    return '';
  }
}

module.exports = async function () {
  return new Promise((resolve) => {
    const fallback = { posts: [] };

    const req = https.get('https://claudiocammarano.substack.com/feed', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const posts = [];
          const itemRegex = /<item>([\s\S]*?)<\/item>/g;
          let match;

          while ((match = itemRegex.exec(data)) !== null && posts.length < 6) {
            const item = match[1];
            const get = (tag) => {
              const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
              return m ? m[1] : '';
            };

            const title   = extractText(get('title'));
            const url     = get('link').trim();
            const date    = formatDateEn(get('pubDate').trim());
            const rawDesc = extractText(get('description'));
            const excerpt = rawDesc.length > 200 ? rawDesc.slice(0, 197) + '…' : rawDesc;
            const subtitle = rawDesc.length > 80 ? rawDesc.slice(0, 77) + '…' : rawDesc;

            if (title && url) {
              posts.push({ title, url, date, excerpt, subtitle });
            }
          }

          if (!posts.length) {
            console.warn("[The Abstract] Feed raggiunto ma nessun post estratto: " +
              "il blocco in home e in /newsletter/ non verra' renderizzato.");
          }
          resolve({ posts });
        } catch (_) {
          resolve(fallback);
        }
      });
    });

    // Il degrado e' volutamente silenzioso lato pagina (il blocco sparisce senza
    // rompere il layout), ma non lato build: senza un avviso in console un build
    // eseguito offline sembra una perdita di contenuto invece che un fetch fallito.
    req.on('error', (e) => {
      console.warn("[The Abstract] Feed Substack irraggiungibile (" + (e.code || e.message) +
        "): il blocco in home e in /newsletter/ non verra' renderizzato. " +
        "Se stai buildando offline e' atteso: rilancia il build online.");
      resolve(fallback);
    });
    req.setTimeout(6000, () => {
      req.destroy();
      console.warn("[The Abstract] Timeout sul feed Substack (6s): " +
        "il blocco in home e in /newsletter/ non verra' renderizzato.");
      resolve(fallback);
    });
  });
};
