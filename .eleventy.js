module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/downloads");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  
  // === SHORTCODES ===
  
  eleventyConfig.addShortcode("kicker", function(text) {
    return `<p class="kicker">${text}</p>`;
  });
  
  eleventyConfig.addShortcode("pullquote", function(text) {
    return `<blockquote class="pullquote">${text}</blockquote>`;
  });
  
  eleventyConfig.addShortcode("figure", function(src, caption) {
    return `
      <figure class="figure-wrapper">
        <img src="${src}" alt="${caption || ''}">
        ${caption ? `<figcaption class="caption">${caption}</figcaption>` : ''}
      </figure>
    `;
  });
  
  eleventyConfig.addShortcode("infobox", function(content) {
    return `<div class="info-box">${content}</div>`;
  });
  
  eleventyConfig.addShortcode("dataviz", function(content) {
    return `<div class="data-viz">${content}</div>`;
  });
  
  // === COLLECTIONS ===
  
  eleventyConfig.addCollection("writings", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/writings/*.md")
      .sort((a, b) => b.date - a.date);
  });
  
  eleventyConfig.addCollection("curated", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/curated/*.md")
      .sort((a, b) => b.date - a.date);
  });
  
  eleventyConfig.addCollection("learning", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/learning/*.md");
  });
  
  // Mixed feed: writings + curated sorted by date descending
  eleventyConfig.addCollection("allPosts", function(collectionApi) {
    const writings = collectionApi.getFilteredByGlob("src/writings/*.md")
      .map(item => { item.data._postType = "writing"; return item; });
    const curated = collectionApi.getFilteredByGlob("src/curated/*.md")
      .map(item => { item.data._postType = "curated"; return item; });
    return [...writings, ...curated]
      .sort((a, b) => b.date - a.date);
  });
  
  // === FILTERS ===
  
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Intl.DateTimeFormat('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  });

  eleventyConfig.addFilter("isoDate", function(date) {
    return new Date(date).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("jsonEscape", function(str) {
    if (!str) return '';
    return JSON.stringify(String(str)).slice(1, -1);
  });

  eleventyConfig.addFilter("readingTime", function(content) {
    if (!content) return '';
    const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.split(' ').filter(w => w.length > 0).length;
    const minutes = Math.ceil(words / 200);
    return minutes + ' min';
  });

  eleventyConfig.addFilter("limit", function(arr, count) {
    if (!arr) return [];
    return arr.slice(0, count);
  });

  eleventyConfig.addFilter("excerpt", function(content, maxLen) {
    if (!content) return '';
    maxLen = maxLen || 420;
    let text = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    text = text.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '');
    // Preserve heading text as its own line before stripping HTML
    text = text.replace(/<\/h[1-6]>/gi, '\n');
    text = text.replace(/<[^>]*>/g, ' ');
    // Normalize spaces but keep newlines
    text = text.replace(/[ \t]+/g, ' ').replace(/\n[ \t]*/g, '\n').trim();
    text = text.replace(/\n{2,}/g, '\n');
    if (text.length <= maxLen) return text;
    const truncated = text.substring(0, maxLen);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpace > Math.floor(maxLen * 0.5) ? lastSpace : maxLen) + '…';
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
