const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  // Markdown and attribs plugin
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownLib = markdownIt(mdOptions)
    .use(markdownItAttrs)
    .disable("code");

  eleventyConfig.setLibrary("md", markdownLib);


  // eleventyConfig.addPassthroughCopy("site-css");
  eleventyConfig.addPassthroughCopy("site-js");
  eleventyConfig.addPassthroughCopy("site-assets");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("./site/**/assets/**");
  eleventyConfig.addPassthroughCopy("./site/**/**/assets/**");

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