module.exports = {
  eleventyComputed: {
    // Ricostruisce lo slug dal nome file originale (con data), perché
    // page.filePathStem/fileSlug di Eleventy la eliminano automaticamente.
    permalink: function(data) {
      var stem = data.page.inputPath
        .replace(/^\.\/src\/lab\//, "")
        .replace(/\.(md|njk)$/, "");
      return "/episteme-advisory/lab/" + stem + "/";
    }
  }
};
