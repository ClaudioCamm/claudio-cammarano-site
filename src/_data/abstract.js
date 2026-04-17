// _data/abstract.js
// Fetches the 6 most recent posts from The Abstract (Substack RSS).
// Uses only Node.js built-in modules — no extra dependencies.
// Returns { posts: [] } silently on any network or parse error
// so the homepage conditional hides the block gracefully.

const https = require('https');

function extractText(str) {
  const cdata = str.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  const raw = cdata ? cdata[1] : str;
  return raw.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
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
            const excerpt = rawDesc.length > 150 ? rawDesc.slice(0, 147) + '…' : rawDesc;

            if (title && url) {
              posts.push({ title, url, date, excerpt });
            }
          }

          resolve({ posts });
        } catch (_) {
          resolve(fallback);
        }
      });
    });

    req.on('error', () => resolve(fallback));
    req.setTimeout(6000, () => { req.destroy(); resolve(fallback); });
  });
};
