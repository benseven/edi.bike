module.exports = function (eleventyConfig) {

  // eleventyConfig.addPassthroughCopy("site-css");
  eleventyConfig.addPassthroughCopy("site-js");
  eleventyConfig.addPassthroughCopy("site-assets");
  eleventyConfig.addPassthroughCopy("files");

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  eleventyConfig.setTemplateFormats([
    "njk",
    "md",
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp",
    "avif",
    "pdf"
  ]);

  // Return your Object options:
  return {
    dir: {
      input: "site",
      output: "_site"
    }
  }

};