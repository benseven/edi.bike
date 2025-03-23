module.exports = function (eleventyConfig) {
  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("site-css");
  eleventyConfig.addPassthroughCopy("site-js");
  eleventyConfig.addPassthroughCopy("site-assets");
  eleventyConfig.addPassthroughCopy("files");

  // Return your Object options:
  return {
    dir: {
      input: "site",
      output: "_site"
    }
  }

};