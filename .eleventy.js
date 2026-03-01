module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/downloads");
  
  // === SHORTCODES PER SCRITTURA ===
  
  // Catenaccio/Kicker
  eleventyConfig.addShortcode("kicker", function(text) {
    return `<p class="kicker">${text}</p>`;
  });
  
  // Citazione in evidenza
  eleventyConfig.addShortcode("pullquote", function(text) {
    return `<blockquote class="pullquote">${text}</blockquote>`;
  });
  
  // Immagine con didascalia
  eleventyConfig.addShortcode("figure", function(src, caption) {
    return `
      <figure class="figure-wrapper">
        <img src="${src}" alt="${caption || ''}">
        ${caption ? `<figcaption class="caption">${caption}</figcaption>` : ''}
      </figure>
    `;
  });
  
  // Box informativo
  eleventyConfig.addShortcode("infobox", function(content) {
    return `<div class="info-box">${content}</div>`;
  });
  
  // Dati/Grafici
  eleventyConfig.addShortcode("dataviz", function(content) {
    return `<div class="data-viz">${content}</div>`;
  });
  
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
  
  eleventyConfig.addFilter("formatDate", function(date) {
    return new Intl.DateTimeFormat('it-IT', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
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