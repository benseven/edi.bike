const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = async function (eleventyConfig) {
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

  // Markdown filter for frontmatter content

  const markdownify = (content) => markdownLib.renderInline(content);

  eleventyConfig.addFilter('markdownify', markdownify);

  // Filter to do pipe separators with margins, e.g. in a horizontal list of links

  eleventyConfig.addShortcode("pipespacer", function() {
    return `<span class="util--pipespacer">|</span>`
  });

  // Enable automatic IDs for linking to headings

  const { IdAttributePlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPlugin(IdAttributePlugin);


  // Date formatting filter

  // This could be made nicer in future using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Europe/London",
    }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Europe/London",
    }).setLocale('en').toISODate();
  });

  // eleventyConfig.addPassthroughCopy("site-css");
  eleventyConfig.addPassthroughCopy("site-js");
  eleventyConfig.addPassthroughCopy("site-assets");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("articles/author-images/**");
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